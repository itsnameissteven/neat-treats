import React from 'react';

const ChevronCircleUpF = ({ size = 48, color = '#000', ...props }: IIcon) => {
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
        d="M0 24C0 37.2548 10.7452 48 24 48C37.2548 48 48 37.2548 48 24C48 10.7452 37.2548 0 24 0C10.7452 0 0 10.7452 0 24ZM22.4939 14.5858C22.6892 14.3905 22.9148 14.2441 23.1555 14.1464C23.7574 13.9024 24.4541 13.9634 25.0086 14.3295C25.1195 14.4027 25.2247 14.4882 25.3223 14.5858L27.4436 16.7071L39.4645 28.7279L35.9289 32.2635L23.9081 20.2426L11.8873 32.2635L8.35176 28.7279L20.3726 16.7071L22.4939 14.5858Z"
        fill={color}
      />
    </svg>
  );
};

export default ChevronCircleUpF;
