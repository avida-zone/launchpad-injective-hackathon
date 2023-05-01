import React from "react";

const Header: React.FC = () => {
  return (
    <header className="min-h-screen pt-[80px] flex gap-20 flex-col md:flex-row items-center justify-center p-4 relative overflow-x-hidden">
      <div className="w-[35rem] h-[35rem] absolute top-[-15rem] right-[-15rem] bg-kashmir-blue-500 rounded-full blur-[90px]" />
      <div className="container-triangules-bg absolute w-full right-[-10rem] top-0 z-10 hidden lg:grid">
        {Array.from({ length: 100 }).map((_, i) => {
          return (
            <div
              className="triangules-bg bg-white even:hover:bg-cinnabar-red-800 odd:hover:bg-kashmir-blue-500 transition-all"
              key={`triangule-${i}`}
            ></div>
          );
        })}
      </div>
      <div className="penrose w-[200px] h-[200px] z-20">
        <div className="triangle triangleZ1"></div>
        <div className="triangle triangleZ1"></div>
        <div className="triangle triangleZ1"></div>
        <div className="triangle triangleZ2"></div>
        <div className="triangle triangleZ2"></div>
        <div className="triangle triangleZ2"></div>
        <div className="ball"></div>
      </div>
      <div className="max-w-[500px] md:mb-[200px] relative z-20">
        <h1 className="text-2xl md:text-4xl text-center">
          Your <span className="text-cinnabar-red-700">legitimate</span> launchpad
        </h1>
        <p className="text-center mt-8">The first legal platform to launch your project</p>
      </div>
    </header>
  );
};

export default Header;
