import * as React from "react";

function SvgBeenhere(props) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19 1H5c-1.1 0-1.99.9-1.99 2L3 15.93c0 .69.35 1.3.88 1.66L12 23l8.11-5.41c.53-.36.88-.97.88-1.66L21 3c0-1.1-.9-2-2-2zm-7 19.6l-7-4.66V3h14v12.93l-7 4.67zM7.41 10.59l2.58 2.59 6.59-6.6L18 8l-8 8-4-4 1.41-1.41z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgBeenhere;
