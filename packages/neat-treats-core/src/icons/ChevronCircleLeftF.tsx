import React from 'react';

const ChevronCircleLeftF = ({ size = 48, color = '#000', ...props }: IIcon) => {
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
        d="M24 48C37.2548 48 48 37.2548 48 24C48 10.7452 37.2548 0 24 0C10.7452 0 0 10.7452 0 24C0 37.2548 10.7452 48 24 48ZM14.5858 25.5061C14.3905 25.3108 14.2441 25.0853 14.1464 24.8445C13.9024 24.2426 13.9634 23.5459 14.3295 22.9914C14.4027 22.8805 14.4882 22.7753 14.5858 22.6777L16.7071 20.5564L28.7279 8.53554L32.2635 12.0711L20.2426 24.0919L32.2635 36.1127L28.7279 39.6482L16.7071 27.6274L14.5858 25.5061Z"
        fill={color}
      />
    </svg>
  );
};

export default ChevronCircleLeftF;
