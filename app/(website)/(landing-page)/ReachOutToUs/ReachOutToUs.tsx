'use client';
import gsap from 'gsap';
import Image from 'next/image';
import Link from 'next/link';
import React, { useRef } from 'react';

import ArrowDownIcon from '@/components/Icons/ArrowDownIcon';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);
const ReachOutToUs = () => {
  const container = useRef<HTMLDivElement>(null);
  const hoverContainer = useRef<HTMLDivElement>(null);

  useGSAP(
    (_, contextSafe) => {
      let onEnter: () => void;
      let onLeave: () => void;

      gsap.timeline({}).set('.scaling-line', { scaleX: '0' });

      if (contextSafe) {
        onEnter = contextSafe(() => {
          gsap
            .timeline({})
            .set('.scaling-line', { transformOrigin: 'left', autoAlpha: 1 })
            .to('.scaling-line', { scaleX: '100%', ease: 'none' });
        });

        onLeave = contextSafe(() => {
          gsap
            .timeline({})
            .set('.scaling-line', { transformOrigin: 'right' })
            .to('.scaling-line', { scaleX: '0', ease: 'none' });
        });

        hoverContainer.current?.addEventListener('mouseenter', onEnter);
        hoverContainer.current?.addEventListener('mouseleave', onLeave);
      }
      return () => {
        hoverContainer.current?.removeEventListener('mouseenter', onEnter);
        hoverContainer.current?.removeEventListener('mouseleave', onLeave);
      };
    },
    { scope: container }
  );

  return (
    <div className='grid h-fit w-full *:col-start-1 *:row-start-1'>
      {/* Foreground */}
      <div className=' w-full relative'>
        {/* <video
          className='left-0 top-0 h-full w-full object-cover'
          autoPlay
          muted
          loop
        >
          <source src='/static/video/reach-out-bg.mov' type='video/mp4' />
          Your browser does not support the video tag.
        </video> */}
        <Image
          src='/static/gif/reach-out-bg.gif'
          alt='background image'
          fill
          className='object-center'
        />
      </div>

      {/* Background */}
      <div className='z-10 h-[100vh] bg-mason-transparency-layer'>
        {/* paper bottom */}
        <div className='h-[140px] relative grid place-content-center -mt-[70px]'>
          <Image
            src='/static/img/bottom-paper-strip.png'
            alt='paper strip'
            fill
            priority
            className='object-cover object-center'
          />
        </div>

        {/* main content */}
        <div
          ref={container}
          className='w-full h-full grid place-content-center gap-[177px]'
        >
          <div className='flex justify-center items-center flex-col'>
            <div className='text-[35px] leading-[41px] text-white'>
              Ready to bring your projects to life?
            </div>
            {/* 00-----000 */}
            <div
              ref={hoverContainer}
              className='font-medium font-adventPro text-[100px] leading-[150px] text-white'
            >
              <Link href='contact-us'>Reach Out to Us!</Link>
              <div className='-mt-6 w-full rounded-full overflow-hidden'>
                <div className='scaling-line h-2 w-full origin-left bg-white rounded-full invisible opacity-0'></div>
              </div>
            </div>
          </div>

          <button className='text-mason-black bg-white rounded-xl text-[15px] leading-[20px] p-[17px] w-fit justify-self-center flex gap-2 items-center'>
            <div className='py-2 px-[10px]'>
              <ArrowDownIcon />
            </div>
            Continue to Scroll
            <div className='py-2 px-[10px]'>
              <ArrowDownIcon />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReachOutToUs;
