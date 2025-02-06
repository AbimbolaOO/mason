'use client';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import React, { useRef, useState } from 'react';

import { useGSAP } from '@gsap/react';

import ArrowLeftIcon from '../Icons/ArrowLeftIcon';
import ArrowRightIcon from '../Icons/ArrowRightIcon';

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

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
  const [currentTranslateX, setCurrentTranslateX] = useState<number>(0);

  const { contextSafe } = useGSAP({
    // dependencies: [slideCounter],
    scope: containerRef,
  });

  useGSAP(
    () => {
      const animate = gsap
        .timeline()
        .set('.slider-content-item', { opacity: 0 })
        .from('.slider-content-item', { y: 200, opacity: 1, stagger: 0.2 });

      ScrollTrigger.create({
        trigger: containerRef.current,
        start: 'top 50%',
        // end: 'end 20%',
        animation: animate,
        // markers: true,
      });
    },
    { scope: containerRef }
  );

  const handleArrowBtnClick = contextSafe((direction: 'left' | 'right') => {
    if (!sliderContainer.current || !sliderContentGrid.current) return;

    const frameWidth = sliderContainer.current.offsetWidth;
    const sliderWidth = sliderContentGrid.current.offsetWidth;

    // Scroll by half of the frame width
    const translateStep = frameWidth / 2;

    // Determine the new translateX value
    let newTranslateX = currentTranslateX;
    if (direction === 'right') {
      newTranslateX = Math.max(
        currentTranslateX - translateStep,
        -(sliderWidth - frameWidth) // Prevent overscrolling to the right
      );
    } else if (direction === 'left') {
      newTranslateX = Math.min(
        currentTranslateX + translateStep,
        0 // Prevent overscrolling to the left
      );
    }

    // Animate the slider and update the state
    gsap.to(sliderContentGrid.current, {
      x: newTranslateX,
      duration: 0.5,
      ease: 'power3.out',
    });

    setCurrentTranslateX(newTranslateX);
  });

  return (
    <div ref={containerRef} className='flex flex-col gap-[70px] max-md:hidden'>
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
        className='w-full overflow-hidden flex overscroll-x-contain'
      >
        <div ref={sliderContentGrid} className='grid grid-flow-col pl-[80px]'>
          {cellData.map((data, index) => (
            <HorizontalCard key={index} {...data} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HorizontalCardScroller;

export const HorizontalCard: React.FC<ICellData> = ({
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

      {/* Image part */}
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
