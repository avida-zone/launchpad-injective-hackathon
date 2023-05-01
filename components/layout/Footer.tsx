import React from "react";
import LogoIcon from "../Icons/LogoIcon";
import DiscordIcon from "../Icons/DiscordIcon";
import TwitterIcon from "../Icons/TwitterIcon";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className=" w-full backdrop-blur-xl  text-white shadow-lg snap-start">
      <div className="max-layout my-0 mx-auto w-full p-4 flex justify-between">
        <div className="flex flex-col gap-2 justify-between min-h-[150px]">
          <p className="font-barbapro text-5xl flex items-start">
            <LogoIcon className="fill-white w-9 h-9" />
            VIPAD
          </p>
          <ul className="flex gap-4">
            <DiscordIcon className="w-7 h-7 text-white hover:text-kashmir-blue-200" />
            <TwitterIcon className="w-7 h-7 text-white hover:text-kashmir-blue-200" />
          </ul>
        </div>
        <div className="flex flex-col gap-1 text-java-green-900">
          <p className="mb-1 text-lg">Services</p>
          <Link href="/" className="text-java-green-600 hover:text-kashmir-blue-500">
            Home
          </Link>
          <Link href="/apply" className="text-java-green-600 hover:text-kashmir-blue-500">
            Apply
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
