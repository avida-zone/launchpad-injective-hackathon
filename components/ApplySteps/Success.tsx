import React from "react";
import Button from "../Buttons/Button";
import Link from "next/link";
import LogoIcon from "../Icons/LogoIcon";
import ConfettiExplosion from "react-confetti-explosion";

const Success: React.FC = () => {
  return (
    <div className="w-full flex-1 flex gap-4 flex-col items-center justify-center text-center relative">
      <LogoIcon className="w-[500px] h-[500px] left-8 -bottom-4 absolute opacity-20" />
      <h2 className="col-span-2 md:col-span-4 text-xl relative">RG-Token succesfull created</h2>
      <ConfettiExplosion colors={["#566fa1", "#15888c", "#22c1c3", "#d0d7e7"]} />
      <div className="flex gap-4 mt-8 relative">
        <Button as={Link} href="/projects" variant="secondary">
          See projects
        </Button>
        <Button as={Link} href="/assets" variant="cuaternary">
          See your assets
        </Button>
      </div>
    </div>
  );
};

export default Success;
