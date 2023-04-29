import { useChain } from "@cosmos-kit/react-lite";
import React, { PropsWithChildren, createContext, useEffect, useState } from "react";
import { TxService } from "~/services/txService";
import { QueryService } from "~/services/queryService";

interface CosmosContextProps {
  connect: () => Promise<void>;
  address?: string;
  queryService: QueryService;
  txService: TxService | null;
  disconnect: () => Promise<void>;
}

const CosmosContext = createContext<CosmosContextProps | null>(null);

const CosmosProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const { connect, address, getOfflineSignerDirect, disconnect } = useChain("injectivetestnet");
  const [txService, setTxService] = useState<TxService | null>(null);

  useEffect(() => {
    if (!address || !getOfflineSignerDirect) return;
    const signer = getOfflineSignerDirect();
    const service = new TxService(signer, address);
    setTxService(service);
  }, [address]);

  return (
    <CosmosContext.Provider value={{ connect, address, disconnect, queryService: new QueryService(), txService }}>
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
