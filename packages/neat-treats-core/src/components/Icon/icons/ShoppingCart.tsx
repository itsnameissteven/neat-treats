import React from 'react';

import { NTIcon } from '../types';

const ShoppingCart = ({ size = 48, color = 'black', ...props }: NTIcon) => {
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
        d="M14.4 38.4C11.76 38.4 9.624 40.56 9.624 43.2C9.624 45.84 11.76 48 14.4 48C17.04 48 19.2 45.84 19.2 43.2C19.2 40.56 17.04 38.4 14.4 38.4ZM0 0V4.8H4.8L13.44 23.016L10.2 28.896C9.816 29.568 9.6 30.36 9.6 31.2C9.6 33.84 11.76 36 14.4 36H43.2V31.2H15.408C15.072 31.2 14.808 30.936 14.808 30.6L14.88 30.312L17.04 26.4H34.92C36.72 26.4 38.304 25.416 39.12 23.928L47.712 8.352C47.904 8.016 48 7.608 48 7.2C48 5.88 46.92 4.8 45.6 4.8H10.104L7.848 0H0ZM38.4 38.4C35.76 38.4 33.624 40.56 33.624 43.2C33.624 45.84 35.76 48 38.4 48C41.04 48 43.2 45.84 43.2 43.2C43.2 40.56 41.04 38.4 38.4 38.4Z"
        fill={color}
      />
    </svg>
  );
};

export default ShoppingCart;
