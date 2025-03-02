'use client';
import gsap from 'gsap';
import React, { useRef } from 'react';

import ExecutionIcon from '@/components/Icons/ExecutionIcon';
import ExecutionSmallIcon from '@/components/Icons/ExecutionSmallIcon';
import PlanningIcon from '@/components/Icons/PlanningIcon';
import PlanningSmallIcon from '@/components/Icons/PlanningSmallIcon';
import SpeedIcon from '@/components/Icons/SpeedIcon';
import SpeedSmallIcon from '@/components/Icons/SpeedSmallIcon';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.set('.top-text', { autoAlpha: 1 });
      gsap.set('.bottom-text', { autoAlpha: 1 });
      gsap
        .timeline({ repeat: -1, invalidateOnRefresh: true })
        .set('.top-text', { opacity: 0 })
        .to('.top-text', { y: '-6.5vw', stagger: 3, opacity: 1, duration: 1 })
        .to('.top-text', { y: 0, stagger: 3, duration: 1, opacity: 0 }, '2');

      gsap
        .timeline({ repeat: -1, invalidateOnRefresh: true })
        .set('.bottom-text', { opacity: 0 })
        .to('.bottom-text', { y: '6.5vw', stagger: 3, opacity: 1, duration: 1 })
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
      className='h-screen-minus-header max-md:h-[calc(100vh)] bg-mason-black grid place-content-center relative'
    >
      <div className='max-md:hidden planning absolute top-[-64px] left-[580px]'>
        <PlanningIcon />
      </div>
      <div className='max-md:hidden execution absolute bottom-[30px] right-[60px]'>
        <ExecutionIcon />
      </div>
      <div className='max-md:hidden speed absolute bottom-[40px] left-0'>
        <SpeedIcon />
      </div>

      <div className='md:hidden absolute top-[-5vh] right-[3vw] z-10'>
        <PlanningSmallIcon className='w-[250px]' />
      </div>
      <div className='md:hidden absolute bottom-[10vh] right-[1vw]'>
        <ExecutionSmallIcon className='w-[250px]' />
      </div>
      <div className='md:hidden absolute top-[60vh] left-[0vw]'>
        <SpeedSmallIcon className='w-[250px]' />
      </div>

      {/* Actual Content */}
      <div className='text-white text-[6.5vw] leading-[6.5vw] text-center grid w-[100vw] gap-[2vw]'>
        <div className='h-[120px] w-full relative overflow-hidden text-center'>
          <div className='top-text absolute top-[100px] w-[1044px] left-[calc(50%-522px)] opacity-0 invisible'>
            Powering Enterprises.
          </div>
          <div className='top-text absolute top-[100px] w-[100vw] opacity-0 invisible'>
            Making Simple, the Complex.
          </div>
          <div className='top-text absolute top-[100px] w-[1044px] left-[calc(50%-522px)] opacity-0 invisible'>
            Software Engineering.
          </div>
        </div>
        <div className='h-[120px] w-full relative overflow-hidden'>
          <div className='bottom-text text-mason-grey bottom-[100px] absolute w-[1044px] left-[calc(50%-522px)] opacity-0 invisible'>
            Inspiring People.
          </div>
          <div className='bottom-text text-mason-grey bottom-[100px] absolute w-[1044px] left-[calc(50%-522px)] opacity-0 invisible'>
            One Code At a Time.
          </div>
          <div className='bottom-text text-mason-grey bottom-[100px] absolute w-[100vw] opacity-0 invisible'>
            Now Smoother Than Ever.
          </div>
        </div>
      </div>
    </div>
  );
}
