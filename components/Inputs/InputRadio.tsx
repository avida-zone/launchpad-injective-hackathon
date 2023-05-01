import React from "react";
import clsx from "clsx";

type InputProps = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

interface Input {
  label: string;
  container?: string;
}

const InputRadio = React.forwardRef<HTMLInputElement, InputProps & Input>(({ className, label, container = "w-full", id, ...props }, ref) => {
  return (
    <>
      <input type="radio" ref={ref} className={clsx(`input-radio appearance-none hidden`, className && className)} id={id} {...props} />
      <label
        htmlFor={id}
        className={clsx(
          "flex items-center border p-3 border-java-green-600 rounded cursor-pointer hover:bg-kashmir-blue-100 transition-all text-java-green-600 ",
          container
        )}
      >
        <label htmlFor={id} className="w-full cursor-pointer">
          {label}
        </label>
      </label>
    </>
  );
});

InputRadio.displayName = "InputRadio";
export default InputRadio;
