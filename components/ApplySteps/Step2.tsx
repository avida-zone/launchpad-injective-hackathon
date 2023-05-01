import React, { useState } from "react";
import InputRadio from "../Inputs/InputRadio";
import { AnimatePresence, motion } from "framer-motion";

const issuers = ["Gayadeed SpA", "InfoCert SpA", "Identrust LLC"];
const proofs = ["Identify Verification (Physical person)", "Corporative verification", "AML Checks"];
const attributes = [
  "firstName",
  "lastName",
  "genderType",
  "personImage",
  "dateOfBirth",
  "serialNumber",
  "citizenship",
  "pobCountry",
  "pobCity",
  "firstName",
  "lastName",
  "genderType",
  "personImage",
  "dateOfBirth",
  "serialNumber",
  "citizenship",
  "pobCountry",
  "pobCity",
  "firstName",
  "lastName",
  "genderType",
  "personImage",
  "dateOfBirth",
  "serialNumber",
  "citizenship",
  "pobCountry",
  "pobCity",
  "firstName",
  "lastName",
  "genderType",
  "personImage",
  "dateOfBirth",
  "serialNumber",
  "citizenship",
  "pobCountry",
  "pobCity",
];

const Step2: React.FC = () => {
  const [selectProof, setSelectProof] = useState<number>();
  return (
    <div className="gap-6 flex flex-col lg:flex-row w-full lg:p-4 h-full">
      <div className="flex flex-col gap-2 flex-1">
        <h2 className="text-lg lg:mb-4">Proof Requests</h2>
        {proofs.map((e, i) => {
          return (
            <InputRadio
              name="issuer-selector"
              key={`issuer-${i}`}
              id={`issuer-${i}`}
              label={e}
              onClick={() => {
                setSelectProof(i + 1);
              }}
            />
          );
        })}
        <AnimatePresence mode="wait">
          {selectProof && (
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
                {issuers[selectProof - 1]}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <div className="flex flex-col gap-2 flex-1 items-center text-center">
        <h2 className="text-lg lg:mb-4">Schema Attributes</h2>
        <div
          className="h-64 w-full border border-kashmir-blue-200 rounded-lg flex-1 p-2 bg-kashmir-blue-50
        max-h-[26.8rem] min-h-[15rem] overflow-y-scroll scrollbar-thin scrollbar-thumb-kashmir-blue-300 hover:scrollbar-thumb-kashmir-blue-400
        scrollbar-track-transparent scrollbar-thumb-rounded-full grid grid-cols-2 gap-2"
        >
          {attributes.map((e, i) => {
            return (
              <div className="p-2 bg-white text-xs rounded-lg h-fit" key={`attributes-${i}`}>
                {e}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Step2;
