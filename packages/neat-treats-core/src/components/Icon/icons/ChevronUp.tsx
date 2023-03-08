import React from 'react';

const ChevronUp = ({ size = 48, color = '#000', ...props }: IIcon) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ fill: 'none' }}
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M26.4007 13.73C25.6197 12.9489 24.3533 12.9489 23.5723 13.73L20.7439 16.5584L5.89462 31.4076L10.1373 35.6503L24.9865 20.801L39.8357 35.6503L44.0784 31.4076L29.2291 16.5584L26.4007 13.73Z"
        fill={color}
      />
    </svg>
  );
};

export default ChevronUp;
