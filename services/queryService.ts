import { WasmExtension, setupWasmExtension } from "@cosmjs/cosmwasm-stargate";
import {
  BankExtension,
  DistributionExtension,
  QueryClient,
  StakingExtension,
  TxExtension,
  setupBankExtension,
  setupDistributionExtension,
  setupStakingExtension,
  setupTxExtension,
} from "@cosmjs/stargate";
import { HttpBatchClient, Tendermint34Client } from "@cosmjs/tendermint-rpc";
import axios, { AxiosInstance } from "axios";
import { ContractAddresses } from "~/interfaces/contracts";
import { ContractResponse, WProof } from "~/interfaces/launchpad";
import { TokenInfoResponse } from "~/interfaces/rgcw20";
import { parseProof, parseSubProofReqParam } from "~/utils/misc";

export class QueryService {
  query: QueryClient & StakingExtension & BankExtension & TxExtension & DistributionExtension & WasmExtension;
  http: AxiosInstance;
  constructor(readonly tmClient: Tendermint34Client, readonly addresses: ContractAddresses) {
    this.http = axios.create();
    this.query = QueryClient.withExtensions(
      tmClient,
      setupStakingExtension,
      setupBankExtension,
      setupTxExtension,
      setupWasmExtension,
      setupDistributionExtension
    );
  }

  static async getTmClient(rpcUrl: string): Promise<Tendermint34Client> {
    const httpClient = new HttpBatchClient(rpcUrl, { batchSizeLimit: 10 });
    return await Tendermint34Client.create(httpClient);
  }

  static async connect(rpcUrl: string, addresses: ContractAddresses): Promise<QueryService> {
    const tmClient = await this.getTmClient(rpcUrl);
    return new QueryService(tmClient, addresses);
  }

  async getNonce(contractAddress: string, address: string) {
    return await this.query.wasm.queryContractSmart(contractAddress, {
      proof_nonce: { address },
    });
  }

  async getIssuerRequestParams() {
    const { data } = await axios.get("https://api-testnet.avida.zone/sub-proof-req-params/?issuer=gayadeed&issuer=identrust&issuer=infocert");
    return data.map(parseSubProofReqParam);
  }

  async getNewProjects(type: "new" | "transform") {
    const response = (await this.query.wasm.queryContractSmart(this.addresses.launchpadAddress, {
      registered_contracts: { contract_type: "new", limit: 10 },
    })) as ContractResponse[];

    const tokens = await Promise.all(
      response.map(async (r) => {
        const response = (await this.query.wasm.queryContractSmart(r.contract_address, { token_info: {} })) as TokenInfoResponse;
        const marketing = await this.query.wasm.queryContractSmart(r.contract_address, { marketing_info: {} });
        return { ...r, ...response, ...marketing };
      })
    );

    console.log(tokens);
    return tokens;
  }

  async getProject(contractAddress: string) {
    const response = (await this.query.wasm.queryContractSmart(contractAddress, { token_info: {} })) as TokenInfoResponse;
    const marketing = await this.query.wasm.queryContractSmart(contractAddress, { marketing_info: {} });
    const issuer = await this.query.wasm.queryContractSmart(contractAddress, { trusted_issuers: {} });
    return { ...response, ...marketing, issuer };
  }

  async generateProof(controller_addr: string, wallet_addr: string, nonce: string): Promise<WProof> {
    const { data } = await axios.post(
      `https://api-testnet.avida.zone/generate-proof/${controller_addr}/${wallet_addr}/${nonce}/?issuer=gayadeed&issuer=identrust&issuer=infocert`,
      { responseType: "json" }
    );

    return parseProof(data);
  }

  async getAllBalances(address: string) {
    const nativeBalances = await this.query.bank.allBalances(address);
    const nativesWithInfo = await Promise.all(
      nativeBalances.map(async (t) => {
        if (t.denom === "inj") return t;
        const metadata = await this.query.bank.denomMetadata(t.denom);
        return {
          ...t,
          ...metadata,
        };
      })
    );
    const newRgTokens = await this.getNewProjects("new");
    const transformRgTokens = await this.getNewProjects("transform");
    const rgNewTokensBalance = await Promise.all(
      newRgTokens.map(async (p) => {
        const balance = await this.query.wasm.queryContractSmart(p.contract_address, { balance: { address } });
        return {
          ...p,
          balance,
        };
      })
    );
    const rgTransformTokensBalance = await Promise.all(
      transformRgTokens.map(async (p) => {
        const balance = await this.query.wasm.queryContractSmart(p.contract_address, { balance: { address } });
        return {
          ...p,
          balance,
        };
      })
    );
    return {
      nativeBalances: nativesWithInfo,
      rgNewTokensBalance: rgNewTokensBalance.filter((p) => Number(p.balance.amount)),
      rgTransformTokensBalance: rgTransformTokensBalance.filter((p) => Number(p.balance.amount)),
    };
  }
}
