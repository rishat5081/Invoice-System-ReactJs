import * as React from "react";

function SvgAttachFile(props) {
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
        d="M16 6v11.5c0 2.21-1.79 4-4 4s-4-1.79-4-4V5a2.5 2.5 0 015 0v10.5c0 .55-.45 1-1 1s-1-.45-1-1V6H9.5v9.5a2.5 2.5 0 005 0V5c0-2.21-1.79-4-4-4s-4 1.79-4 4v12.5c0 3.04 2.46 5.5 5.5 5.5s5.5-2.46 5.5-5.5V6H16z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgAttachFile;
