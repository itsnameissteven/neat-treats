import React from 'react';

const ArrowCircleUp = ({ size = 48, color = 'black', ...props }: NTIcon) => {
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
        d="M3 24C3 12.402 12.402 3 24 3C35.598 3 45 12.402 45 24C45 35.598 35.598 45 24 45C12.402 45 3 35.598 3 24ZM0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24ZM25.5 39V14.6213L32.4853 21.6066C33.0711 22.1924 34.0208 22.1924 34.6066 21.6066C35.1924 21.0208 35.1924 20.0711 34.6066 19.4853L25.0607 9.93934C24.4749 9.35355 23.5251 9.35355 22.9393 9.93934L13.3934 19.4853C12.8076 20.0711 12.8076 21.0208 13.3934 21.6066C13.9792 22.1924 14.9289 22.1924 15.5147 21.6066L22.5 14.6213V39H25.5Z"
        fill={color}
      />
    </svg>
  );
};

export default ArrowCircleUp;
