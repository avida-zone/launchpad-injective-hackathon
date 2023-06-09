import React, { PropsWithChildren, Suspense } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import clsx from "clsx";
import { useRouter } from "next/router";
import ControlModal from "../modals/ControlModal";
import Spinner from "../Spinner";

const inter = Inter({
  variable: "--font-inter",
  display: "optional",
  subsets: ["latin"],
});

const barbapro = localFont({
  variable: "--font-barbapro",
  src: [
    {
      path: "../../fonts/Babapro.otf",
      style: "normal",
      weight: "500",
    },
    {
      path: "../../fonts/BabaproBold.otf",
      style: "bold",
      weight: "600",
    },
  ],
});

const Layout: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  const { pathname } = useRouter();
  return (
    <div id="body" className={clsx("flex min-h-screen flex-col items-center justify-between relative", inter.variable, barbapro.variable)}>
      <ControlModal />
      <Navbar />
      <main
        className={clsx("w-full overflow-hidden bg-gradient-to-bl from-gray-50 lg:from-60% from-70% to-java-green-600 min-h-screen flex-1", {
          "lg:snap-mandatory lg:snap-y transition-all lg:scrollbar-none relative lg:overflow-scroll lg:h-screen": pathname === "/",
        })}
      >
        <div className="w-full flex-1 min-h-screen flex flex-col items-center justify-center">{children}</div>
        <Footer />
      </main>
    </div>
  );
};

export default Layout;
