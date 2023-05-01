import { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Button from "~/components/Buttons/Button";
import ModalTypes from "~/interfaces/ModalTypes";
import { useModal } from "~/providers/ModalProvider";

const project = {
  tokenName: "Wonder Alice",
  symbol: "WA",
  initialSuply: 1000000,
  decimals: 6,
  tokenUrl: "https://www.alphatoken.com/rg",
  nativeToken: true,
  denom: "INJ",
  issuer: "Identrust LLC",
  proof: "Identify Verification (Physical person)",
  imgUrl: "https://cdn.pixabay.com/photo/2023/04/16/03/41/ai-generated-7928983_960_720.jpg",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ullamcorper eget purus a faucibus. Nunc facilisis massa sodales, viverra mauris ut, cursus nisi. Maecenas eget interdum mauris, et luctus leo. Sed nec aliquam erat. Mauris semper nibh eget ultrices dignissim. Fusce elementum eros dictum, ullamcorper velit id, feugiat neque. Aliquam vehicula cursus lorem sed aliquam. Mauris cursus massa ut semper aliquam. Sed et bibendum elit. Curabitur blandit, leo quis commodo rhoncus, diam leo tincidunt odio, a posuere diam ex ac enim. Donec non vehicula neque. Morbi vehicula at sapien non pretium. Proin venenatis ipsum rhoncus felis fringilla, nec placerat neque bibendum. Suspendisse potenti.",
};

const Project: NextPage = () => {
  const { showModal } = useModal();

  return (
    <>
      <Head>
        <title>Avipad</title>
      </Head>
      <div className="w-full mx-auto max-layout min-h-screen pt-32 pb-12 flex flex-col px-4 relative gap-8">
        <div className="w-[15rem] h-[15rem] absolute top-[10rem] right-[5rem] bg-kashmir-blue-500 rounded-full blur-3xl" />
        <div className=" w-full flex flex-col relative z-10 gap-8 bg-gradient-to-bl from-kashmir-blue-500 via-35%  via-white to-white rounded-lg p-4 lg:p-10">
          <div className="flex items-start justify-center gap-4">
            <div className="flex-1">
              <img
                src={project.imgUrl}
                alt={project.symbol}
                className="lg:w-[15rem] lg:h-[15rem] w-[10rem] h-[10rem] object-cover rounded-full"
              />
            </div>
            <h3 className="col-span-3 mt-4 text-xl lg:text-3xl">{project.tokenName}</h3>
          </div>

          <div className="w-full flex justify-between flex-col lg:flex-row gap-8">
            <div className=" w-[70%] grid grid-cols-1 gap-8 ">
              <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
                <div>
                  <span className="text-sm text-gray-400">Symbol</span>
                  <p>{project.symbol}</p>
                </div>
                <div className="col-span-1">
                  <span className="text-sm text-gray-400">Trusted Issuer</span>
                  <p>{project.issuer}</p>
                </div>
                <div className="col-span-3">
                  <span className="text-sm text-gray-400">Proof</span>
                  <p>{project.proof}</p>
                </div>
              </div>

              <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
                <div>
                  <span className="text-sm text-gray-400">Initial Suply</span>
                  <p>{project.initialSuply}</p>
                </div>
                <div>
                  <span className="text-sm text-gray-400">Decimals</span>
                  <p>{project.decimals}</p>
                </div>
                <div>
                  <span className="text-sm text-gray-400">Denom</span>
                  <p>{project.denom}</p>
                </div>
                <div className="flex flex-col col-span-2 justify-end">
                  <span className="text-sm text-gray-400">Token Prospectus URL</span>
                  <Link className="truncate hover:text-java-green-600" href={project.tokenUrl} target="_blank">
                    {project.tokenUrl}
                  </Link>
                </div>
              </div>

              <div>
                <span className="text-sm text-gray-400">Description</span>
                <p className="text-sm">{project.description}</p>
              </div>
            </div>
            <div className=" flex flex-col gap-4 justify-end">
              <Button onClick={() => showModal(ModalTypes.buyTickets)}>Buy assets</Button>
              <Button variant="cuaternary">Transform assets</Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
