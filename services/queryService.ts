import { Network, NetworkEndpoints, getNetworkEndpoints } from "@injectivelabs/networks";
import { ChainGrpcWasmApi } from "@injectivelabs/sdk-ts";

export class QueryService {
  network: Network;
  endpoints: NetworkEndpoints;
  wasmApi: ChainGrpcWasmApi;
  constructor() {
    this.network = Network.Testnet;
    this.endpoints = getNetworkEndpoints(this.network);
    this.wasmApi = new ChainGrpcWasmApi(this.endpoints.grpc);
  }

  async queryWasm<T>(contractAddr: string, msg: unknown): Promise<T> {
    const query = Buffer.from(JSON.stringify(msg)).toString("base64");
    const response = await this.wasmApi.fetchSmartContractState(contractAddr, query);
    return JSON.parse(Buffer.from(response.data).toString()) as T;
  }
}
