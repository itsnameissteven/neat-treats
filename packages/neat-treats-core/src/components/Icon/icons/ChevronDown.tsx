import React from 'react';

const ChevronDown = ({ size = 48, color = 'black', ...props }: NTIcon) => {
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
        d="M24.4775 35.6681C24.7868 35.5766 25.0783 35.4087 25.3223 35.1647L28.1508 32.3362L43 17.487L38.7574 13.2444L23.9081 28.0936L9.05887 13.2444L4.81623 17.487L19.6655 32.3362L22.4939 35.1647C22.8884 35.5592 23.4067 35.7544 23.9237 35.7504C24.1104 35.749 24.297 35.7215 24.4775 35.6681Z"
        fill={color}
      />
    </svg>
  );
};

export default ChevronDown;
