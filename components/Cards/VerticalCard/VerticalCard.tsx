import clsx from 'clsx';
import Link from 'next/link';
import React from 'react';

import ArrowRightIcon from '@/components/Icons/ArrowRightIcon';

interface VerticalCardProps {
  title: string | React.ReactNode;
  description: string;
  className: string;
  link?: string;
  showFooter?: boolean;
}

const VerticalCard: React.FC<VerticalCardProps> = ({
  title,
  description,
  className,
  link,
  showFooter,
}) => {
  return (
    <div
      className={clsx(
        'text-mason-black text-[30px] max-md:text-[17px] leading-[54px] max-md:leading-[30px] rounded-[36px] p-10 max-md:p-6 gap-6 max-md:gap-[10px] flex flex-col',
        className
      )}
    >
      <div className='text-[60px] max-md:text-[34px] leading-[100px] max-md:leading-[57px] font-adventPro font-semibold'>
        {title}
      </div>
      <div>{description}</div>
      {showFooter && (
        <div className='flex flex-col gap-[9px] text-[#CFD2DE]'>
          <div className='text-white text-[18px] max-md:text-[12px]'>
            Click here to
          </div>
          <Link href={link ?? ''}>
            <div className='text-[30px] leading-[21.7px] max-md:text-[17px] flex gap-2 text-mason-red items-center max-md:gap-2'>
              START NOW <ArrowRightIcon currentColor className='h-[12px]' />
            </div>
          </Link>
        </div>
      )}
    </div>
  );
};

export default VerticalCard;
