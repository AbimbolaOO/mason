'use client';
import gsap from 'gsap';
import React, { useRef } from 'react';

import ExecutionIcon from '@/components/Icons/ExecutionIcon';
import PlanningIcon from '@/components/Icons/PlanningIcon';
import SpeedIcon from '@/components/Icons/SpeedIcon';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap
        .timeline({ repeat: -1 })
        .set('.top-text', { opacity: 0 })
        .to('.top-text', { y: -90, stagger: 3, opacity: 1, duration: 1 })
        .to('.top-text', { y: 0, stagger: 3, duration: 1, opacity: 0 }, '2');

      gsap
        .timeline({ repeat: -1 })
        .set('.bottom-text', { opacity: 0 })
        .to('.bottom-text', { y: 75, stagger: 3, opacity: 1, duration: 1 })
        .to('.bottom-text', { y: 0, stagger: 3, duration: 1, opacity: 0 }, '2');

      gsap
        .timeline({ repeat: -1 })
        .to('.planning', {
          x: -200,
          y: -30,
          ease: 'sine.out',
          duration: 3,
          delay: 1,
        })
        .to(
          '.planning',
          {
            x: 0,
            y: 0,
            ease: 'sine.out',
            duration: 2,
          },
          '>1'
        );

      gsap
        .timeline({ repeat: -1 })
        .to(
          '.execution',
          {
            x: -200,
            y: 100,
            ease: 'sine.out',
            duration: 2,
            delay: 1,
          },
          0.5
        )
        .to(
          '.execution',
          {
            x: 0,
            y: 0,
            ease: 'sine.out',
            duration: 2,
          },
          '>1'
        );

      gsap
        .timeline({ repeat: -1 })
        .to('.speed', {
          x: 200,
          y: 90,
          ease: 'sine.out',
          duration: 2,
          delay: 1,
        })
        .to(
          '.speed',
          {
            x: 0,
            y: 0,
            ease: 'sine.out',
            duration: 2,
          },
          '>1'
        );
    },
    { scope: container }
  );

  return (
    <div
      ref={container}
      className='border  border-red-600 h-screen-minus-header bg-mason-black grid place-content-center relative'
    >
      <div className='planning absolute top-[-64px] left-[580px]'>
        <PlanningIcon />
      </div>
      <div className='execution absolute bottom-[30px] right-[60px]'>
        <ExecutionIcon />
      </div>
      <div className='speed absolute bottom-[40px] left-0'>
        <SpeedIcon />
      </div>

      {/* Actual Content */}
      <div className='text-white text-[100px] leading-[100px] text-center grid w-[100vw] gap-8'>
        <div className='h-[120px] w-full relative overflow-hidden text-center'>
          <div className='top-text absolute top-[100px] w-[1044px] left-[calc(50%-522px)]'>
            Powering Enterprises.
          </div>
          <div className='top-text absolute top-[100px] w-[100vw]'>
            Making Simple, the Complex.
          </div>
          <div className='top-text absolute top-[100px] w-[1044px] left-[calc(50%-522px)]'>
            Software Engineering.
          </div>
        </div>
        <div className='h-[120px] w-full relative overflow-hidden'>
          <div className='bottom-text text-mason-grey bottom-[100px] absolute w-[1044px] left-[calc(50%-522px)]'>
            Inspiring People.
          </div>
          <div className='bottom-text text-mason-grey bottom-[100px] absolute w-[1044px] left-[calc(50%-522px)]'>
            One Code At a Time.
          </div>
          <div className='bottom-text text-mason-grey bottom-[100px] absolute w-[100vw]'>
            Now Smoother Than Ever.
          </div>
        </div>
      </div>
    </div>
  );
}
