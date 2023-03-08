import React from 'react';

const Plus = ({ size = 48, color = 'black', ...props }: IIcon) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M23 9C22.4477 9 22 9.44772 22 10V22H10C9.44772 22 9 22.4477 9 23V25C9 25.5523 9.44772 26 10 26H22V38C22 38.5523 22.4477 39 23 39H25C25.5523 39 26 38.5523 26 38V26H38C38.5523 26 39 25.5523 39 25V23C39 22.4477 38.5523 22 38 22H26V10C26 9.44772 25.5523 9 25 9H23Z"
        fill={color}
      />
    </svg>
  );
};

export default Plus;
