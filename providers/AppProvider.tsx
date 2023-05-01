import React, { PropsWithChildren } from "react";
import { ChainProvider } from "@cosmos-kit/react-lite";
import { wallets as vectisWallet } from "@cosmos-kit/vectis-extension";
import CosmosProvider from "./CosmosProvider";
import { chains } from "~/utils/chains";
import { ModalProvider } from "./ModalProvider";
import ModalWallet from "~/components/Modals/ModalWallet";

const AppProvider: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <ChainProvider wallets={[...vectisWallet]} assetLists={[]} chains={chains} walletModal={(props) => <ModalWallet {...props} />}>
      <CosmosProvider>
        <ModalProvider>{children}</ModalProvider>
      </CosmosProvider>
    </ChainProvider>
  );
};

export default AppProvider;
