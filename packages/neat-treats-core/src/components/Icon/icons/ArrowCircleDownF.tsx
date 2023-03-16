import React from 'react';

const ArrowCircleDownF = ({ size = 48, color = 'black', ...props }: NTIcon) => {
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
        d="M24 48C37.2548 48 48 37.2548 48 24C48 10.7452 37.2548 0 24 0C10.7452 0 0 10.7452 0 24C0 37.2548 10.7452 48 24 48ZM22.5 9V33.3787L15.5147 26.3934C14.9289 25.8076 13.9792 25.8076 13.3934 26.3934C12.8076 26.9792 12.8076 27.9289 13.3934 28.5147L22.9393 38.0607C23.5251 38.6464 24.4749 38.6464 25.0607 38.0607L34.6066 28.5147C35.1924 27.9289 35.1924 26.9792 34.6066 26.3934C34.0208 25.8076 33.0711 25.8076 32.4853 26.3934L25.5 33.3787V9H22.5Z"
        fill={color}
      />
    </svg>
  );
};

export default ArrowCircleDownF;
