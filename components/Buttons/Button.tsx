import clsx from "clsx";
import React from "react";
import { HTMLMotionProps, motion } from "framer-motion";

interface Props<C extends React.ElementType> {
  scale?: "sm" | "lg";
  as?: C;
  variant?: "primary" | "secondary" | "tertiary" | "cuaternary";
}

type ButtonComponent = <C extends React.ElementType = "button">(
  props: Props<C> & Omit<React.ComponentPropsWithoutRef<C>, keyof Props<C>>
) => React.ReactElement | null;

const Button: ButtonComponent = ({ children, className, as: AsComponent, scale = "sm", variant = "primary", ...props }) => {
  const Component = AsComponent ? AsComponent : motion.button;
  return (
    <Component
      className={clsx(
        `rounded-sm disabled:!opacity-50 transition-all flex justify-center items-center disabled:cursor-not-allowed font-bold border border-transparent outline-none`,
        variant.includes("primary") && "bg-java-green-600 text-white hover:bg-java-green-600",
        variant.includes("secondary") && "bg-transparent !border-java-green-600 text-java-green-600 hover:text-white hover:bg-java-green-600",
        variant.includes("cuaternary") &&
          "bg-transparent !border-kashmir-blue-500 text-kashmir-blue-500 hover:text-white hover:bg-kashmir-blue-500",
        variant.includes("tertiary") &&
          "!border-none bg-gradient-to-tl from-kashmir-blue-500 from-30% to-java-green-500 hover:brightness-110 text-white",
        scale?.includes("sm") && "text-sm md:text-base px-4 py-2",
        scale?.includes("lg") && "text-lg px-8 py-4",
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
};

export default Button;

<Button>test</Button>;
