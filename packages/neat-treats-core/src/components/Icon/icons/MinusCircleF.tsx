import React from 'react';

const MinusCircleF = ({ size = 48, color = 'black', ...props }: NTIcon) => {
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
        d="M24 48C37.2548 48 48 37.2548 48 24C48 10.7452 37.2548 0 24 0C10.7452 0 0 10.7452 0 24C0 37.2548 10.7452 48 24 48ZM9 25C9 25.5523 9.44772 26 10 26H38C38.5523 26 39 25.5523 39 25V23C39 22.4477 38.5523 22 38 22H10C9.44772 22 9 22.4477 9 23V25Z"
        fill={color}
      />
    </svg>
  );
};

export default MinusCircleF;
