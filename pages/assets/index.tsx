import { NextPage } from "next";
import Head from "next/head";
import { useQuery } from "react-query";
import Button from "~/components/Buttons/Button";
import ConnectWallet from "~/components/layout/ConnectWallet";
import { useCosmos } from "~/providers/CosmosProvider";

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
    imgUrl:
      "https://cdn.discordapp.com/attachments/1051299222227533901/1103655770295382056/Kyaris_logo_token_for_baby_yoda_b315e592-b778-4c56-baf1-a58a5ca89626.png",
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

const Assets: NextPage = () => {
  const { isWalletConnected, queryService, address } = useCosmos();
  const { data } = useQuery(["balances", queryService, address], () => queryService?.getAllBalances(address as string));
  console.log(data);
  return (
    <>
      <Head>
        <title>Avipad</title>
      </Head>
      <div className="w-full mx-auto max-layout min-h-screen pt-32 pb-12 flex flex-col px-4 relative gap-8">
        <h2 className="text-4xl w-full relative z-10">Assets</h2>
        {isWalletConnected ? (
          <div className="flex flex-col gap-4">
            {projects.map((asset, i) => {
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
