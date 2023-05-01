import React, { PropsWithChildren } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import clsx from "clsx";

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
  return (
    <div
      id="body"
      className={clsx(
        "flex min-h-screen flex-col items-center justify-between bg-gradient-to-bl from-gray-50 from-60% to-cinnabar-red-900 relative",
        inter.variable,
        barbapro.variable
      )}
    >
      <Navbar />
      <main className="w-full snap-mandatory snap-y transition-all scrollbar-none relative overflow-scroll h-screen">
        {children}
        <Footer />
      </main>
    </div>
  );
};

export default Layout;
