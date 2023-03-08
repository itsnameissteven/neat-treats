import React from 'react';

const ChevronCircleDownF = ({ size = 48, color = '#000', ...props }: IIcon) => {
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
        d="M24 0C10.7452 0 0 10.7452 0 24C0 37.2548 10.7452 48 24 48C37.2548 48 48 37.2548 48 24C48 10.7452 37.2548 0 24 0ZM33.4142 22.4939C33.6095 22.6892 33.7559 22.9148 33.8536 23.1555C34.0976 23.7574 34.0366 24.4541 33.6705 25.0086C33.5973 25.1195 33.5118 25.2247 33.4142 25.3223L31.2929 27.4436L19.2721 39.4645L15.7365 35.9289L27.7574 23.9081L15.7365 11.8873L19.2721 8.35176L31.2929 20.3726L33.4142 22.4939Z"
        fill={color}
      />
    </svg>
  );
};

export default ChevronCircleDownF;
