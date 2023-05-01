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
      <div className="w-full min-h-screen pt-[80px] flex gap-20 flex-col items-center justify-center px-4 snap-center">
        <div className="w-full max-layout gap-8 p-4 md:p-8 rounded-md shadow-xl flex flex-col items-center justify-center bg-white min-h-[70vh]">
          <div className="flex flex-col text-6xl">
            <h3 className="text-transparent bg-clip-text bg-gradient-to-r from-kashmir-blue-500 to-java-green-600">How to launch</h3>
            <h4>with Avipad</h4>
          </div>
          <p className="max-w-[80%] text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut convallis leo sit amet felis ultrices, ac congue purus convallis. Etiam
            quis nisi a mauris ullamcorper pharetra. Morbi pharetra nisl tincidunt nulla blandit condimentum. Duis porta ligula vel tempor
            hendrerit. Integer imperdiet, velit ut faucibus luctus, velit est facilisis eros, viverra scelerisque nisi quam vitae dolor. Nullam
            tempus turpis ac metus lobortis
          </p>
          <div className="flex-1 flex max-w-[85%] items-start w-full py-4 flex-col">
            <span className="w-full h-1 bg-java-green-600 rounded-lg " />
            <div className="flex items-center justify-between w-full">
              <div className="group flex gap-2 group transition-all p-2 h-full">
                <span className="h-8 group-hover:h-12 w-1 block bg-java-green-600 rounded-lg transition-all" />
                <div className="relative">
                  <span
                    className="h-1 w-1 translate-y-[-12px] translate-x-[-10px] rounded-full block transition-all absolute top-0 left-0
                  group-hover:bg-kashmir-blue-500 group-hover:h-4 group-hover:w-4 group-hover:translate-y-[-30px] group-hover:translate-x-[-18px]"
                  />
                  <p className="font-bold">Step 1</p>
                  <p className="max-w-[10rem] text-xs text-gray-600">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut convallis leo sit amet felis ultrices, ac congue purus
                    convallis. Etiam quis nisi a mauris ullamcorper pharetra.
                  </p>
                </div>
              </div>
              <div className="flex gap-2 group transition-all p-2 h-full">
                <span className="h-8 group-hover:h-12 w-1 block bg-java-green-600 rounded-lg transition-all" />
                <div className="relative">
                  <span
                    className="h-1 w-1 translate-y-[-12px] translate-x-[-10px] rounded-full block transition-all absolute top-0 left-0
                  group-hover:bg-kashmir-blue-500 group-hover:h-4 group-hover:w-4 group-hover:translate-y-[-30px] group-hover:translate-x-[-18px]"
                  />
                  <p className="font-bold">Step 2</p>
                  <p className="max-w-[10rem] text-xs text-gray-600">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut convallis leo sit amet felis ultrices, ac congue purus
                    convallis. Etiam quis nisi a mauris ullamcorper pharetra.
                  </p>
                </div>
              </div>
              <div className="flex gap-2 group transition-all p-2 h-full">
                <span className="h-8 group-hover:h-12 w-1 block bg-java-green-600 rounded-lg transition-all " />
                <div className="relative">
                  <span
                    className="h-1 w-1 translate-y-[-12px] translate-x-[-10px] rounded-full block transition-all absolute top-0 left-0
                  group-hover:bg-kashmir-blue-500 group-hover:h-4 group-hover:w-4 group-hover:translate-y-[-30px] group-hover:translate-x-[-18px]"
                  />
                  <p className="font-bold">Step 3</p>
                  <p className="max-w-[10rem] text-xs text-gray-600">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut convallis leo sit amet felis ultrices, ac congue purus
                    convallis. Etiam quis nisi a mauris ullamcorper pharetra.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <Button as={Link} href="/apply" className="w-fit mt-8" scale="lg" variant="secondary">
            Create your RG-Token Proposal
          </Button>
        </div>
      </div>
    </>
  );
};

export default Home;
