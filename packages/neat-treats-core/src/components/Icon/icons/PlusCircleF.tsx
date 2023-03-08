import React from 'react';

const PlusCircleF = ({ size = 48, color = 'black', ...props }: IIcon) => {
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
        d="M24 48C37.2548 48 48 37.2548 48 24C48 10.7452 37.2548 0 24 0C10.7452 0 0 10.7452 0 24C0 37.2548 10.7452 48 24 48ZM22 10C22 9.44772 22.4477 9 23 9H25C25.5523 9 26 9.44772 26 10V22H38C38.5523 22 39 22.4477 39 23V25C39 25.5523 38.5523 26 38 26H26V38C26 38.5523 25.5523 39 25 39H23C22.4477 39 22 38.5523 22 38V26H10C9.44772 26 9 25.5523 9 25V23C9 22.4477 9.44772 22 10 22H22V10Z"
        fill={color}
      />
    </svg>
  );
};

export default PlusCircleF;
