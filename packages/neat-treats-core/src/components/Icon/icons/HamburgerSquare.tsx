import React from 'react';

const HamburgerSquare = ({ size = 48, color = 'black', ...props }: NTIcon) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect x="2" y="6" width="44" height="6" rx="2" fill={color} />
      <rect x="2" y="36" width="44" height="6" rx="2" fill={color} />
      <rect x="2" y="21" width="44" height="6" rx="2" fill={color} />
    </svg>
  );
};

export default HamburgerSquare;
