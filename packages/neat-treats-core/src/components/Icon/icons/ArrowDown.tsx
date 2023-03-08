import React from 'react';

const ArrowDown = ({ size = 48, color = 'black', ...props }: IIcon) => {
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
        d="M22.9393 38.0607C23.5251 38.6464 24.4749 38.6464 25.0607 38.0607L34.6066 28.5147C35.1924 27.9289 35.1924 26.9792 34.6066 26.3934C34.0208 25.8076 33.0711 25.8076 32.4853 26.3934L24 34.8787L15.5147 26.3934C14.9289 25.8076 13.9792 25.8076 13.3934 26.3934C12.8076 26.9792 12.8076 27.9289 13.3934 28.5147L22.9393 38.0607ZM22.5 9L22.5 37L25.5 37L25.5 9L22.5 9Z"
        fill={color}
      />
    </svg>
  );
};

export default ArrowDown;
