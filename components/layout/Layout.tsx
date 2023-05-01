import React, { PropsWithChildren } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import clsx from "clsx";
import { useRouter } from "next/router";

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
    <div
      id="body"
      className={clsx(
        "flex min-h-screen flex-col items-center justify-between bg-gradient-to-bl from-gray-50 from-60% to-java-green-600 relative",
        inter.variable,
        barbapro.variable
      )}
    >
      <Navbar />
      <main
        className={clsx("w-full overflow-hidden", {
          "lg:snap-mandatory lg:snap-y transition-all lg:scrollbar-none relative lg:overflow-scroll lg:h-screen": pathname === "/",
        })}
      >
        {children}
        <Footer />
      </main>
    </div>
  );
};

export default Layout;
