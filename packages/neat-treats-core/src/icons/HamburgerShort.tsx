import React from 'react';

const HamburgerShort = ({ size = 48, color = 'black', ...props }: IIcon) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect x="2" y="14" width="44" height="6" rx="3" fill={color} />
      <rect x="2" y="28" width="44" height="6" rx="3" fill={color} />
    </svg>
  );
};

export default HamburgerShort;
