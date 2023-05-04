import { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import Button from "~/components/Buttons/Button";
import useRest from "~/hooks/useRest";
import ModalTypes from "~/interfaces/ModalTypes";
import { useCosmos } from "~/providers/CosmosProvider";
import { useModal } from "~/providers/ModalProvider";

const Project: NextPage = () => {
  const { queryService } = useCosmos();
  const { showModal } = useModal();
  const { query } = useRouter();
  const { data: tokenInfo, loading } = useRest(() => queryService?.getProject(query.tokenAddr as string));

  return (
    <>
      <Head>
        <title>Avipad</title>
      </Head>
      {loading || !tokenInfo ? (
        <p className="flex flex-1 h-full w-full">loading</p>
      ) : (
        <div className="w-full mx-auto max-layout min-h-screen pt-32 pb-12 flex flex-col px-4 relative gap-8">
          <div className="w-[15rem] h-[15rem] absolute top-[10rem] right-[5rem] bg-kashmir-blue-500 rounded-full blur-3xl" />
          <div className=" w-full flex flex-col relative z-10 gap-8 bg-gradient-to-bl from-kashmir-blue-500 via-35%  via-white to-white rounded-lg p-4 lg:p-10">
            <div className="flex items-start justify-center gap-4">
              <div className="flex-1">
                <img
                  src={tokenInfo.logo.url}
                  alt={tokenInfo.symbol}
                  className="lg:w-[15rem] lg:h-[15rem] w-[10rem] h-[10rem] object-cover rounded-full"
                />
              </div>
              <h3 className="col-span-3 mt-4 text-xl lg:text-3xl">{tokenInfo.name}</h3>
            </div>

            <div className="w-full flex justify-between flex-col lg:flex-row gap-8">
              <div className=" w-[70%] grid grid-cols-1 gap-8 ">
                <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
                  <div>
                    <span className="text-sm text-gray-400">Symbol</span>
                    <p>{tokenInfo.symbol}</p>
                  </div>
                  <div className="col-span-1">
                    <span className="text-sm text-gray-400">Trusted Issuer</span>
                    <p>{tokenInfo?.issuer}</p>
                  </div>
                  <div className="col-span-3">
                    <span className="text-sm text-gray-400">Total Supply</span>
                    <p>{tokenInfo?.total_supply}</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
                  <div>
                    <span className="text-sm text-gray-400">Max Cap</span>
                    <p>{tokenInfo?.initialSuply}</p>
                  </div>
                  <div>
                    <span className="text-sm text-gray-400">Decimals</span>
                    <p>{tokenInfo.decimals}</p>
                  </div>
                  {/* <div>
                    <span className="text-sm text-gray-400">Denom</span>
                    <p>{tokenInfo?.denom}</p>
                  </div> */}
                  {/* <div className="flex flex-col col-span-2 justify-end">
                    <span className="text-sm text-gray-400">Token Prospectus URL</span>
                    <Link className="truncate hover:text-java-green-600" href={tokenInfo?.tokenUrl} target="_blank">
                      {tokenInfo?.tokenUrl}
                    </Link>
                  </div> */}
                </div>

                <div>
                  <span className="text-sm text-gray-400">Description</span>
                  <p className="text-sm">{tokenInfo.description}</p>
                </div>
              </div>
              <div className=" flex flex-col gap-4 justify-end">
                <Button
                  onClick={() =>
                    showModal(ModalTypes.buyTickets, {
                      contractAddress: query.tokenAddr,
                      tokenSymbol: tokenInfo.symbol,
                      exponent: tokenInfo.exponent,
                    })
                  }
                >
                  Buy Tokens
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Project;
