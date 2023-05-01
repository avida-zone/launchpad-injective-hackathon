import clsx from "clsx";
import React, { InputHTMLAttributes, useState } from "react";

interface ISwitch {
  label?: string;
  name: string;
}

const Switch: React.FC<InputHTMLAttributes<HTMLInputElement> & ISwitch> = ({
  label,
  name,
  className,
  checked: defaultValue,
  onChange,
  ...props
}) => {
  const [checked, setChecked] = useState<boolean>(defaultValue as boolean);

  const changeChecked = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked);
    onChange?.(e);
  };

  return (
    <div className={clsx("flex flex-col gap-1", className)}>
      {label && (
        <label className="block text-xs text-gray-700 text-left" htmlFor={`switch-${name}`}>
          {label}
        </label>
      )}
      <input
        className="switch-input appearance-none w-12 rounded-full h-6 bg-gray-300 focus:outline-none
        cursor-pointer relative checked:bg-cinnabar-red-800"
        {...props}
        type="checkbox"
        role="switch"
        checked={checked}
        onChange={changeChecked}
        id={`switch-${name}`}
      />
    </div>
  );
};

export default Switch;
