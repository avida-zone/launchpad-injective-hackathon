import React from "react";
import Button from "../Buttons/Button";
import { useRouter } from "next/router";
import clsx from "clsx";
import LogoIcon from "../Icons/LogoIcon";
import LogoGradientIcon from "../Icons/LogoIcon";
import Link from "next/link";

const Navbar: React.FC = () => {
  const { pathname } = useRouter();
  return (
    <nav className="fixed top-0 w-full backdrop-blur-lg z-50">
      <div className="max-layout my-0 mx-auto flex items-start justify-between w-full p-4">
        <Link href="/">
          <p className="font-barbapro text-5xl flex">
            <LogoGradientIcon className="w-9 h-9" />
            VIPAD
          </p>
        </Link>
        <div className={clsx(pathname === "/" ? "hidden" : "")}>
          <Button variant="tertiary">Connect wallet</Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
