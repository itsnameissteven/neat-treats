import React from 'react';

const Minus = ({ size = 48, color = 'black', ...props }: NTIcon) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect
        x="9"
        y="26"
        width="4"
        height="30"
        rx="1"
        transform="rotate(-90 9 26)"
        fill={color}
      />
    </svg>
  );
};

export default Minus;
