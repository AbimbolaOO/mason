'use client';
import clsx from 'clsx';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React, { useRef } from 'react';

import ExecutionIcon from '@/components/Icons/ExecutionIcon';
import PlanningIcon from '@/components/Icons/PlanningIcon';
import SpeedIcon from '@/components/Icons/SpeedIcon';
import { useAppSelector } from '@/redux/store';
import { useGSAP } from '@gsap/react';

import ContactEmail from './ContactEmail';
import VerticalSlideContactView from './VerticalSlideContactView';
import WhatWeDoForm from './WhatWeDoForm';

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const ContactForm = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { slideIndex } = useAppSelector((state) => state.contactData);

  useGSAP(
    () => {
      const scatterIcons = gsap
        .timeline()
        .set('.show-icon', { autoAlpha: 1 })
        .to('.hand-icon', { yPercent: -60 })
        .to(
          '.hi-icon',
          {
            yPercent: 0,
            xPercent: -100,
          },
          '0'
        )
        .to(
          '.what-icon',
          {
            yPercent: () => (slideIndex > 0 ? 28 : 20),
            xPercent: 100,
          },
          '0'
        );

      ScrollTrigger.create({
        trigger: containerRef.current,
        start: 'top 20%',
        animation: scatterIcons,
        // markers: true,
        invalidateOnRefresh: true,
      });
    },
    { scope: containerRef, dependencies: [slideIndex] }
  );

  return (
    // <div ref={containerRef} className='grid *:col-start-1 *:row-start-1'>
    <div
      ref={containerRef}
      className='relative bg-mason-black w-full max-md:h-screen'
    >
      <div
        className={clsx(
          'show-icon hand-icon absolute bottom-[calc(50%-200px)] left-[calc(50%-200px)] h-fit invisible opacity-0 z-0',
          slideIndex > 2 ? 'hidden' : 'block'
        )}
      >
        <PlanningIcon />
      </div>
      <div
        className={clsx(
          `show-icon hi-icon absolute bottom-[calc(50%-200px)] left-[calc(50%-200px)] h-fit invisible opacity-0 z-0`,
          slideIndex >= 1 ? 'hidden' : 'block'
        )}
      >
        <ExecutionIcon />
      </div>
      <div
        className={clsx(
          'show-icon what-icon absolute bottom-[calc(50%-200px)] left-[calc(50%-200px)] h-fit invisible opacity-0 z-0',
          slideIndex > 2 ? 'hidden' : 'block'
        )}
      >
        <SpeedIcon />
      </div>
      {/* </div> */}

      {/* Foreground */}
      {/* <div className='h-fit flex'> */}
      {slideIndex === 0 && <ContactEmail />}
      {(slideIndex === 1 || slideIndex === 2) && <VerticalSlideContactView />}
      {slideIndex === 3 && <WhatWeDoForm />}
      {/* </div> */}
    </div>
  );
};

export default ContactForm;

// slideIndex === 1 || slideIndex === 2 ? 'hidden' : 'block'
