import { Coin, OfflineDirectSigner } from "@cosmjs/proto-signing";
import { Tendermint34Client } from "@cosmjs/tendermint-rpc";
import { CoinInfo, Endpoints, txClient } from "~/interfaces";
import { QueryService } from "./queryService";
import { SigningCosmWasmClient } from "@cosmjs/cosmwasm-stargate";
import { GasPrice } from "@cosmjs/stargate";
import InjectiveClient from "./injective";
import { ContractAddresses } from "~/interfaces/contracts";

export class TxService extends QueryService {
  constructor(
    readonly tmClient: Tendermint34Client,
    readonly txClient: txClient,
    readonly userAddr: string,
    readonly defaultFee: CoinInfo,
    readonly addresses: ContractAddresses
  ) {
    super(tmClient, addresses);
  }
  static async connectWithSigner(
    signer: OfflineDirectSigner,
    { endpoints, defaultFee, addresses }: { endpoints: Endpoints; defaultFee: CoinInfo; addresses: ContractAddresses }
  ): Promise<TxService> {
    const tmClient = await this.getTmClient(endpoints.rpcUrl);
    const [{ address }] = await signer.getAccounts();

    const client = endpoints.restUrl.includes("injective")
      ? new InjectiveClient(signer, endpoints)
      : await SigningCosmWasmClient.connectWithSigner(endpoints.rpcUrl, signer, {
          gasPrice: GasPrice.fromString(`${defaultFee.averageGasPrice}${defaultFee.udenom}`),
        });

    return new TxService(tmClient, client, address, defaultFee, addresses);
  }

  async createRgToken(message: any): Promise<void> {
    await this.txClient.execute(this.userAddr, this.addresses.launchpadAddress, message, "auto", undefined, [
      { amount: Math.pow(10, 19).toString(), denom: "inj" },
    ]);
  }

  async transformIntoRgToken(controllerAddr: string, contractAddr: string, funds: Coin, issuer: string): Promise<void> {
    const nonce = await this.getNonce(contractAddr, this.userAddr);
    const proof = await this.generateProof(controllerAddr, this.userAddr, nonce, issuer);

    const transform_msg = {
      transform: {
        proof,
        rg_token_addr: contractAddr,
      },
    };
    await this.txClient.execute(this.userAddr, this.addresses.launchpadAddress, transform_msg, "auto", undefined, [funds]);
  }

  async buyRgToken(controllerAddr: string, contractAddr: string, amount: string, funds: Coin, issuer: string): Promise<void> {
    const nonce = await this.getNonce(contractAddr, this.userAddr);
    const proof = await this.generateProof(controllerAddr, this.userAddr, nonce, issuer);
    const mint_msg = {
      mint: {
        amount,
        proof,
        rg_token_addr: contractAddr,
      },
    };
    await this.txClient.execute(this.userAddr, this.addresses.launchpadAddress, mint_msg, "auto", undefined, [funds]);
  }
}
