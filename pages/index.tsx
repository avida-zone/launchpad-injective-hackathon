import { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Button from "~/components/Buttons/Button";
import Header from "~/components/Header";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Avipad</title>
      </Head>
      <div className="snap-center">
        <Header />
      </div>
      <div className="w-full min-h-screen pt-[80px] flex gap-20 flex-col items-center justify-center py-32 px-4 snap-center">
        <div className="w-full max-layout gap-8 p-4 rounded-md flex-1 shadow-xl flex flex-col md:flex-row items-center justify-center bg-white">
          <div className="flex flex-col text-6xl">
            <h3 className="text-transparent bg-clip-text bg-gradient-to-r from-kashmir-blue-500 to-java-green-600">How to launch</h3>
            <h4>with Avipad</h4>
            <Button as={Link} href="/apply" className="w-fit mt-8" scale="lg" variant="secondary">
              Apply for RG-Token
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
