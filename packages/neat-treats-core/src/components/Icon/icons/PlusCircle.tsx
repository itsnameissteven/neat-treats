import React from 'react';

const PlusCircle = ({ size = 48, color = 'black', ...props }: NTIcon) => {
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
        d="M45 24C45 35.598 35.598 45 24 45C12.402 45 3 35.598 3 24C3 12.402 12.402 3 24 3C35.598 3 45 12.402 45 24ZM48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24ZM22 10C22 9.44772 22.4477 9 23 9H25C25.5523 9 26 9.44772 26 10V22H38C38.5523 22 39 22.4477 39 23V25C39 25.5523 38.5523 26 38 26H26V38C26 38.5523 25.5523 39 25 39H23C22.4477 39 22 38.5523 22 38V26H10C9.44772 26 9 25.5523 9 25V23C9 22.4477 9.44772 22 10 22H22V10Z"
        fill={color}
      />
    </svg>
  );
};

export default PlusCircle;
