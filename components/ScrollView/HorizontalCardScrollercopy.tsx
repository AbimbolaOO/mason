'use client';
import gsap from 'gsap';
import Image from 'next/image';
import React, { useRef, useState } from 'react';

import { useGSAP } from '@gsap/react';

import ArrowLeftIcon from '../Icons/ArrowLeftIcon';
import ArrowRightIcon from '../Icons/ArrowRightIcon';

gsap.registerPlugin(useGSAP);

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
  const containerRef = useRef<HTMLDivElement | null>(null);
  const sliderContainer = useRef<HTMLDivElement | null>(null);
  const sliderContentGrid = useRef<HTMLDivElement | null>(null);
  const [slideCounter, setSlideCounter] = useState<number>(0);

  const { contextSafe } = useGSAP({
    // dependencies: [slideCounter],
    scope: containerRef,
  });

  const handleArrowBtnClick = contextSafe((button: string) => {
    const direction = button === 'right' ? -1 : 1;
    const frameWidth = Number(sliderContainer?.current?.offsetWidth);
    const slideGridWidth = Number(sliderContentGrid?.current?.offsetWidth);
    const sliderContentItemWidth = Number(
      (document.querySelector('.slider-content-item') as HTMLDivElement)
        ?.offsetWidth
    );

    let translateAmount;
    if (slideCounter === 0) {
      translateAmount =
        sliderContentItemWidth *
          Math.floor((frameWidth - 80) / sliderContentItemWidth) +
        80;
    } else {
      translateAmount =
        sliderContentItemWidth *
        Math.floor(frameWidth / sliderContentItemWidth);
    }

    if (slideCounter === 0 && button === 'left') {
      translateAmount = 0;
    }

    translateAmount = translateAmount * direction;

    gsap.to(sliderContentGrid.current, {
      translateX: () => {
        // if (slideCounter !== 0) {
        setSlideCounter(() => slideCounter + 1 * direction);
        // }
        return `+=${translateAmount}`;
      },
      // translateX: `0`,
      // translateX: translateAmount,
      // translateX: translateX,
    });
  });

  return (
    <div ref={containerRef} className='flex flex-col gap-[70px]'>
      {/* Control Arrows */}
      <div className='flex gap-6 ml-auto mr-20'>
        <div
          onClick={() => handleArrowBtnClick('left')}
          className='w-[60px] h-[60px] border-[3px] grid place-content-center border-mason-black rounded-full cursor-pointer'
        >
          <ArrowLeftIcon />
        </div>

        <div
          onClick={() => handleArrowBtnClick('right')}
          className='w-[60px] h-[60px] border-[3px] grid place-content-center border-mason-black rounded-full cursor-pointer'
        >
          <ArrowRightIcon />
        </div>
      </div>

      {/* Scroll Cards */}
      <div
        ref={sliderContainer}
        className='w-full overflow-x-auto flex border border-emerald-500 overscroll-x-contain'
      >
        <div
          ref={sliderContentGrid}
          className='grid grid-flow-col border border-red-600 pl-[80px] slider-container__cells-pack'
        >
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
    <div className='slider-content-item border-l-[1px] border-mason-border flex flex-col p-4 w-[350px] justify-between gap-4'>
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
