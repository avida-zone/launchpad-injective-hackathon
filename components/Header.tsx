import React from "react";

const Header: React.FC = () => {
  return (
    <header
      className="h-screen scrollbar-none pt-[80px] flex gap-20 flex-col lg:flex-row items-center justify-center p-4 lg:relative overflow-x-hidden
    bg-gradient-to-tr from-transparent from-60% to-java-green-600 lg:bg-transparent"
    >
      <div className="w-[35rem] h-[35rem] absolute left-[-15rem] top-[70vh] lg:left-auto lg:bottom-auto lg:top-[-15rem] lg:right-[-10rem] bg-kashmir-blue-500 rounded-full blur-[90px]" />
      <div className="container-triangules-bg absolute w-full right-[-10rem] top-0 z-10 hidden lg:grid">
        {Array.from({ length: 100 }).map((_, i) => {
          return (
            <div
              className="triangules-bg bg-white even:hover:bg-java-green-700 odd:hover:bg-kashmir-blue-500 transition-all"
              key={`triangule-${i}`}
            ></div>
          );
        })}
      </div>
      <div className="penrose w-[200px] h-[200px] z-20 translate-y-[50%] lg:translate-y-0 translate-x-[50%] ">
        <div className="triangle triangleZ1"></div>
        <div className="triangle triangleZ1"></div>
        <div className="triangle triangleZ1"></div>
        <div className="triangle triangleZ2"></div>
        <div className="triangle triangleZ2"></div>
        <div className="triangle triangleZ2"></div>
        <div className="ball"></div>
      </div>
      <div className="max-w-[500px] lg:mb-[200px] relative z-20">
        <h1 className="text-2xl md:text-4xl text-center">
          Launch your <span className="text-java-green-600">Regulatory Grade </span> Token
        </h1>
        <p className="text-center mt-8">The first token launchpad where SSI meets Web3</p>
      </div>
    </header>
  );
};

export default Header;
