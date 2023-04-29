import React, { Dispatch, useRef } from "react";
import { useClickAway } from "react-use";

interface WalletModalProps {
  isOpen: boolean;
  setOpen: Dispatch<boolean>;
  walletRepo?: {
    connect: (walletName?: string, sync?: boolean) => Promise<void>;
  };
}

export const ModalWallet: React.FC<WalletModalProps> = ({ walletRepo, setOpen, isOpen }) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const handleConnect = async (walletName?: string) => {
    if (!walletRepo) return;
    await walletRepo.connect(walletName);
    setOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className="flex flex-col items-center justify-center fixed z-50 bg-stone-700/50 backdrop-blur-lg w-screen h-screen">
      <button onClick={() => handleConnect("vectis-extension")}>Vectis</button>
      <div ref={modalRef} className="rounded-3xl max-w-[480px] w-full p-4 md:p-10 bg-ss-bg flex flex-col gap-8">
        <h2 className="font-bold text-4xl" onClick={() => setOpen(false)}>
          Choose your wallet
        </h2>
      </div>
    </div>
  );
};
