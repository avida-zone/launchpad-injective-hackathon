import React, { useState, useCallback, PropsWithChildren } from "react";
import ModalTypes from "../interfaces/ModalTypes";

interface ModalStatus {
  showModal: (modalName: ModalTypes, modalProps?: Record<string, unknown>) => void;
  hideModal: () => void;
  isModalVisible: boolean;
  activeModal?: { modalName: ModalTypes; modalProps: Record<string, unknown> };
}

const ModalContext = React.createContext<ModalStatus | null>(null);

export const ModalProvider: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  const [activeModal, setSelectedModal] = useState<{ modalName: ModalTypes; modalProps: Record<string, unknown> }>();
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = useCallback(
    (modalName: ModalTypes, modalProps?: Record<string, unknown>) => {
      setSelectedModal({ modalName, modalProps: modalProps || {} });
      setIsModalVisible(true);
    },
    [setSelectedModal, setIsModalVisible]
  );

  const hideModal = useCallback(() => setIsModalVisible(false), [setIsModalVisible]);

  return <ModalContext.Provider value={{ showModal, hideModal, isModalVisible, activeModal }}>{children}</ModalContext.Provider>;
};

export const useModal = () => {
  const context = React.useContext(ModalContext);
  if (!context) throw new Error("useModal must be used within a ModalProvider");

  return context;
};
