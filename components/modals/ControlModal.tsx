import { AnimatePresence } from "framer-motion";
import React, { useMemo } from "react";
import ModalTypes from "../../interfaces/ModalTypes";
import { useModal } from "../../providers/ModalProvider";
import { motion } from "framer-motion";
import ModalTickets from "./ModalBuyTokens";
import CrossCircleIcon from "../Icons/CrossCircleIcon";

const modals = {
  [ModalTypes.buyTickets]: ModalTickets,
};

export const modalDropIn = {
  hidden: {
    y: "-100vh",
    opacity: 0,
  },
  visible: {
    y: "0",
    opacity: 1,
    transition: {
      duration: 0.5,
      type: "spring",
      damping: 25,
      stiffness: 500,
    },
  },
  exit: {
    y: "100vh",
    opacity: 0,
  },
};

const ControlModal: React.FC = () => {
  const { activeModal, isModalVisible, hideModal } = useModal();
  const Modal = useMemo(() => modals[activeModal?.modalName as unknown as keyof typeof modals], [activeModal]) as React.FC<any>;

  if (!isModalVisible || !activeModal) return <AnimatePresence initial={false} mode="wait" onExitComplete={() => null} />;

  return (
    <AnimatePresence initial={false} mode="wait" onExitComplete={() => null}>
      <motion.div
        onClick={hideModal}
        className="backdrop-blur-lg w-screen h-screen fixed top-0 z-50 flex items-center justify-center p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          onClick={(e) => e.stopPropagation()}
          className="max-w-5xl w-full p-4 md:p-8 bg-white rounded-lg flex flex-col gap-8"
          variants={modalDropIn}
          initial={modalDropIn.hidden}
          animate={modalDropIn.visible}
          exit={modalDropIn.exit}
        >
          <div className="flex gap-2 flex-col">
            <div className="w-full flex items-center justify-end">
              <button onClick={hideModal}>
                <CrossCircleIcon className="w-5 h-5 text-gray-500" />
              </button>
            </div>
            <Modal {...activeModal.modalProps} />
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ControlModal;
