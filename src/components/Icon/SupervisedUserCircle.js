import * as React from "react";

function SvgSupervisedUserCircle(props) {
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
        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm.51 7.99c0-1.65-1.35-3-3-3s-3 1.35-3 3 1.35 3 3 3 3-1.35 3-3zm-3 1c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm8.5 0c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2-.01-1.11.89-2 2-2 1.11 0 2 .89 2 2zM9.51 16c-1.39 0-2.98.57-3.66 1.11a7.935 7.935 0 005.66 2.86v-2.78c0-1.89 2.98-2.7 4.5-2.7.88 0 2.24.28 3.24.87.48-1.03.75-2.17.75-3.37 0-4.41-3.59-8-8-8s-8 3.59-8 8c0 1.23.28 2.39.78 3.43 1.34-.98 3.43-1.43 4.73-1.43.44 0 .97.06 1.53.16-.63.57-1.06 1.22-1.3 1.86-.041 0-.083-.003-.123-.005A1.646 1.646 0 009.51 16z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgSupervisedUserCircle;
