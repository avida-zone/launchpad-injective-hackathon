import React from "react";
import Button from "../Buttons/Button";
import { useRouter } from "next/router";
import clsx from "clsx";
import LogoIcon from "../Icons/LogoIcon";
import LogoGradientIcon from "../Icons/LogoIcon";
import Link from "next/link";
import useMediaQuery from "~/hooks/useMediaQuery";
import Hamburguer from "./Hamburguer";

const Navbar: React.FC = () => {
  const { pathname } = useRouter();
  const isLg = useMediaQuery("lg");
  return (
    <nav className="fixed top-0 w-full backdrop-blur-lg z-50">
      <div className="max-layout my-0 mx-auto flex items-center justify-between w-full p-4">
        <Link href="/">
          <p className="font-barbapro text-5xl flex">
            <LogoGradientIcon className="w-9 h-9" />
            VIPAD
          </p>
        </Link>
        <div className="items-center flex text-sm gap-4 font-bold">
          <Link href="/apply" className="hover:text-java-green-600 transition-all">
            Create RG-Token Proposal
          </Link>
          <Link href="/projects" className="hover:text-java-green-600 transition-all">
            Projects
          </Link>
        </div>
        <div className={clsx(pathname === "/" ? "hidden" : "")}>
          <Button variant="tertiary">Connect wallet</Button>
        </div>
        {!isLg && <Hamburguer />}
      </div>
    </nav>
  );
};

export default Navbar;
