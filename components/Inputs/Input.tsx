import React from "react";
import clsx from "clsx";

type InputProps = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

interface Input {
  label?: string;
  error?: string;
  helpText?: string;
  container?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps & Input>(
  ({ className, label, helpText, container = "w-full", error, ...props }, ref) => {
    return (
      <>
        <div className={clsx("flex flex-col relative gap-1", container)}>
          {label && <label className="block text-xs text-gray-700 text-left">{label}</label>}
          <input
            ref={ref}
            className={clsx(
              `shadow-sm border text-sm py-2 px-3 rounded-md border-gray-300 outline-none focus:border-kashmir-blue-300 transition-all disabled:cursor-help`,
              className && className,
              error && "border-error"
            )}
            {...props}
          />
          {error && <p className="text-error text-xs absolute bottom-[-18px] w-full text-left">{error}</p>}
          {helpText && (
            <p className="mt-2 text-sm text-gray-500" id="email-description">
              {helpText}
            </p>
          )}
        </div>
      </>
    );
  }
);

Input.displayName = "Input";
export default Input;
