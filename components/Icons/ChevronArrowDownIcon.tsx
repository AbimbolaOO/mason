import React from 'react';

const ChevronArrowDownIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
    >
      <path
        d='M19.9201 8.94937L13.4001 15.4694C12.6301 16.2394 11.3701 16.2394 10.6001 15.4694L4.08008 8.94937'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeMiterlimit='10'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default ChevronArrowDownIcon;
