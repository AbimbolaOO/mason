'use client';
import Image from 'next/image';
import React, { useRef } from 'react';

import ArrowLeftIcon from '../Icons/ArrowLeftIcon';
import ArrowRightIcon from '../Icons/ArrowRightIcon';

interface ICellData {
  icon: React.ReactNode;
  label: string;
  description: string;
  imageName: string;
}
interface HorizontalCardScrollerProps {
  cellData: ICellData[];
}
const HorizontalCardScroller: React.FC<HorizontalCardScrollerProps> = ({
  cellData,
}) => {
  const sliderContainer = useRef<HTMLDivElement | null>(null);
  const handleArrowBtnClick = (direction: string) => {
    if (sliderContainer) {
      console.log('sliderContainer-->', sliderContainer?.current?.offsetWidth);
    }
    console.log('LEFT-->', direction);
  };

  return (
    <div className='flex flex-col gap-[70px]'>
      {/* Control Arrows */}
      <div className='flex gap-6 ml-auto mr-20'>
        <div
          onClick={() => handleArrowBtnClick('left')}
          className='w-[60px] h-[60px] border-[3px] grid place-content-center border-mason-black rounded-full cursor-pointer'
        >
          <ArrowLeftIcon />
        </div>

        <div className='w-[60px] h-[60px] border-[3px] grid place-content-center border-mason-black rounded-full cursor-pointer'>
          <ArrowRightIcon />
        </div>
      </div>

      {/* Scroll Cards */}
      <div
        ref={sliderContainer}
        className='w-full overflow-x-auto flex border border-emerald-500 overscroll-x-contain'
      >
        <div className='grid grid-flow-col border border-red-600 pl-[80px] slider-container__cells-pack'>
          {cellData.map((data, index) => (
            <HorizontalCard key={index} {...data} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HorizontalCardScroller;

const HorizontalCard: React.FC<ICellData> = ({
  icon,
  label,
  description,
  imageName,
}) => {
  return (
    <div className='border-l-[1px] border-mason-border flex flex-col p-4 w-[350px] justify-between gap-4'>
      <div className='flex flex-col gap-4'>
        {/* Icon Part */}
        <div className='grid place-content-center p-[7px] bg-mason-icon-bg w-[54px] h-[54px] rounded-lg'>
          {icon}
        </div>

        {/* Label part */}
        <div className='font-adventPro font-semibold text-xl leading-[32px]'>
          {label}
        </div>

        {/* Description part */}
        <div className='text-[15px] leading-[30px]'>{description}</div>
      </div>

      {/*  Imag part*/}
      <div className='relative'>
        <Image
          src={`/static/img/${imageName}.png`}
          alt={`${imageName} image`}
          width={318}
          height={140.09}
          priority
          className=''
        />
      </div>
    </div>
  );
};
