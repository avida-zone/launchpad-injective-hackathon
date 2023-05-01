import { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

const projects = [
  {
    tokenName: "Cookie Monster",
    symbol: "CM",
    initialSuply: 1000000,
    decimals: 6,
    tokenUrl: "https://www.alphatoken.com/rg",
    nativeToken: true,
    denom: "INJ",
    issuer: "Gayadeed SpA",
    proof: "Identify Verification (Physical person)",
    imgUrl: "https://cdn.pixabay.com/photo/2020/10/14/17/55/cookie-monster-5655016_960_720.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ullamcorper eget purus a faucibus. Nunc facilisis massa sodales, viverra mauris ut, cursus nisi. Maecenas eget interdum mauris, et luctus leo. Sed nec aliquam erat. Mauris semper nibh eget ultrices dignissim. Fusce elementum eros dictum, ullamcorper velit id, feugiat neque. Aliquam vehicula cursus lorem sed aliquam. Mauris cursus massa ut semper aliquam. Sed et bibendum elit. Curabitur blandit, leo quis commodo rhoncus, diam leo tincidunt odio, a posuere diam ex ac enim. Donec non vehicula neque. Morbi vehicula at sapien non pretium. Proin venenatis ipsum rhoncus felis fringilla, nec placerat neque bibendum. Suspendisse potenti.",
  },
  {
    tokenName: "Wonder Alice",
    symbol: "WA",
    initialSuply: 1000000,
    decimals: 6,
    tokenUrl: "https://www.alphatoken.com/rg",
    nativeToken: true,
    denom: "INJ",
    issuer: "Gayadeed SpA",
    proof: "Identify Verification (Physical person)",
    imgUrl: "https://cdn.pixabay.com/photo/2023/04/16/03/41/ai-generated-7928983_960_720.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ullamcorper eget purus a faucibus. Nunc facilisis massa sodales, viverra mauris ut, cursus nisi. Maecenas eget interdum mauris, et luctus leo. Sed nec aliquam erat. Mauris semper nibh eget ultrices dignissim. Fusce elementum eros dictum, ullamcorper velit id, feugiat neque. Aliquam vehicula cursus lorem sed aliquam. Mauris cursus massa ut semper aliquam. Sed et bibendum elit. Curabitur blandit, leo quis commodo rhoncus, diam leo tincidunt odio, a posuere diam ex ac enim. Donec non vehicula neque. Morbi vehicula at sapien non pretium. Proin venenatis ipsum rhoncus felis fringilla, nec placerat neque bibendum. Suspendisse potenti.",
  },
  {
    tokenName: "Super Token",
    symbol: "SUPR",
    initialSuply: 1000000,
    decimals: 6,
    tokenUrl: "https://www.alphatoken.com/rg",
    nativeToken: true,
    denom: "INJ",
    issuer: "Gayadeed SpA",
    proof: "Identify Verification (Physical person)",
    imgUrl: "https://cdn.pixabay.com/photo/2016/07/30/21/03/mario-1558012_960_720.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ullamcorper eget purus a faucibus. Nunc facilisis massa sodales, viverra mauris ut, cursus nisi. Maecenas eget interdum mauris, et luctus leo. Sed nec aliquam erat. Mauris semper nibh eget ultrices dignissim. Fusce elementum eros dictum, ullamcorper velit id, feugiat neque. Aliquam vehicula cursus lorem sed aliquam. Mauris cursus massa ut semper aliquam. Sed et bibendum elit. Curabitur blandit, leo quis commodo rhoncus, diam leo tincidunt odio, a posuere diam ex ac enim. Donec non vehicula neque. Morbi vehicula at sapien non pretium. Proin venenatis ipsum rhoncus felis fringilla, nec placerat neque bibendum. Suspendisse potenti.",
  },
  {
    tokenName: "Baby yoda",
    symbol: "GARP",
    initialSuply: 1000000,
    decimals: 6,
    tokenUrl: "https://www.alphatoken.com/rg",
    nativeToken: true,
    denom: "INJ",
    issuer: "Gayadeed SpA",
    proof: "Identify Verification (Physical person)",
    imgUrl: "https://cdn.pixabay.com/photo/2015/09/04/18/55/yoda-922520_960_720.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ullamcorper eget purus a faucibus. Nunc facilisis massa sodales, viverra mauris ut, cursus nisi. Maecenas eget interdum mauris, et luctus leo. Sed nec aliquam erat. Mauris semper nibh eget ultrices dignissim. Fusce elementum eros dictum, ullamcorper velit id, feugiat neque. Aliquam vehicula cursus lorem sed aliquam. Mauris cursus massa ut semper aliquam. Sed et bibendum elit. Curabitur blandit, leo quis commodo rhoncus, diam leo tincidunt odio, a posuere diam ex ac enim. Donec non vehicula neque. Morbi vehicula at sapien non pretium. Proin venenatis ipsum rhoncus felis fringilla, nec placerat neque bibendum. Suspendisse potenti.",
  },
  {
    tokenName: "Wonder Alice",
    symbol: "WA",
    initialSuply: 1000000,
    decimals: 6,
    tokenUrl: "https://www.alphatoken.com/rg",
    nativeToken: true,
    denom: "INJ",
    issuer: "Gayadeed SpA",
    proof: "Identify Verification (Physical person)",
    imgUrl: "https://cdn.pixabay.com/photo/2023/04/16/03/41/ai-generated-7928983_960_720.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ullamcorper eget purus a faucibus. Nunc facilisis massa sodales, viverra mauris ut, cursus nisi. Maecenas eget interdum mauris, et luctus leo. Sed nec aliquam erat. Mauris semper nibh eget ultrices dignissim. Fusce elementum eros dictum, ullamcorper velit id, feugiat neque. Aliquam vehicula cursus lorem sed aliquam. Mauris cursus massa ut semper aliquam. Sed et bibendum elit. Curabitur blandit, leo quis commodo rhoncus, diam leo tincidunt odio, a posuere diam ex ac enim. Donec non vehicula neque. Morbi vehicula at sapien non pretium. Proin venenatis ipsum rhoncus felis fringilla, nec placerat neque bibendum. Suspendisse potenti.",
  },
  {
    tokenName: "Super Token",
    symbol: "SUPR",
    initialSuply: 1000000,
    decimals: 6,
    tokenUrl: "https://www.alphatoken.com/rg",
    nativeToken: true,
    denom: "INJ",
    issuer: "Gayadeed SpA",
    proof: "Identify Verification (Physical person)",
    imgUrl: "https://cdn.pixabay.com/photo/2016/07/30/21/03/mario-1558012_960_720.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ullamcorper eget purus a faucibus. Nunc facilisis massa sodales, viverra mauris ut, cursus nisi. Maecenas eget interdum mauris, et luctus leo. Sed nec aliquam erat. Mauris semper nibh eget ultrices dignissim. Fusce elementum eros dictum, ullamcorper velit id, feugiat neque. Aliquam vehicula cursus lorem sed aliquam. Mauris cursus massa ut semper aliquam. Sed et bibendum elit. Curabitur blandit, leo quis commodo rhoncus, diam leo tincidunt odio, a posuere diam ex ac enim. Donec non vehicula neque. Morbi vehicula at sapien non pretium. Proin venenatis ipsum rhoncus felis fringilla, nec placerat neque bibendum. Suspendisse potenti.",
  },
];

const Projects: NextPage = () => {
  return (
    <>
      <Head>
        <title>Avipad</title>
      </Head>
      <div className="w-full mx-auto max-layout min-h-screen pt-32 pb-12 flex flex-col px-4 relative gap-8">
        <div className="w-[15rem] h-[15rem] absolute top-[8rem] right-[5rem] bg-kashmir-blue-500 rounded-full blur-3xl" />
        <h2 className="text-4xl w-full text-center relative z-10">Projects</h2>
        <div className="w-full grid grid-cols-auto-280 relative z-1 gap-4 gap-y-6 lg:gap-y-8">
          {projects.map((project, i) => {
            return (
              <Link
                href={`/project/${project.symbol}`}
                className="bg-gradient-to-b from-java-green-600 via-white to-white rounded-lg px-3 py-4 md:4 gap-4 grid grid-cols-3 hover:from-kashmir-blue-500
                transition-all hover:via-white hover:to-white hover:scale-105 hover:shadow-xl"
                key={`project-${i}`}
              >
                <div className=" col-span-3 flex items-center justify-center">
                  <img src={project.imgUrl} alt={project.symbol} className="w-[10rem] h-[10rem] object-cover rounded-full" />
                </div>
                <h3 className="col-span-3 mt-4">{project.tokenName}</h3>
                <div>
                  <span className="text-xs text-gray-400">Symbol</span>
                  <p className="text-sm">{project.symbol}</p>
                </div>
                <div>
                  <span className="text-xs text-gray-400">Initial Suply</span>
                  {/* <p className="text-sm">{formatNumber(project.initialSuply)}</p> */}
                  <p className="text-sm">{project.initialSuply}</p>
                </div>
                <div>
                  <span className="text-xs text-gray-400">Decimals</span>
                  <p className="text-sm">{project.decimals}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Projects;
