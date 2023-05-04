import React, { useEffect, useState } from "react";
import InputRadio from "../Inputs/InputRadio";
import { AnimatePresence, motion } from "framer-motion";
import Button from "../Buttons/Button";
import { useCosmos } from "~/providers/CosmosProvider";
import { useFormContext } from "react-hook-form";
import { FormInputsRG20 } from "./StepContainer";
import useRest from "~/hooks/useRest";

const issuers = ["Gayadeed SpA", "Identrust LLC", "InfoCert SpA"];
const schemas = ["Identify Verification (Physical person)", "AML Checks", "Corporative verification"];

interface Props {
  goBack: () => void;
  goNext: () => void;
}

const Step2: React.FC<Props> = ({ goBack, goNext }) => {
  const [selectProof, setSelectProof] = useState<number>(0);
  const { queryService } = useCosmos();

  const { data: proofs } = useRest(() => queryService.getIssuerRequestParams());
  const { setValue } = useFormContext<FormInputsRG20>();

  useEffect(() => {
    if (!proofs) return;
    const issuer = issuers[selectProof].split(" ")[0].toLowerCase();
    setValue("trusted_issuers", issuer);
    setValue("proof", proofs[selectProof]);
  }, [selectProof]);

  return (
    <>
      <div className="gap-6 flex flex-col lg:flex-row w-full lg:p-4 h-full">
        <div className="flex flex-col gap-2 flex-1">
          <h2 className="text-lg lg:mb-4">Proof Requests</h2>
          {schemas.map((e, i) => {
            return (
              <InputRadio
                name="issuer-selector"
                key={`issuer-${i}`}
                id={`issuer-${i}`}
                checked={i === selectProof}
                label={e}
                onChange={() => setSelectProof(i)}
              />
            );
          })}
          <AnimatePresence mode="wait">
            {
              <motion.div
                key={selectProof}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: 20, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="mt-6"
              >
                <h2 className="text-lg lg:mb-6">Issuer</h2>
                <div className="flex items-center p-3 border border-kashmir-blue-500 rounded  transition-all text-white bg-kashmir-blue-500">
                  {issuers[selectProof]}
                </div>
              </motion.div>
            }
          </AnimatePresence>
        </div>
        <div className="flex flex-col gap-2 flex-1 items-center text-center">
          <h2 className="text-lg lg:mb-4">Schema Attributes</h2>
          <div
            className="h-64 w-full border border-kashmir-blue-200 rounded-lg flex-1 p-2 bg-kashmir-blue-50
        max-h-[26.8rem] min-h-[15rem] overflow-y-scroll scrollbar-thin scrollbar-thumb-kashmir-blue-300 hover:scrollbar-thumb-kashmir-blue-400
        scrollbar-track-transparent scrollbar-thumb-rounded-full grid grid-cols-2 gap-2"
          >
            {proofs?.[selectProof].credential_schema?.attrs?.map((e: string, i: number) => {
              return (
                <div className="p-2 bg-white text-xs rounded-lg h-fit" key={`attributes-${i}`}>
                  {e}
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="flex w-full items-center justify-between">
        <div>
          <Button variant="cuaternary" onClick={goBack}>
            Back
          </Button>
        </div>
        <div>
          <Button onClick={goNext}>Next</Button>
        </div>
      </div>
    </>
  );
};

export default Step2;
