import React from 'react';

const ArrowRightIcon = ({
  currentColor,
  className,
}: {
  currentColor?: boolean;
  className?: string;
}) => {
  return (
    <svg
      width='28'
      height='20'
      viewBox='0 0 28 20'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
    >
      <path
        d='M21.1716 8L16.5858 3.41421C15.8047 2.63317 15.8047 1.36684 16.5858 0.585786C17.3668 -0.195262 18.6332 -0.195262 19.4142 0.585786L27.4142 8.58579C28.1953 9.36684 28.1953 10.6332 27.4142 11.4142L19.4142 19.4142C18.6332 20.1953 17.3668 20.1953 16.5858 19.4142C15.8047 18.6332 15.8047 17.3668 16.5858 16.5858L21.1716 12H1.99706C0.894114 12 0 11.1046 0 10C0 8.89543 0.894114 8 1.99706 8H21.1716Z'
        fill={`${!currentColor ? '#0F0F0F' : 'currentColor'}`}
      />
    </svg>
  );
};

export default ArrowRightIcon;
