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
    <div className='grid grid-cols-[1fr_auto] max-md:flex max-md:flex-col-reverse bg-black items-center pl-20 pr-[36px] gap-[117px] max-md:gap-0'>
      <div className='flex-col flex gap-12 max-md:gap-6 pb-[86px] text-white max-md:text-center'>
        <div className='text-6xl max-md:text-[30px] leading-[100px] max-md:leading-[50px] flex flex-col items-center justify-center h-fit font-semibold font-adventPro'>
          {topTopText}
        </div>

        <div className='text-[25px] max-md:text-[18px] leading-10 max-md:leading-[36px]'>
          {topBottomText}
        </div>

        <Link href={buttonUrl}>
          <button className='rounded-xl text-mason-black bg-white text-[15px] py-[17px] px-[54px] leading-5 w-fit max-md:hidden'>
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
