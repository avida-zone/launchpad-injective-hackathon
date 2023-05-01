/* eslint-disable react/no-unescaped-entities */
import { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Accordion from "~/components/Acordion";
import Button from "~/components/Buttons/Button";
import Header from "~/components/Header";
import TimeLine from "~/components/TimeLine";

const timeLineTexts = [
  {
    title: "Step 1",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut convallis leo sit amet felis ultrices, ac congue purus convallis. Etiam quis nisi a mauris ullamcorper pharetra.",
  },
  {
    title: "Step 2",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut convallis leo sit amet felis ultrices, ac congue purus convallis. Etiam quis nisi a mauris ullamcorper pharetra.",
  },
  {
    title: "Step 3",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut convallis leo sit amet felis ultrices, ac congue purus convallis. Etiam quis nisi a mauris ullamcorper pharetra.",
  },
];

const faqsQuestions = [
  {
    title: "What does AVIPAD do?",
    content: (
      <div className="text-sm text-gray-600">
        <p>AVIPAD helps asset originators launch rgTokens (regulatory grade).</p>
        <p>It provides the tool to transform existing tokens to rgTokens and to mint new tokens.</p>
        <p>It also provides an adaptor for rgToken -{">"} native rgTokens to be used onchain, such as in DEXs.</p>
      </div>
    ),
  },
  {
    title: "What is special about rgTokens?",
    content: (
      <div className="text-sm text-gray-600">
        <p>rgTokens is regular tokens with withdrawal screeening.</p>
        <p>Asset holders must present the zkProof of credential ownership that satisfy the rgToken’s requirements.</p>
        <p>Proof requirements are defined at asset origination and can be updated.</p>
      </div>
    ),
  },
  {
    title: "What does transforming a token mean?",
    content: (
      <div className="text-sm text-gray-600">
        <p>Transforming a token means you lock the native token and AVIPAD will provide you with the rg’d version of the token.</p>
        <p>Transform requires ZK proof of credential ownership</p>
      </div>
    ),
  },
  {
    title: "What does adapting a token mean?",
    content: (
      <div className="text-sm text-gray-600">
        <p>rgTokens are built with Cosmwasm smart contracts, very similar to cw20.</p>
        <p>In order to use it on DEXs, we provide an adaptor that turns rgToken -{">"} native rgTokens.</p>
      </div>
    ),
  },
  {
    title: "How does this help the network / DEXs / dApps?",
    content: (
      <div className="text-sm text-gray-600">
        <p>AVIPAD provides optionality to all involving parties.</p>
        <p>By having a flexible model for rgToken requirements and an native token adapter, applications can identity which denom are rg’ed,</p>
        <p>allowing those rgTokens to be traded, spent or used in a ecosystem that self regulates.</p>
      </div>
    ),
  },
  {
    title: "What does AVIPAD stand for?",
    content: (
      <div className="text-sm text-gray-600">
        <p>AVIPAD is a launch"pad" for rgTokens built on the AVIDA framwork.</p>
        <p>AVIDA stands for Atomic Verification of Identity for Decentralised Applications.</p>
      </div>
    ),
  },
];

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Avipad</title>
      </Head>
      <div className="snap-center">
        <Header />
      </div>
      <div className="w-full min-h-screen pt-[80px] flex gap-20 flex-col items-center justify-center px-4 snap-start lg:snap-center">
        <div className="w-full max-layout gap-8 p-4 md:p-8 rounded-md shadow-xl flex flex-col items-center justify-center bg-white min-h-[70vh] relative z-10">
          <div className="flex flex-col text-6xl">
            <h3 className="text-transparent bg-clip-text bg-gradient-to-r from-kashmir-blue-500 to-java-green-600">How to launch</h3>
            <h4>with Avipad</h4>
          </div>
          <p className="lg:max-w-[80%] text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut convallis leo sit amet felis ultrices, ac congue purus convallis. Etiam
            quis nisi a mauris ullamcorper pharetra. Morbi pharetra nisl tincidunt nulla blandit condimentum. Duis porta ligula vel tempor
            hendrerit. Integer imperdiet, velit ut faucibus luctus, velit est facilisis eros, viverra scelerisque nisi quam vitae dolor. Nullam
            tempus turpis ac metus lobortis
          </p>
          <div className="lg:max-w-[85%] w-full">
            <TimeLine list={timeLineTexts} />
          </div>
          <Button as={Link} href="/apply" className="w-fit mt-8" scale="lg" variant="secondary">
            Create your RG-Token Proposal
          </Button>
        </div>
      </div>
      <div className="w-full min-h-screen pt-[80px] flex gap-20 flex-col items-center justify-center px-4 snap-start lg:snap-center">
        <div className="w-full flex-1 max-layout gap-8 p-4 md:p-8 rounded-md flex flex-col items-center justify-center min-h-[70vh] relative z-10">
          <h3 className="text-transparent bg-clip-text bg-gradient-to-r from-kashmir-blue-500 to-java-green-600 text-4xl">FAQS</h3>
          <div className="flex-1 flex items-center justify-center lg:max-w-[90%]">
            <Accordion items={faqsQuestions} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
