import React from 'react';

interface InfiniteScrollerTextProps {
  label: string;
}
const InfiniteScrollerText: React.FC<InfiniteScrollerTextProps> = ({
  label,
}) => {
  return (
    <div
      key={label}
      className='text-mason-grey-light font-semibold text-[54px] leading-[64.58px] max-md:text-[27px] max-md:leading-[32px] hover:text-mason-red cursor-default font-adventPro whitespace-nowrap'
    >
      {label}
    </div>
  );
};

export default InfiniteScrollerText;
