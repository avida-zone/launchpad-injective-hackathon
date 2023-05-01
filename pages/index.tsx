import { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
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
    </>
  );
};

export default Home;
