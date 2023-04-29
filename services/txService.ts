import { coin, decodePubkey, encodePubkey, makeSignBytes } from "@cosmjs/proto-signing";
import { Network, NetworkEndpoints, getNetworkEndpoints } from "@injectivelabs/networks";
import {
  BaseAccount,
  ChainRestAuthApi,
  CosmosTxV1Beta1Tx,
  MsgExecuteContract,
  MsgInstantiateContract,
  PublicKey,
  TxGrpcApi,
  TxRestClient,
  createTransaction,
  createTransactionAndCosmosSignDoc,
  getTxRawFromTxRawOrDirectSignResponse,
  hexToBase64,
} from "@injectivelabs/sdk-ts";
import { OfflineDirectSigner } from "@injectivelabs/sdk-ts/dist/cjs/core/accounts/signers/types/proto-signer";
import { AccountDetails } from "@injectivelabs/sdk-ts/dist/cjs/types/auth";
import { DEFAULT_BLOCK_TIMEOUT_HEIGHT, DEFAULT_STD_FEE } from "@injectivelabs/utils";
import { SignDoc, TxBody, AuthInfo, TxRaw } from "cosmjs-types/cosmos/tx/v1beta1/tx";
import axios from "axios";
import { toBase64 } from "@cosmjs/encoding";
import { EthSecp256k1Wallet } from "@injectivelabs/sdk-ts/dist/cjs/core/accounts/signers/OfflineAminoSigner";

export class TxService {
  network: Network;
  endpoints: NetworkEndpoints;
  authApi: ChainRestAuthApi;
  txClient: TxGrpcApi;
  constructor(readonly signer: OfflineDirectSigner, readonly userAddr: string) {
    this.network = Network.Testnet;
    this.endpoints = getNetworkEndpoints(this.network);
    this.authApi = new ChainRestAuthApi(this.endpoints.rest);
    this.txClient = new TxGrpcApi(this.endpoints.grpc);
  }

  async getAccountDetails(): Promise<AccountDetails> {
    const accountDetails = await this.authApi.fetchAccount(this.userAddr);
    return BaseAccount.fromRestApi(accountDetails);
  }

  async test() {
    // inj1l2leckq7ja230m3ppttzx9962as5dhez2lwkx7 Factory
    // inj17x69vnd8nxl4405nn7g8yznq30sqp8d2zr7ygy Wallet
    const { accountNumber, sequence } = await this.getAccountDetails();
    const msg = MsgInstantiateContract.fromJSON({
      admin: "inj17x69vnd8nxl4405nn7g8yznq30sqp8d2zr7ygy",
      codeId: 800,
      label: "Proxy Label",
      sender: "inj17x69vnd8nxl4405nn7g8yznq30sqp8d2zr7ygy",
      msg: {
        proxy_code_id: 798,
        proxy_multisig_code_id: 801,
        addr_prefix: "inj",
        wallet_fee: coin(20, "inj"),
      },
    });

    /*    const msg = MsgExecuteContract.fromJSON({
      sender: this.userAddr,
      msg: {
        create_wallet: {
          create_wallet_msg: {
            label: "Javier Wallet",
            relayers: [],
            controller_addr: this.userAddr,
            guardians: {
              addresses: ["inj1vtev6gdznag9ndn2tzh9lduuphw767qcql9jre"],
            },
            proxy_initial_funds: [],
          },
        },
      },
      contractAddress: "inj1l2leckq7ja230m3ppttzx9962as5dhez2lwkx7",
      funds: [coin(20, "inj")],
    }); */

    console.log("te");

    const [{ pubkey }] = await this.signer.getAccounts();
    console.log(Buffer.from(pubkey).toString("base64"));
    const { signDoc, txRaw, cosmosSignDoc } = createTransactionAndCosmosSignDoc({
      pubKey: Buffer.from(pubkey).toString("base64"),
      accountNumber,
      sequence,
      message: msg,
      chainId: "injective-888",
    });

    const p = CosmosTxV1Beta1Tx.SignDoc.decode(makeSignBytes(signDoc as any));

    console.log(TxBody.decode(signDoc.bodyBytes));

    try {
      const directSignResponse = await this.signer.signDirect(this.userAddr, signDoc as any);
      console.log(this.signer, "signer");
      console.log(TxBody.decode(directSignResponse.signed.bodyBytes));
      const txRaw = getTxRawFromTxRawOrDirectSignResponse(directSignResponse);
      console.log(directSignResponse);
      const resp = await this.txClient.broadcast(txRaw);
      console.log(resp);
    } catch (errr) {
      console.log(errr);
    }
  }
}
