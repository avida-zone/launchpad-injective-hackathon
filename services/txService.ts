import { OfflineDirectSigner } from "@cosmjs/proto-signing";
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
}
