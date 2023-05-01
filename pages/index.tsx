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
    text: "Decide if you want the rgToken to be new (provide mint price and cap)  or a wrapper  of an existing one (provide denom). In both cases, provide token details such as denom, marketing info.",
  },
  {
    title: "Step 2",
    text: "You can now choose the proofs required from the holders to interact with you rgToken. We use AnonCreds to power the ZK-proof, which supports selective disclosure and range proofs",
  },
  {
    title: "Step 3",
    text: "This is a review step, which allows you to have an overview of everything you have input. As soon as the token is launched, it is registered on our adapter and your users can the native rgTokens immediately.",
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
        <p>AVIPAD is a launch"pad" for rgTokens built on the AVIDA framework.</p>
        <p>AVIDA stands for Atomic Verification of Identity for Decentralised Applications.</p>
      </div>
    ),
  },
  {
    title: "What is a Vectis Account and why do I need the identity plugin?",
    content: (
      <div className="text-sm text-gray-600">
        <p>Vectis is an account abstraction infrastructure currently implemented in Cosmwasm.</p>
        <p>Its basic features are social recovery, account freezing and gasless metatransaction supports.</p>
        <p>Features can be extended by installing plugins.</p>
        <p>The Identity plugin links the offchain credential to the onchain account to prevent sybil attack.</p>
      </div>
    ),
  },
  {
    title: "Why did we build this?",
    content: (
      <div className="text-sm text-gray-600">
        <p>AVIDA framework and its implementation - AVIPAD is built by Nymlab.</p>
        <p>
          It is our second product (after Vectis) that aims to empower people socially and financially in a legal and privacy-protecting
          environment.
        </p>
      </div>
    ),
  },
  {
    title: "How do I get involved?",
    content: (
      <div className="text-sm text-gray-600">
        <p>
          We are thrilled you are excited! Please do follow us on{" "}
          <Link href="https://twitter.com/VectisDAO" target="_blank" className="font-bold text-kashmir-blue-500 hover:text-java-green-600">
            twitter
          </Link>{" "}
          for updates.
        </p>
        <p>
          For partnership please email{" "}
          <Link href="mailto:dev@nymlab.it" target="_blank" className="font-bold text-kashmir-blue-500 hover:text-java-green-600">
            dev@nymlab.it
          </Link>
        </p>
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
      <section
        id="launch"
        className="w-full min-h-screen pt-[80px] flex gap-20 flex-col items-center justify-center px-4 snap-start lg:snap-center"
      >
        <div className="w-full max-layout gap-8 p-4 md:p-8 rounded-md shadow-xl flex flex-col items-center justify-center bg-white min-h-[70vh] relative z-10">
          <div className="flex flex-col text-4xl lg:text-6xl">
            <h3 className="text-transparent bg-clip-text bg-gradient-to-r from-kashmir-blue-500 to-java-green-600">How to launch</h3>
            <h4>with Avipad</h4>
          </div>
          <p className="lg:max-w-[80%] text-justify text-sm lg:text-base">
            AVIPAD is a tool to launch regulatory grade token (rgToken), which has the added feature for withdraw screening, i.e. accounts can
            receive rgToken but to transfer it, the sender must provide a zero-knowledge proof of ownership of the credentials that satisfies
            that particular token. Let’ walk through the simple steps to launch an rgToken.
          </p>
          <div className="lg:max-w-[85%] w-full">
            <TimeLine list={timeLineTexts} />
          </div>
          <Button as={Link} href="/apply" className="w-fit mt-8" scale="lg" variant="secondary">
            Create your RG-Token Proposal
          </Button>
        </div>
      </section>
      <section
        id="faqs"
        className="w-full lg:min-h-screen pt-[80px] flex gap-20 flex-col items-center justify-center px-4 snap-start lg:snap-center"
      >
        <div className="w-full flex-1 max-layout gap-8 md:p-8 rounded-md flex flex-col items-center justify-center min-h-[70vh] relative z-10">
          <h3 className="text-transparent bg-clip-text bg-gradient-to-r from-kashmir-blue-500 to-java-green-600 text-4xl">FAQS</h3>
          <div className="flex-1 flex items-center justify-center lg:max-w-[90%]">
            <Accordion items={faqsQuestions} />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
