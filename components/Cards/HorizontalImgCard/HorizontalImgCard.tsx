import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface HorizontalImgCardProps {
  topTopText: string;
  topBottomText: string;
  buttonLabel: string;
  imageName: string;
  buttonUrl: string;
}

const HorizontalImgCard: React.FC<HorizontalImgCardProps> = ({
  topTopText,
  topBottomText,
  buttonLabel,
  imageName,
  buttonUrl,
}) => {
  return (
    <div className='grid grid-cols-[1fr_auto] bg-black items-center pl-20 pr-[36px] gap-[117px]'>
      <div className='flex-col flex gap-12 pb-[86px] text-white'>
        <div className='text-6xl leading-[100px] flex flex-col items-center justify-center h-fit font-semibold font-adventPro'>
          {topTopText}
        </div>

        <div className='text-[25px] leading-10'>{topBottomText}</div>

        <Link href={buttonUrl}>
          <button className='rounded-xl text-mason-black bg-white text-[15px] py-[17px] px-[54px] leading-5 w-fit'>
            {buttonLabel}
          </button>
        </Link>
      </div>

      {/* Image */}
      <div className='relative'>
        <Image
          src={`/static/img/${imageName}.png`}
          alt={`image`}
          width={520}
          height={520}
          priority
          className=''
        />
      </div>
    </div>
  );
};

export default HorizontalImgCard;
