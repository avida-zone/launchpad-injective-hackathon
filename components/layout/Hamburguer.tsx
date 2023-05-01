import clsx from "clsx";
import React from "react";

interface Props {
  isOpen: boolean;
  toggleOpen: () => void;
}

const Hamburguer: React.FC<Props> = ({ isOpen, toggleOpen }) => {
  return (
    <div
      className={clsx(
        "flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 group origin-center cursor-pointer",
        { "-rotate-[45deg]": isOpen }
      )}
      onClick={toggleOpen}
    >
      <div
        className={clsx("bg-black h-[3px] w-1/2 rounded-lg transform transition-all duration-300 origin-right delay-75", {
          "-translate-y-[1px] !h-[2px] -rotate-90": isOpen,
        })}
      />
      <div className={clsx("bg-black h-[2px] rounded-lg", isOpen ? "h-[1px]" : "")} />
      <div
        className={clsx("bg-black h-[3px] w-1/2 self-end transform transition-all duration-300 origin-left delay-75 group rounded-lg", {
          "-rotate-90 !h-[2px] translate-y-[1px]": isOpen,
        })}
      ></div>
    </div>
  );
};

export default Hamburguer;
