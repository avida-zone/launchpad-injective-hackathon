import { Coin, OfflineDirectSigner } from "@cosmjs/proto-signing";
import {
  BaseAccount,
  ChainRestAuthApi,
  createTransaction,
  getTxRawFromTxRawOrDirectSignResponse,
  MsgExecuteContract,
  MsgSend,
  TxResponse,
  TxRestApi,
} from "@injectivelabs/sdk-ts";

import { AccountDetails } from "@injectivelabs/sdk-ts/dist/cjs/types/auth";
import { BigNumber, DEFAULT_GAS_LIMIT, DEFAULT_GAS_PRICE } from "@injectivelabs/utils";
import { Endpoints } from "~/interfaces";

export default class InjectiveClient {
  authApi: ChainRestAuthApi;
  txClient: TxRestApi;
  constructor(readonly signer: OfflineDirectSigner, readonly endpoints: Endpoints) {
    this.authApi = new ChainRestAuthApi(this.endpoints.restUrl);
    this.txClient = new TxRestApi(this.endpoints.restUrl);
  }

  async getAccountDetails(senderAddress: string): Promise<AccountDetails> {
    const accountDetails = await this.authApi.fetchAccount(senderAddress);
    return BaseAccount.fromRestApi(accountDetails);
  }

  async signAndBroadcast(senderAddress: string, message: any, memo?: string): Promise<TxResponse> {
    const { accountNumber, sequence } = await this.getAccountDetails(senderAddress);

    const [{ pubkey }] = await this.signer.getAccounts();

    const { signDoc } = createTransaction({
      pubKey: Buffer.from(pubkey).toString("base64"),
      accountNumber,
      sequence,
      message,
      chainId: "injective-888",
      memo,
      fee: {
        amount: [{ amount: new BigNumber(DEFAULT_GAS_LIMIT * 3).times(DEFAULT_GAS_PRICE).toString(), denom: "inj" }],
        gas: (DEFAULT_GAS_LIMIT * 3).toString(),
      },
    });

    try {
      const directSignResponse = await this.signer.signDirect(senderAddress, signDoc as any);
      const txRaw = getTxRawFromTxRawOrDirectSignResponse(directSignResponse);
      return await this.txClient.broadcast(txRaw);
    } catch (err) {
      console.log(err);
      throw err;
    }
  }

  async execute(
    senderAddress: string,
    contractAddress: string,
    msg: any,
    fee: "auto" | number,
    memo?: string,
    funds?: readonly Coin[]
  ): Promise<void> {
    const message = MsgExecuteContract.fromJSON({
      contractAddress,
      sender: senderAddress,
      msg,
      funds: funds as { amount: string; denom: string }[],
    });

    await this.signAndBroadcast(senderAddress, message, memo);
  }

  async sendTokens(
    senderAddress: string,
    recipientAddress: string,
    amount: readonly Coin[],
    fee: "auto" | number,
    memo?: string
  ): Promise<void> {
    const message = MsgSend.fromJSON({
      amount: amount[0],
      dstInjectiveAddress: recipientAddress,
      srcInjectiveAddress: senderAddress,
    });

    await this.signAndBroadcast(senderAddress, message, memo);
  }
}
