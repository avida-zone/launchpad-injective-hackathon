import React from "react";
import Button from "../Buttons/Button";
import { useCosmos } from "~/providers/CosmosProvider";

const ConnectWallet: React.FC = () => {
  const { connect, username, disconnect } = useCosmos();
  return (
    <>
      {username ? (
        <Button variant="secondary" className="min-w-[150px] group relative overflow-hidden transition-all" onClick={disconnect}>
          <span className="absolute w-full bg-gradient-to-tr from-java-green-800 to-java-green-600 text-white h-full flex items-center justify-center translate-y-10 transition-all group-hover:translate-y-0">
            Disconnect
          </span>
          {username}
        </Button>
      ) : (
        <Button variant="tertiary" onClick={() => [connect()]}>
          Connect wallet
        </Button>
      )}
    </>
  );
};

export default ConnectWallet;
