import clsx from "clsx";
import { AnimatePresence, motion } from "framer-motion";
import { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import Accordion from "~/components/Acordion";
import StepContainer from "~/components/ApplySteps/StepContainer";

const steps = [
  [
    {
      title: "Basic Settings",
      content: (
        <>
          <p>
            Use the basic settings section to define general token parameters such as: the Token Name and Symbol, which are important for DEX,
            and the Initial Supply (plus decimals to be counted)
          </p>
        </>
      ),
    },
    {
      title: "RG-Token Configuration",
      content: (
        <div>
          <p>
            In this section you need to specify the Token Prospectus URL, where investores may retrieve all the needed infos, you also need to
            specify if a limit to the number of token per address applies
          </p>
        </div>
      ),
    },
  ],
  [
    {
      title: "Proof Requests",
      content: (
        <>
          <p>
            In this section you can specify the compliance requirements of the users who will handle your RG Token. Select the credential
            schemes that represent these requirements and, for each of them, decide which il attributes must be provided by the user by means of
            a la derived zero-knowledge proof
          </p>
          <p>
            Beside the general Token parameters, you should define if the Token Contract must support Burn and Mint of tokens, if the contract
            can be paused and if address blacklisting must be supported
          </p>
        </>
      ),
    },
    {
      title: "Issuers",
      content: (
        <>
          <p>
            Based on the credential schemas you selected, the list of issuers able to issue such credentials will automatically update. Once you
            have decided which credentials you need for your RG token, select from the list of compatible issuers those you consider trusted
          </p>
        </>
      ),
    },
  ],
  [
    {
      title: "Basic Settings",
      content: (
        <>
          <p>
            Use the basic settings section to define general token parameters such as: the Token Name and Symbol, which are important for DEX,
            and the Initial Supply (plus decimals to be counted)
          </p>
        </>
      ),
    },
    {
      title: "RG-Token Configuration",
      content: (
        <div>
          <p>
            In this section you need to specify the Token Prospectus URL, where investores may retrieve all the needed infos, you also need to
            specify if a limit to the number of token per address applies
          </p>
        </div>
      ),
    },
    {
      title: "Proof Requests",
      content: (
        <>
          <p>
            In this section you can specify the compliance requirements of the users who will handle your RG Token. Select the credential
            schemes that represent these requirements and, for each of them, decide which il attributes must be provided by the user by means of
            a la derived zero-knowledge proof
          </p>
          <p>
            Beside the general Token parameters, you should define if the Token Contract must support Burn and Mint of tokens, if the contract
            can be paused and if address blacklisting must be supported
          </p>
        </>
      ),
    },
    {
      title: "Issuers",
      content: (
        <>
          <p>
            Based on the credential schemas you selected, the list of issuers able to issue such credentials will automatically update. Once you
            have decided which credentials you need for your RG token, select from the list of compatible issuers those you consider trusted
          </p>
        </>
      ),
    },
  ],
  [],
];

const data = {
  tokenName: "Cookie Monster",
  symbol: "CM",
  initialSuply: 1000000,
  decimals: 6,
  tokenUrl: "https://www.alphatoken.com/rg",
  nativeToken: true,
  denom: "INJ",
};

const Apply: NextPage = () => {
  const [step, setStep] = useState<number>(0);
  const maxStep = 4;
  return (
    <>
      <Head>
        <title>Avipad</title>
      </Head>
      <div className="w-full min-h-screen pt-28 pb-12 flex gap-20 flex-col items-center justify-center py-8 px-4">
        <div className="w-full max-layout gap-4 flex-1 flex flex-col md:flex-row">
          <StepContainer currentStep={step} setStep={setStep} maxStep={maxStep} />
          <div className={clsx("min-h-full flex gap-4 flex-col w-full md:w-80", step + 1 === maxStep ? "hidden" : "")}>
            {false ? (
              <AnimatePresence mode="wait">
                <motion.div
                  key={step}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: 20, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white p-4 grid grid-cols-2 gap-4"
                >
                  <h2 className="text-lg col-span-2">Preview</h2>
                  <div>
                    <span className="text-xs text-gray-400">Token Name</span>
                    <p className="text-sm">{data.tokenName}</p>
                  </div>
                  <div>
                    <span className="text-xs text-gray-400">Symbol</span>
                    <p className="text-sm">{data.symbol}</p>
                  </div>

                  <div>
                    <span className="text-xs text-gray-400">Initial Suply</span>
                    {/* <p className="text-sm">{formatNumber(data.initialSuply)}</p> */}
                    <p className="text-sm">{data.initialSuply}</p>
                  </div>
                  <div>
                    <span className="text-xs text-gray-400">Decimals</span>
                    <p className="text-sm">{data.decimals}</p>
                  </div>

                  <div className="col-span-2">
                    <span className="text-xs text-gray-400 ">Token Prospectus URL</span>
                    <p className="text-sm truncate">{data.tokenUrl}</p>
                  </div>
                </motion.div>
              </AnimatePresence>
            ) : (
              ""
            )}
            {}
            <div className="w-full">
              <Accordion items={steps[step]} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Apply;
