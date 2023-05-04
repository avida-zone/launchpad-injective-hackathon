import React from "react";

const CrossCircleIcon: React.FC<React.SVGAttributes<HTMLOrSVGElement>> = ({ ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="currentColor"
      stroke="currentColor"
      strokeWidth="0"
      viewBox="0 0 16 16"
      {...props}
    >
      <path d="M15.854 12.854s0 0 0 0L11 8l4.854-4.854s0 0 0 0a.503.503 0 000-.707L13.561.146a.499.499 0 00-.707 0s0 0 0 0L8 5 3.146.146s0 0 0 0a.5.5 0 00-.707 0L.146 2.439a.499.499 0 000 .707s0 0 0 0L5 8 .146 12.854s0 0 0 0a.5.5 0 000 .707l2.293 2.293a.499.499 0 00.707 0s0 0 0 0L8 11l4.854 4.854s0 0 0 0a.5.5 0 00.707 0l2.293-2.293a.499.499 0 000-.707z"></path>
    </svg>
  );
};

export default CrossCircleIcon;
