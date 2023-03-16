import React from 'react';

const ChevronLeft = ({ size = 48, color = 'black', ...props }: NTIcon) => {
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
        d="M12.3319 24.4775C12.4234 24.7868 12.5913 25.0783 12.8353 25.3223L15.6638 28.1508L30.513 43L34.7556 38.7574L19.9064 23.9081L34.7556 9.05887L30.513 4.81623L15.6638 19.6655L12.8353 22.4939C12.4408 22.8884 12.2456 23.4067 12.2496 23.9237C12.251 24.1104 12.2785 24.297 12.3319 24.4775Z"
        fill={color}
      />
    </svg>
  );
};

export default ChevronLeft;
