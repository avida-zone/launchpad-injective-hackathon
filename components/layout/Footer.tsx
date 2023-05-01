import React from "react";
import LogoIcon from "../Icons/LogoIcon";
import DiscordIcon from "../Icons/DiscordIcon";
import TwitterIcon from "../Icons/TwitterIcon";
import Link from "next/link";
import GithubIcon from "../Icons/GithubIcon";

const Footer: React.FC = () => {
  return (
    <footer className=" w-full backdrop-blur-xl  text-white shadow-lg snap-start mt-8">
      <div className="max-layout my-0 mx-auto w-full p-8 flex justify-between min-h-[150px] flex-col gap-6 md:flex-row">
        <div className="flex flex-col gap-2 justify-between ">
          <p className="font-barbapro text-5xl lg:flex items-start hidden">
            <LogoIcon className="fill-white w-9 h-9" />
            VIPAD
          </p>
          <ul className="flex gap-4 ">
            <Link href="/" className="text-white hover:text-kashmir-blue-200">
              <DiscordIcon className="w-7 h-7" />
            </Link>
            <Link href="/" className="text-white hover:text-kashmir-blue-200">
              <TwitterIcon className="w-7 h-7" />
            </Link>
            <Link href="/" className="text-white hover:text-kashmir-blue-200">
              <GithubIcon className="w-7 h-7" />
            </Link>
          </ul>
        </div>
        <div className="flex flex-col gap-1 text-black lg:text-java-green-900  text-sm">
          <p className="mb-1 text-lg">Services</p>
          <Link href="/" className="text-white md:text-java-green-600 hover:text-kashmir-blue-500">
            Home
          </Link>
          <Link href="/projects" className="text-white md:text-java-green-600 hover:text-kashmir-blue-500">
            Projects
          </Link>
          <Link href="/#launch" className="text-white md:text-java-green-600 hover:text-kashmir-blue-500">
            Launch with AVIPAD
          </Link>
          <Link href="/#faqs" className="text-white md:text-java-green-600 hover:text-kashmir-blue-500">
            FAQS
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
