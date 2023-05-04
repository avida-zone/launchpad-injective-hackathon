import { ComponentPropsWithoutRef, ReactElement, useMemo, useRef, useState } from "react";
import clsx from "clsx";
import { useClickAway } from "react-use";
import { motion } from "framer-motion";
import { ArrowDownSlineIcon } from "../Icons";

interface Props extends Omit<ComponentPropsWithoutRef<"button">, "onChange" | "value"> {
  label?: string;
  onChange?: (e: { value: string; label: string }) => void;
  value?: { value: string; label: string; LeftComponent?: ReactElement };
  options: { value: string; label: string; LeftComponent?: ReactElement }[];
  containerClassName?: string;
  searcher?: boolean;
}

const ulVariants = {
  open: {
    scale: "1",
    transition: {
      type: "spring",
      bounce: 0,
      duration: 0.2,
    },
  },
  closed: {
    scale: "0",
    transition: {
      type: "spring",
      bounce: 0,
      duration: 0.3,
    },
  },
};

const Dropdown: React.FC<Props> = ({ options, label, value, onChange, containerClassName, className }) => {
  const [open, setOpen] = useState<boolean>(false);

  const dropdownRef = useRef(null);
  const [state, setState] = useState<{
    value: string;
    label: string;
    LeftComponent?: ReactElement;
  }>(value || options[0]);
  const _onChange = (e: { value: string; label: string; LeftComponent?: ReactElement }) => {
    onChange?.(e);
    setState(e);
    setOpen(false);
  };

  useClickAway(dropdownRef, () => setOpen(false));

  return (
    <motion.div
      className={clsx("relative w-full flex flex-col gap-1", containerClassName)}
      ref={dropdownRef}
      animate={open ? "open" : "closed"}
    >
      {label && <p className="text-xs text-gray-400 text-left">{label}</p>}
      <motion.button
        className={clsx(
          "bg-white rounded-lg hover:bg-kashmir-blue-50 flex items-center justify-between gap-2 py-2 px-4 transition-all border border-gray-300 text-java-green-700",
          { "!border-java-green-600": open },
          className
        )}
        type="button"
        onClick={() => setOpen(!open)}
      >
        <div className="flex gap-2 items-center">
          {state.LeftComponent && <div className="w-6 h-6">{state.LeftComponent}</div>}
          {state.label}
        </div>
        <ArrowDownSlineIcon className={clsx("w-6 h-6 transition-all", { "rotate-180": open })} />
      </motion.button>
      <motion.ul
        initial={false}
        variants={ulVariants}
        className={clsx(
          `absolute min-w-fit w-full left-0 bg-white z-30 text-left rounded-lg border border-gray-300  top-[4.5rem] max-h-[15rem] py-2 mb-4 overflow-x-hidden scrollbar-none`,
          { hidden: !open },
          { "!top-[3.3rem]": !label }
        )}
      >
        {options.map((option, i) => {
          return (
            <motion.li
              key={`${option.value}-${i}`}
              className={clsx("py-2 px-4 hover:bg-kashmir-blue-500/20 flex items-center justify-start gap-2 cursor-pointer", {
                "!bg-kashmir-blue-500 !text-white": option.value === state.value,
              })}
              value={option.label}
              onClick={() => _onChange(option)}
            >
              {option.LeftComponent && option.LeftComponent}
              <p>{option.label}</p>
            </motion.li>
          );
        })}
      </motion.ul>
    </motion.div>
  );
};

export default Dropdown;
