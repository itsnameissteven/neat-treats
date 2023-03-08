import React from 'react';

const ChevronRight = ({ size = 48, color = 'black', ...props }: IIcon) => {
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
        d="M35.6681 23.5225C35.5766 23.2132 35.4087 22.9217 35.1647 22.6777L32.3362 19.8492L17.487 5L13.2444 9.24264L28.0936 24.0919L13.2444 38.9411L17.487 43.1838L32.3362 28.3345L35.1647 25.5061C35.5592 25.1116 35.7544 24.5933 35.7504 24.0763C35.749 23.8896 35.7215 23.703 35.6681 23.5225Z"
        fill={color}
      />
    </svg>
  );
};

export default ChevronRight;
