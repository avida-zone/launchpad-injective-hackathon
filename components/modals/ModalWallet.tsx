import clsx from "clsx";
import React, { useEffect, Dispatch } from "react";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import { useChain } from "@cosmos-kit/react-lite";
import { modalDropIn } from "./ControlModal";
import { desktopWallets } from "~/config/wallets";
import Button from "../Buttons/Button";

const network = process.env.NEXT_PUBLIC_NETWORK as string;

interface WalletModalProps {
  isOpen: boolean;
  setOpen: Dispatch<boolean>;
  walletRepo?: {
    connect: (walletName?: string, sync?: boolean) => Promise<void>;
  };
}

const ModalWallet: React.FC<WalletModalProps> = ({ isOpen, setOpen, walletRepo }) => {
  /* const { isWalletConnected } = useChain(network);

  const connectWallet = async (wallet: string) => {
    if (!walletRepo) return;
    await walletRepo.connect(wallet);
  };

  useEffect(() => {
    if (!isWalletConnected) return;
    setOpen(false);
  }, [isWalletConnected]); */

  if (!isOpen) return null;

  return (
    <AnimatePresence initial={false} mode="wait" onExitComplete={() => null}>
      <motion.div
        onClick={() => setOpen(false)}
        className="backdrop-blur-[10px] w-screen h-screen fixed top-0 z-50 flex items-center justify-center p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          onClick={(e) => e.stopPropagation()}
          className="rounded-3xl max-w-[480px] w-full p-4 md:p-10 bg-white flex flex-col gap-8"
          variants={modalDropIn}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <div className="flex items-start justify-center gap-4 flex-col">
            {desktopWallets.map((wallet, i) => {
              return (
                <Button variant="secondary" key={i} className="w-full" /* onClick={() => connectWallet(wallet)} */>
                  <img src={`/wallets/${wallet}.svg`} className={clsx("h-8 w-full")} />
                </Button>
              );
            })}
          </div>

          <div className="flex flex-col gap-4">
            <Button variant="tertiary" onClick={() => setOpen(false)}>
              Cancel
            </Button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ModalWallet;
