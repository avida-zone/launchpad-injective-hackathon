import { DeliverTxResponse, ExecuteResult } from "@cosmjs/cosmwasm-stargate";
import { Coin } from "@cosmjs/proto-signing";

export type txClient = {
  execute(
    senderAddress: string,
    contractAddress: string,
    msg: any,
    fee: "auto" | number,
    memo?: string,
    funds?: readonly Coin[]
  ): Promise<void | ExecuteResult>;
  sendTokens(
    senderAddress: string,
    recipientAddress: string,
    amount: readonly Coin[],
    fee: "auto" | number,
    memo?: string
  ): Promise<void | DeliverTxResponse>;
};
