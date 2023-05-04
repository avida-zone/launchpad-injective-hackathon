import React, { PropsWithChildren } from "react";
import { ChainProvider } from "@cosmos-kit/react-lite";
import { wallets as vectisWallet } from "@cosmos-kit/vectis-extension";
import CosmosProvider from "./CosmosProvider";
import chains from "~/utils/chains";
import assets from "~/utils/assets";
import { ModalProvider } from "./ModalProvider";

const AppProvider: React.FC<PropsWithChildren> = ({ children }) => {
  return (
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
  );
};

export default AppProvider;
