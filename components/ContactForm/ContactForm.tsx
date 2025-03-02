'use client';
import clsx from 'clsx';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React, { useRef } from 'react';

import { useAppSelector } from '@/redux/store';
import { useGSAP } from '@gsap/react';

import HiIcon from '../Icons/HiIcon';
import HiMobileIcon from '../Icons/HiMobileIcon';
import HowCanWeHelpYouIcon from '../Icons/HowCanWeHelpYouIcon';
import HowCanWeHelpYouMobileIcon from '../Icons/HowCanWeHelpYouMobileIcon';
import LetKnowYouBetter from '../Icons/LetKnowYouBetter';
import LetKnowYouBetterMobileIcon from '../Icons/LetKnowYouBetterMobileIcon';
import WhatDoYouNeed from '../Icons/WhatDoYouNeed';
import WhatDoYouNeedMobile from '../Icons/WhatDoYouNeedMobile';
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
      className='relative bg-mason-black w-full max-md:h-screen max-md:w-full max-md:overflow-x-hidden max-md:block'
    >
      <div
        className={clsx(
          'show-icon max-md:hidden hand-icon absolute bottom-[calc(50%-200px)] left-[calc(50%-200px)] h-fit invisible opacity-0 z-0',
          slideIndex > 2 ? 'hidden' : 'block'
        )}
      >
        <HiIcon />
      </div>
      <div
        className={clsx(
          `show-icon max-md:hidden hi-icon absolute bottom-[calc(50%-200px)] left-[calc(50%-200px)] h-fit invisible opacity-0 z-0`,
          slideIndex >= 1 ? 'hidden' : 'block'
        )}
      >
        <HowCanWeHelpYouIcon />
      </div>
      <div
        className={clsx(
          'show-icon max-md:hidden what-icon absolute bottom-[calc(50%-200px)] left-[calc(50%-200px)] h-fit invisible opacity-0 z-0',
          slideIndex === 1 ? 'hidden' : 'block'
        )}
      >
        <WhatDoYouNeed />
      </div>

      <div
        className={clsx(
          'show-icon max-md:hidden what-icon absolute bottom-[calc(40%-200px)] left-[calc(50%-200px)] h-fit invisible opacity-0 z-0',
          slideIndex !== 1 ? 'hidden' : 'block'
        )}
      >
        <LetKnowYouBetter />
      </div>

      {/* <Mobile> */}
      <div
        className={clsx(
          'show-icon md:hidden hand-icon absolute bottom-[calc(60%-200px)] left-[calc(70%-200px)] h-fit invisible opacity-0 z-0',
          slideIndex > 2 ? 'hidden' : 'block'
        )}
      >
        <HiMobileIcon />
      </div>
      <div
        className={clsx(
          `show-icon md:hidden hi-icon absolute top-[calc(100%-300px)] left-[calc(0%+210px)] h-fit invisible opacity-0 z-0`,
          slideIndex >= 1 ? 'hidden' : 'block'
        )}
      >
        <HowCanWeHelpYouMobileIcon />
      </div>
      <div
        className={clsx(
          'show-icon md:hidden what-icon absolute bottom-[calc(50%-200px)] right-[calc(200px)] h-fit invisible opacity-0 z-0',
          slideIndex === 1 ? 'hidden' : 'block'
        )}
      >
        <WhatDoYouNeedMobile />
      </div>

      <div
        className={clsx(
          'show-icon md:hidden what-icon absolute bottom-[calc(40%-200px)] right-[calc(50%+100px)] h-fit invisible opacity-0 z-0',
          slideIndex !== 1 ? 'hidden' : 'block'
        )}
      >
        <LetKnowYouBetterMobileIcon />
      </div>

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
