import React from 'react';

const HamburgerIcon = ({
  className,
  currentColor,
}: {
  className?: string;
  currentColor?: boolean;
}) => {
  return (
    <svg
      width='27'
      height='27'
      viewBox='0 0 27 27'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
    >
      <path
        d='M3.375 7.87537H23.625'
        stroke={`${currentColor ? 'currentColor' : 'white'}`}
        strokeWidth='1.44231'
        strokeLinecap='round'
      />
      <path
        d='M3.375 13.5H23.625'
        stroke={`${currentColor ? 'currentColor' : 'white'}`}
        strokeWidth='1.44231'
        strokeLinecap='round'
      />
      <path
        d='M3.375 19.1248H23.625'
        stroke={`${currentColor ? 'currentColor' : 'white'}`}
        strokeWidth='1.44231'
        strokeLinecap='round'
      />
    </svg>
  );
};

export default HamburgerIcon;
