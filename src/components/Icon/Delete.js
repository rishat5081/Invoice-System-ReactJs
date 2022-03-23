import * as React from "react";

function SvgDelete(props) {
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
        d="M14.5 3h-5l-1 1H5v2h14V4h-3.5l-1-1zM16 9v10H8V9h8zM6 7h12v12c0 1.1-.9 2-2 2H8c-1.1 0-2-.9-2-2V7z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgDelete;
