import Link from "next/link";
import React from "react";

const data = {
  tokenName: "Cookie Monster",
  symbol: "CM",
  initialSuply: 1000000,
  decimals: 6,
  tokenUrl: "https://www.alphatoken.com/rg",
  nativeToken: true,
  denom: "INJ",
  imgUrl: "https://cdn.pixabay.com/photo/2023/04/16/03/41/ai-generated-7928983_960_720.jpg",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ullamcorper eget purus a faucibus. Nunc facilisis massa sodales, viverra mauris ut, cursus nisi. Maecenas eget interdum mauris, et luctus leo. Sed nec aliquam erat. Mauris semper nibh eget ultrices dignissim. Fusce elementum eros dictum, ullamcorper velit id, feugiat neque. Aliquam vehicula cursus lorem sed aliquam. Mauris cursus massa ut semper aliquam. Sed et bibendum elit. Curabitur blandit, leo quis commodo rhoncus, diam leo tincidunt odio, a posuere diam ex ac enim. Donec non vehicula neque. Morbi vehicula at sapien non pretium. Proin venenatis ipsum rhoncus felis fringilla, nec placerat neque bibendum. Suspendisse potenti.",
  issuer: "Gayadeed SpA",
  proof: "Identify Verification (Physical person)",
};

const Preview: React.FC = () => {
  return (
    <div className="grid gap-6 grid-cols-2 lg:grid-cols-4 w-full lg:p-4">
      <h2 className="col-span-2 md:col-span-4 text-lg">Final Preview</h2>

      <div className="col-span-2">
        <span className="text-xs text-gray-400">Token Name</span>
        <p className="text-sm">{data.tokenName}</p>
      </div>
      <div className="col-span-2 row-span-2 flex items-center lg:justify-end">
        <img src={data.imgUrl} alt={data.symbol} className="w-[10rem] h-[10rem] object-cover rounded-full" />
      </div>
      <div>
        <span className="text-xs text-gray-400">Symbol</span>
        <p className="text-sm">{data.symbol}</p>
      </div>
      <div>
        <span className="text-xs text-gray-400">Initial Suply</span>
        {/*  <p className="text-sm">{formatNumber(data.initialSuply)}</p> */}
        <p className="text-sm">{data.initialSuply}</p>
      </div>

      <div>
        <span className="text-xs text-gray-400">Decimals</span>
        <p className="text-sm">{data.decimals}</p>
      </div>
      <div>
        <span className="text-xs text-gray-400">Native token</span>
        <p className="text-sm">{data.denom}</p>
      </div>
      <div className="col-span-2 flex flex-col">
        <span className="text-xs text-gray-400 ">Token Prospectus URL</span>
        <Link className="text-sm truncate hover:text-java-green-600" href={data.tokenUrl} target="_blank">
          {data.tokenUrl}
        </Link>
      </div>

      <div className="col-span-2">
        <span className="text-xs text-gray-400 ">Proof Schema</span>
        <p className="text-sm truncate">{data.proof}</p>
      </div>

      <div className="col-span-2">
        <span className="text-xs text-gray-400 ">Trusted Issuer</span>
        <p className="text-sm truncate">{data.issuer}</p>
      </div>

      <div className="col-span-2 md:col-span-4">
        <span className="text-xs text-gray-400 ">Description</span>
        <p className="text-sm">{data.description}</p>
      </div>
    </div>
  );
};

export default Preview;
