import React from 'react';

interface InfiniteScrollerTextProps {
  label: string;
}
const InfiniteScrollerText: React.FC<InfiniteScrollerTextProps> = ({
  label,
}) => {
  return (
    <div className='text-mason-grey-light font-semibold text-[50px] file:leading-[64.58px] hover:text-mason-red cursor-default'>
      {label}
    </div>
  );
};

export default InfiniteScrollerText;
