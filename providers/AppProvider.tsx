import React, { PropsWithChildren } from "react";
import { ChainProvider } from "@cosmos-kit/react-lite";
import { wallets as vectisWallet } from "@cosmos-kit/vectis-extension";
import CosmosProvider from "./CosmosProvider";
import { chains } from "~/utils/chains";
import { ModalWallet } from "~/components/modals";

const AppProvider: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <ChainProvider wallets={[...vectisWallet]} assetLists={[]} chains={chains} walletModal={(props) => <ModalWallet {...props} />}>
      <CosmosProvider>{children}</CosmosProvider>
    </ChainProvider>
  );
};

export default AppProvider;
