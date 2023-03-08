import React from 'react';

const ArrowCircleRightF = ({ size = 48, color = 'black', ...props }: IIcon) => {
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
        d="M48 24C48 10.7452 37.2548 0 24 0C10.7452 0 0 10.7452 0 24C0 37.2548 10.7452 48 24 48C37.2548 48 48 37.2548 48 24ZM9 25.5H33.3787L26.3934 32.4853C25.8076 33.0711 25.8076 34.0208 26.3934 34.6066C26.9792 35.1924 27.9289 35.1924 28.5147 34.6066L38.0607 25.0607C38.6464 24.4749 38.6464 23.5251 38.0607 22.9393L28.5147 13.3934C27.9289 12.8076 26.9792 12.8076 26.3934 13.3934C25.8076 13.9792 25.8076 14.9289 26.3934 15.5147L33.3787 22.5H9V25.5Z"
        fill={color}
      />
    </svg>
  );
};

export default ArrowCircleRightF;
