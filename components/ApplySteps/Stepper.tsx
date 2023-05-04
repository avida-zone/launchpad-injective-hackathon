import clsx from "clsx";
import React from "react";

const textSteps = ["Step 1: Define RG-Token", "Step 2: Define Proofs", "Step 3: Final Preview", "Application sent"];

const Stepper: React.FC<{ maxStep: number; currentStep: number }> = ({ maxStep, currentStep }) => {
  return (
    <div>
      <div className="flex items-center justify-center w-full md:px-14 px-4">
        {Array.from({ length: maxStep }).map((_, i) => {
          return (
            <React.Fragment key={`step-${i}`}>
              <div
                className={clsx(
                  "transition-all border rounded-full p-2 w-8 h-8 text-lg leading-6 flex items-center justify-center",
                  { "border-kashmir-blue-500 bg-kashmir-blue-500 text-white": i < currentStep },
                  { "border-java-green-500 text-java-green-700": i >= currentStep },
                  { "!border-success text-success": i === maxStep - 1 && i === currentStep }
                )}
              >
                {i + 1}
              </div>
              <span
                className={clsx(
                  "h-[5px] flex-1",
                  { "bg-kashmir-blue-500": i < currentStep },
                  {
                    "bg-gradient bg-gradient-to-r from-kashmir-blue-500 to-java-green-500":
                      i === currentStep - 1 && currentStep !== maxStep - 1,
                  },
                  { "bg-java-green-500": i >= currentStep },
                  { "bg-gradient bg-gradient-to-r from-kashmir-blue-500 to-success": i === maxStep - 2 && currentStep === maxStep - 1 },
                  { hidden: i === maxStep - 1 }
                )}
              />
            </React.Fragment>
          );
        })}
      </div>
      <div className=" grid grid-cols-4 w-full content-center mt-2 gap-4">
        {textSteps.map((text, i) => {
          return (
            <div
              className={clsx(
                `text-xs text-center transition-all`,
                { "text-gray-400": i !== currentStep },
                { "text-right md:pr-8": i === maxStep - 1 }
              )}
              key={`text-${i}`}
            >
              {text}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Stepper;
