import React, { useMemo } from "react";
import clsx from "clsx";
import { motion, AnimatePresence } from "framer-motion";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Success from "./Success";
import SimpleButton from "../Buttons/Button";
import Stepper from "./Stepper";
import Preview from "./Preview";
import { FormProvider, useForm } from "react-hook-form";
import ConnectWallet from "../layout/ConnectWallet";
import { useCosmos } from "~/providers/CosmosProvider";

const steps = [Step1, Step2, Preview, Success];

interface Props {
  currentStep: number;
  setStep: (step: number) => void;
  maxStep: number;
}
export interface FormInputsRG20 {
  decimals: number;
  name: string;
  imgUrl: string;
  price: string;
  trusted_issuers: string;
  cap: string;
  description: string;
  symbol: string;
  proof: any;
  transform?: string;
}

const StepContainer: React.FC<Props> = ({ currentStep, setStep, maxStep }) => {
  const { isWalletConnected } = useCosmos();
  const goBack = () => setStep(currentStep === 0 ? 0 : currentStep - 1);
  const goNext = () => setStep(currentStep === maxStep ? maxStep : currentStep + 1);

  const Component = useMemo(() => steps[currentStep], [currentStep]);

  const methods = useForm<FormInputsRG20>();
  return (
    <FormProvider {...methods}>
      <div className="flex flex-col bg-white flex-1 p-4 rounded-lg gap-8 snap-start overflow-hidden relative">
        {!isWalletConnected && (
          <div className="backdrop-blur w-full h-full absolute z-20 top-0 left-0 rounded-lg flex items-center justify-center flex-col gap-4">
            <p>Please connect wallet to continue</p>
            <ConnectWallet />
          </div>
        )}
        <div>
          <Stepper maxStep={maxStep} currentStep={currentStep} />
        </div>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ x: 10, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -10, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col gap-10 flex-1 w-full items-center justify-center"
          >
            <Component goBack={goBack} goNext={goNext} />
          </motion.div>
        </AnimatePresence>
      </div>
    </FormProvider>
  );
};

export default StepContainer;
