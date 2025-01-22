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
    console.log('slideCounter 000--->>', slideCounter);
    const direction = button === 'right' ? -1 : 1;
    const frameWidth = Number(sliderContainer?.current?.offsetWidth);
    const slideGridWidth = Number(sliderContentGrid?.current?.offsetWidth);

    const maxRightClick = Math.ceil((slideGridWidth + 80) / frameWidth);
    console.log('maxRightClick', maxRightClick);

    let computedSliderGridTranslate;
    let gridTranslateVal = 0;

    if (sliderContentGrid?.current) {
      computedSliderGridTranslate = window.getComputedStyle(
        sliderContentGrid?.current
      ).transform;

      // const transform = computedStyles.transform;

      if (
        computedSliderGridTranslate &&
        computedSliderGridTranslate !== 'none'
      ) {
        // Extract the translateX value from the matrix
        const matrixValues =
          computedSliderGridTranslate.match(/matrix\(([^)]+)\)/);
        if (matrixValues && matrixValues[1]) {
          const values = matrixValues[1].split(', ');
          const translateX = parseFloat(values[4]); // The 5th value in the matrix is translateX
          console.log('translateX:', translateX);
          gridTranslateVal = translateX;
        }
      }
    }
    console.log('gridTranslateVal-->', gridTranslateVal);
    const sliderContentItemWidth = (
      document.querySelector('.slider-content-item') as HTMLDivElement
    )?.offsetWidth;
    // const sliderContentItemWidth = sliderContentItem?.offsetWidth;
    // const translateMultiplier = Math.floor(Number(frameWidth) / xumber(sliderContentItem));

    // console.log('sliderContentItemWidth-->>', sliderContentItemWidth);

    // console.log(
    //   'Number(frameWidth) / Number(sliderContentItem)',
    //   Number(frameWidth) / Number(sliderContentItemWidth)
    // );

    let translateAmount;
    if (slideCounter === 0) {
      translateAmount =
        Number(sliderContentItemWidth) *
          Math.floor(
            (Number(frameWidth) - 80) / Number(sliderContentItemWidth)
          ) +
        80;
    } else {
      translateAmount =
        Number(sliderContentItemWidth) *
        Math.floor(Number(frameWidth) / Number(sliderContentItemWidth));
    }

    if (button === 'left') {
      translateAmount = Number(frameWidth);
    }

    if (slideCounter === 0 && button === 'left') {
      translateAmount = 0;
    }

    if (slideCounter === maxRightClick - 1) {
      const distanceLeft = slideGridWidth - frameWidth * slideCounter;
      distanceLeft / sliderContentItemWidth;
      translateAmount = slideGridWidth - distanceLeft;
      // console.log(
      //   'distanceLeft~~~~~~~>>>',
      //   distanceLeft,
      //   distanceLeft / sliderContentItemWidth
      // );
    }

    translateAmount = translateAmount * direction;
    let translateX = `+=${translateAmount}`;
    if (slideCounter === maxRightClick - 1) {
      translateX = `${translateAmount}`;
    }

    console.log('translateAmount-->><>', translateAmount);

    console.log('slideGridWidth', slideGridWidth);
    console.log('frameWidth', frameWidth);
    console.log('translateAmount', translateAmount);
    console.log('sliderContentItemWidth', sliderContentItemWidth);
    gsap.to(sliderContentGrid.current, {
      // translateX: `+=${translateAmount}`,
      // translateX: `0`,
      // translateX: translateAmount,
      translateX: translateX,
    });

    if (button === 'right') {
      setSlideCounter(() => Math.min(0, slideCounter + 1));
    } else {
      setSlideCounter(() => Math.max(0, slideCounter - 1));
    }
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
