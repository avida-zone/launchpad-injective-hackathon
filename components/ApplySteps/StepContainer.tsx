import React from "react";
import clsx from "clsx";
import { motion, AnimatePresence } from "framer-motion";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Success from "./Success";
import SimpleButton from "../Buttons/Button";
import Stepper from "../Stepper";

const steps = [<Step1 key="step-0" />, <Step2 key="step-1" />, <Step3 key="step-2" />, <Success key="step-success" />];

interface Props {
  currentStep: number;
  setStep: (step: number) => void;
  maxStep: number;
}

const StepContainer: React.FC<Props> = ({ currentStep, setStep, maxStep }) => {
  return (
    <div className="flex flex-col bg-white flex-1 p-4 rounded-lg gap-8">
      <div>
        <div>
          <Stepper maxStep={maxStep} currentStep={currentStep} />
        </div>
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={currentStep}
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -10, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="flex flex-col gap-10 flex-1 w-full items-center justify-center"
        >
          {steps[currentStep]}
        </motion.div>
      </AnimatePresence>
      <div className="flex w-full items-center justify-between">
        <div>
          <SimpleButton
            variant="cuaternary"
            onClick={() => {
              setStep(currentStep - 1);
            }}
            className={clsx(currentStep >= 1 && currentStep < maxStep - 1 ? "" : "scale-0 !w-0 !p-0")}
          >
            Back
          </SimpleButton>
        </div>
        <div>
          <SimpleButton
            onClick={() => {
              setStep(currentStep + 1);
            }}
            className={clsx(currentStep < maxStep - 1 ? "" : "scale-0 !w-0 !p-0")}
          >
            Next
          </SimpleButton>
        </div>
      </div>
    </div>
  );
};

export default StepContainer;
