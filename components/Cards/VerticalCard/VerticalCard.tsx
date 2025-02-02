import clsx from 'clsx';
import Link from 'next/link';
import React from 'react';

import ArrowRightIcon from '@/components/Icons/ArrowRightIcon';

interface VerticalCardProps {
  title: string;
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
        'text-mason-black text-[30px] leading-[54px] rounded-[36px] p-10 gap-6 flex flex-col',
        className
      )}
    >
      <div className='text-[60px] leading-[100px] font-adventPro font-semibold'>
        {title}
      </div>
      <div>{description}</div>
      {showFooter && (
        <div className='flex flex-col gap-[9px] text-[#CFD2DE]'>
          <div className='text-white text-[18px]'>Click here to</div>
          <Link href={link ?? ''}>
            <div className='text-[30px] leading-[21.7px] flex gap-2 text-mason-red'>
              START NOW <ArrowRightIcon currentColor />
            </div>
          </Link>
        </div>
      )}
    </div>
  );
};

export default VerticalCard;
