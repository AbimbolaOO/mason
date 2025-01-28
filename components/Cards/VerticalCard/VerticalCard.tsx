import clsx from 'clsx';
import React from 'react';

interface VerticalCardProps {
  title: string;
  description: string;
  className: string;
}

const VerticalCard: React.FC<VerticalCardProps> = ({
  title,
  description,
  className,
}) => {
  return (
    <div
      className={clsx(
        'text-mason-black text-[30px] leading-[54px] rounded-[36px] p-10 gap-6 flex flex-col',
        className
      )}
    >
      <div className='text-[60px] leading-[100px] font-adventPro font-semibold'>
        {title}
      </div>
      <div>{description}</div>
    </div>
  );
};

export default VerticalCard;
