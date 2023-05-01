import { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";

const Assets: NextPage = () => {
  const [step, setStep] = useState<number>(0);
  const maxStep = 3;
  return (
    <>
      <Head>
        <title>Avipad</title>
      </Head>
      <div className="w-full min-h-screen pt-28 pb-12 flex gap-20 flex-col items-center justify-center py-8 px-4"></div>
    </>
  );
};

export default Assets;
