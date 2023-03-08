import React from 'react';

const ArrowCircleLeftF = ({ size = 48, color = 'black', ...props }: IIcon) => {
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
        d="M0 24C0 37.2548 10.7452 48 24 48C37.2548 48 48 37.2548 48 24C48 10.7452 37.2548 0 24 0C10.7452 0 0 10.7452 0 24ZM39 22.5L14.6213 22.5L21.6066 15.5147C22.1924 14.9289 22.1924 13.9792 21.6066 13.3934C21.0208 12.8076 20.0711 12.8076 19.4853 13.3934L9.93934 22.9393C9.35355 23.5251 9.35355 24.4749 9.93934 25.0607L19.4853 34.6066C20.0711 35.1924 21.0208 35.1924 21.6066 34.6066C22.1924 34.0208 22.1924 33.0711 21.6066 32.4853L14.6213 25.5L39 25.5V22.5Z"
        fill={color}
      />
    </svg>
  );
};

export default ArrowCircleLeftF;
