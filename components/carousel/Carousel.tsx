'use client';
import gsap from 'gsap';
import React, { useRef } from 'react';

import { useGSAP } from '@gsap/react';

import DarumIcon from '../Icons/DarumIcon';
import DwellingIcon from '../Icons/DwellingIcon';
import EthiopianIcon from '../Icons/EthiopianIcon';

gsap.registerPlugin(useGSAP);

const Carousel = () => {
  const container = useRef<HTMLDivElement>(null);
  useGSAP(
    (_, contextSafe) => {
      if (!contextSafe) return;
      const element = document.querySelector('.slide') as HTMLElement;
      const elWidth = element ? element.offsetWidth : 0;

      const slideIn = -elWidth + 3;
      const slideOut = -(elWidth * 2);

      gsap
        .timeline({
          duration: 1,
          repeat: -1,
        })
        .to('.slide', {
          x: slideIn,
          stagger: {
            each: 1,
          },
        })
        .to(
          '.slide',
          {
            x: slideOut,
            opacity: 0,
            stagger: {
              each: 1,
            },
          },
          '2'
        );
    },
    { scope: container }
  );

  return (
    <div
      ref={container}
      className='h-[470px] bg-mason-black rounded-[20px] grid text-white *:col-start-1 *:row-start-1'
    >
      <div className='slide-container text-white w-[100%] my-8 mb-10 grid relative overflow-hidden'>
        <div className='slide w-[calc(50vw-80px)] h-full grid place-content-center absolute -right-[calc(50vw-80px)]'>
          <EthiopianIcon />
        </div>
        <div className='slide w-[calc(50vw-80px)] h-full grid place-content-center absolute -right-[calc(50vw-80px)]'>
          <DwellingIcon />
        </div>
        <div className='slide w-[calc(50vw-80px)] h-full grid place-content-center absolute -right-[calc(50vw-80px)]'>
          <DarumIcon />
        </div>
      </div>

      <div className='w-[100%] h-[5px] grid grid-cols-3 self-end mb-[30px] px-[30px] gap-4'>
        <div className='bg-white rounded-full'></div>
        <div className='bg-white rounded-full'></div>
        <div className='bg-white rounded-full'></div>
      </div>
    </div>
  );
};

export default Carousel;
