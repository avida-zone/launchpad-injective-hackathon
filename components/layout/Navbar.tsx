import React, { useState } from "react";
import Button from "../Buttons/Button";
import { useRouter } from "next/router";
import clsx from "clsx";
import LogoIcon from "../Icons/LogoIcon";
import LogoGradientIcon from "../Icons/LogoIcon";
import Link from "next/link";
import useMediaQuery from "~/hooks/useMediaQuery";
import Hamburguer from "./Hamburguer";
import { useCosmos } from "~/providers/CosmosProvider";

const Navbar: React.FC = () => {
  const { pathname } = useRouter();
  const { connect, username } = useCosmos();
  const isLg = useMediaQuery("lg");
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <>
      {!isLg ? (
        <div
          className={clsx(
            "fixed h-[calc(100vh-72px)] backdrop-blur-2xl justify-between p-4 py-12 pb-32 flex flex-col text-base gap-4 font-bold w-full z-50 transition-all duration-500",
            isOpen ? "top-[72px]" : "top-[-100vh]"
          )}
        >
          <div className="flex flex-col gap-4">
            <Link href="/apply" className="hover:text-java-green-600 transition-all bg-white p-4 w-full rounded-lg">
              Create RG-Token
            </Link>
            <Link href="/projects" className="hover:text-java-green-600 transition-all bg-white p-4 w-full rounded-lg">
              Projects
            </Link>
          </div>
          <Button variant="tertiary" scale="lg">
            Connect wallet
          </Button>
        </div>
      ) : (
        ""
      )}
      <nav className="fixed top-0 w-full backdrop-blur-lg z-50">
        <div className="max-layout my-0 mx-auto flex items-center justify-between w-full p-4">
          <Link href="/">
            <p className="font-barbapro text-4xl lg:text-5xl flex">
              <LogoGradientIcon className="w-8 h-8 lg:w-9 lg:h-9" />
              VIPAD
            </p>
          </Link>
          {isLg && (
            <div className="items-center flex text-sm gap-6 font-bold">
              <Link href="/apply" className="hover:text-java-green-600 transition-all">
                Create RG-Token
              </Link>
              <Link href="/projects" className="hover:text-java-green-600 transition-all">
                Projects
              </Link>
              <Link href="/assets" className="hover:text-java-green-600 transition-all">
                Assets
              </Link>
            </div>
          )}
          {isLg && (
            <div className={clsx(pathname === "/" ? "hidden" : "")}>
              {username ? (
                <div>{username}</div>
              ) : (
                <Button variant="tertiary" onClick={() => [connect(), console.log("test")]}>
                  Connect wallet
                </Button>
              )}
            </div>
          )}
          {!isLg && (
            <Hamburguer
              isOpen={isOpen}
              toggleOpen={() => {
                setIsOpen(!isOpen);
              }}
            />
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
