import { useChainWallet } from "@cosmos-kit/react-lite";
import React, { PropsWithChildren, createContext, useEffect, useMemo, useState } from "react";
import { TxService } from "~/services/txService";
import { QueryService } from "~/services/queryService";
import { CoinInfo } from "~/interfaces";
import { ContractAddresses } from "~/interfaces/contracts";

interface CosmosContextProps {
  connect: () => Promise<void>;
  address?: string;
  username?: string;
  defaultFee: CoinInfo;
  addresses: ContractAddresses;
  queryService: QueryService;
  txService: TxService | null;
  disconnect: () => Promise<void>;
}

const CosmosContext = createContext<CosmosContextProps | null>(null);

const CosmosProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const {
    connect,
    username,
    address,
    chain: chainInfo,
    assets,
    getOfflineSignerDirect,
    disconnect,
  } = useChainWallet("injectivetestnet", "vectis-extension");
  const [txService, setTxService] = useState<TxService | null>(null);
  const [queryService, setQueryService] = useState<QueryService | null>(null);

  const addresses = useMemo(
    () => ({
      adapterAddress: process.env.NEXT_PUBLIC_ADAPTER_ADDRESS as string,
      launchpadAddress: process.env.NEXT_PUBLIC_LAUNCHPAD_ADDRESS as string,
      verifierAddress: process.env.NEXT_PUBLIC_VERIFIER_ADDRESS as string,
    }),
    [chainInfo]
  );

  const defaultFee = useMemo(() => {
    const { average_gas_price, denom } = chainInfo.fees!.fee_tokens[0];
    const assetInfo = assets?.assets.find((asset) => asset.base === denom);
    if (!assetInfo) throw new Error("Fee asset info not found");
    const denomUnit = assetInfo.denom_units.find((u) => u.denom === assetInfo.display);
    if (!denomUnit) throw new Error("Fee denom unit not found");

    return {
      exponent: denomUnit.exponent as number,
      averageGasPrice: average_gas_price as number,
      udenom: assetInfo.base,
      symbol: assetInfo.symbol,
      img: assetInfo.logo_URIs?.svg || assetInfo.logo_URIs?.png || assetInfo.logo_URIs?.jpeg,
      coingeckoId: assetInfo.coingecko_id,
    };
  }, [chainInfo, assets]);

  const endpoints = useMemo(() => {
    const domain = chainInfo.chain_name.includes("testnet") ? "testcosmos.directory" : "cosmos.directory";
    return {
      rpcUrl: `https://rpc.${domain}/${chainInfo.chain_name}`,
      restUrl: `https://rest.${domain}/${chainInfo.chain_name}`,
      grpcUrl: chainInfo.apis!.grpc![0].address,
    };
  }, [chainInfo]);

  useEffect(() => {
    QueryService.connect(endpoints.rpcUrl, addresses).then(setQueryService);
  }, []);

  useEffect(() => {
    (async () => {
      if (!address || !getOfflineSignerDirect) return;
      const signer = getOfflineSignerDirect();
      const service = await TxService.connectWithSigner(signer, { endpoints, defaultFee, addresses });
      setTxService(service);
    })();
  }, [address]);

  return (
    <CosmosContext.Provider
      value={{ connect, address, username, defaultFee, disconnect, queryService, txService, addresses } as CosmosContextProps}
    >
      {children}
    </CosmosContext.Provider>
  );
};

export const useCosmos = () => {
  const context = React.useContext(CosmosContext);
  if (!context) {
    throw new Error("useCosmos must be used within a CosmosProvider");
  }
  return context;
};

export default CosmosProvider;
