import React, { PropsWithChildren } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { ChainProvider } from "@cosmos-kit/react-lite";
import { wallets as vectisWallet } from "@cosmos-kit/vectis-extension";
import CosmosProvider from "./CosmosProvider";
import chains from "~/utils/chains";
import assets from "~/utils/assets";
import { ModalProvider } from "./ModalProvider";

const queryClient = new QueryClient();

const AppProvider: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <ChainProvider
        assetLists={assets}
        chains={chains}
        wallets={[...vectisWallet]}
        endpointOptions={{
          endpoints: {
            junotestnet: {
              rest: ["https://rest.testcosmos.directory/junotestnet"],
              rpc: ["https://rpc.testcosmos.directory/junotestnet"],
            },
            injectivetestnet: {
              rest: ["https://rest.testcosmos.directory/injectivetestnet"],
              rpc: ["https://rpc.testcosmos.directory/injectivetestnet"],
            },
          },
        }}
      >
        <CosmosProvider>
          <ModalProvider>{children}</ModalProvider>
        </CosmosProvider>
      </ChainProvider>
    </QueryClientProvider>
  );
};

export default AppProvider;
