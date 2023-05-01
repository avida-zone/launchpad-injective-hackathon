import React from "react";
import Button from "../Buttons/Button";
import { useRouter } from "next/router";
import clsx from "clsx";

const Navbar: React.FC = () => {
  const { pathname } = useRouter();
  return (
    <nav className="fixed top-0 w-full backdrop-blur-lg z-50">
      <div className="max-layout my-0 mx-auto flex items-start justify-between w-full p-4">
        <p className="font-barbapro text-5xl flex">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-kashmir-blue-500 to-cinnabar-red-700 mr-[-0.5rem]">A</span>VIPAD
        </p>
        <div className={clsx(pathname === "/" ? "hidden" : "")}>
          <Button variant="tertiary">Connect wallet</Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
