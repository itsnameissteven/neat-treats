import React from 'react';

const ArrowCircleUpF = ({ size = 48, color = 'black', ...props }: IIcon) => {
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
        d="M24 0C10.7452 0 0 10.7452 0 24C0 37.2548 10.7452 48 24 48C37.2548 48 48 37.2548 48 24C48 10.7452 37.2548 0 24 0ZM25.5 39V14.6213L32.4853 21.6066C33.0711 22.1924 34.0208 22.1924 34.6066 21.6066C35.1924 21.0208 35.1924 20.0711 34.6066 19.4853L25.0607 9.93934C24.4749 9.35355 23.5251 9.35355 22.9393 9.93934L13.3934 19.4853C12.8076 20.0711 12.8076 21.0208 13.3934 21.6066C13.9792 22.1924 14.9289 22.1924 15.5147 21.6066L22.5 14.6213V39H25.5Z"
        fill={color}
      />
    </svg>
  );
};

export default ArrowCircleUpF;
