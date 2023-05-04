import { NextPage } from "next";
import Head from "next/head";
import { useQuery } from "react-query";
import Button from "~/components/Buttons/Button";
import Spinner from "~/components/Spinner";
import ConnectWallet from "~/components/layout/ConnectWallet";
import { CoinInfo } from "~/interfaces";
import { useCosmos } from "~/providers/CosmosProvider";
import { convertMicroDenomToDenom } from "~/utils/conversation";

const Assets: NextPage = () => {
  const { isWalletConnected, queryService, address, defaultFee } = useCosmos();
  const { data, isLoading } = useQuery(["balances", queryService, address], () => queryService?.getAllBalances(address as string));

  if (isLoading)
    return (
      <div className="w-full mx-auto max-layout min-h-screen flex items-center justify-center pt-32 pb-12 relative">
        <Spinner />
      </div>
    );

  return (
    <>
      <Head>
        <title>Avipad</title>
      </Head>
      <div className="w-full mx-auto max-layout min-h-screen pt-32 pb-12 flex flex-col px-4 relative gap-8">
        <h2 className="text-4xl w-full relative z-10">Assets</h2>
        {isWalletConnected ? (
          <div className="flex flex-col gap-4">
            <div className="flex flex-1 flex-col gap-4">
              <p className="text-sm text-gray-400">Native Tokens</p>
              {data?.nativeBalances.map((asset, i) => {
                const token = asset.denom === "inj" ? defaultFee : (asset as unknown as CoinInfo);
                return (
                  <div
                    key={`asset-${i}-${token.symbol}`}
                    className="bg-white p-3 rounded-lg grid grid-cols-[_4rem,2fr,1fr,1fr] gap-2 items-center"
                  >
                    <img src={token.img} alt={token.symbol} className="w-16 h-16 rounded-full object-cover " />
                    <div>
                      <p className="font-bold">{token.symbol}</p>
                      <p className="text-sm text-gray-500">{token.symbol}</p>
                    </div>
                    <div>
                      <span className="text-sm text-gray-400">Available</span>
                      <p>
                        {convertMicroDenomToDenom(asset.amount, token.exponent)} ${asset.denom}
                      </p>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <Button className="!text-sm !px-2 !py-1 h-fit">Transform</Button>
                      <Button className="!text-sm !px-2 !py-1 h-fit" variant="secondary">
                        Action 2
                      </Button>
                    </div>
                  </div>
                );
              })}
            </div>
            <div>
              <p className="text-sm text-gray-400">RG-Tokens</p>
              {[...data?.rgNewTokensBalance, ...data?.rgTransformTokensBalance]?.map((asset, i) => {
                return (
                  <div
                    key={`asset-${i}-${asset.symbol}`}
                    className="bg-white p-3 rounded-lg grid grid-cols-[_4rem,2fr,1fr,1fr] gap-2 items-center"
                  >
                    <img src={asset.imgUrl} alt={asset.symbol} className="w-16 h-16 rounded-full object-cover " />
                    <div>
                      <p className="font-bold">{asset.tokenName}</p>
                      <p className="text-sm text-gray-500">{asset.symbol}</p>
                    </div>
                    <div>
                      <span className="text-sm text-gray-400">Available</span>
                      <p>
                        {0.5} ${asset.denom}
                      </p>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <Button className="!text-sm !px-2 !py-1 h-fit">Transform</Button>
                      <Button className="!text-sm !px-2 !py-1 h-fit" variant="secondary">
                        Action 2
                      </Button>
                      <Button variant="tertiary" className="!text-sm !px-2 !py-1 h-fit">
                        Buy assets
                      </Button>
                      <Button variant="cuaternary" className="!text-sm !px-2 !py-1 h-fit">
                        Action 2
                      </Button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ) : (
          <div className="flex-1 flex items-center justify-center flex-col gap-8 backdrop-blur-3xl border border-gray-100 rounded-lg">
            <p>Please connect wallet to continue</p>
            <ConnectWallet />
          </div>
        )}
      </div>
    </>
  );
};

export default Assets;
