/* eslint-disable react/no-unescaped-entities */
import { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Accordion from "~/components/Acordion";
import Button from "~/components/Buttons/Button";
import Header from "~/components/Header";
import TimeLine from "~/components/TimeLine";
import { faqsQuestions, timeLineTexts } from "~/utils/const";

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
            Create RG-Token
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
