import clsx from "clsx";
import React from "react";

type TextAreaProps = React.DetailedHTMLProps<React.TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>;

interface TextArea {
  label?: string;
  error?: string;
  container?: string;
}

const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps & TextArea>(({ className, container, label, error, ...props }, ref) => {
  return (
    <div className={clsx("flex flex-col gap-1 w-full relative", container)}>
      <label className="block text-xs text-gray-700 text-left">{label && label}</label>
      <textarea
        ref={ref}
        className={clsx(
          `border text-sm bg-white disabled:text-gray-500 disabled:bg-gray-100 disabled:cursor-not-allowed border-gray-200 py-2 px-3 rounded-md outline-none transition duration-150 ease-in-out`,
          className
        )}
        {...props}
      />
      <p className="text-error text-xs absolute bottom-[-18px] w-full text-center">{error && error}</p>
    </div>
  );
});

TextArea.displayName = "TextArea";
export default TextArea;
