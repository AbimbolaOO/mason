'use client';
import clsx from 'clsx';
import gsap from 'gsap';
import Image from 'next/image';
import Link from 'next/link';
import React, { useRef, useState } from 'react';

import Footer from '@/components/Footer/Footer';
import ArrowDownIcon from '@/components/Icons/ArrowDownIcon';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

const ReachOutToUs = () => {
  const container = useRef<HTMLDivElement>(null);
  const hoverContainer = useRef<HTMLDivElement>(null);
  const [showFooter, setShowFooter] = useState(false);

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

  const handleScrollBtnClick = () => {
    setShowFooter(true);
  };

  return (
    <div className='overflow-hidden'>
      <div className='grid h-fit w-full *:col-start-1 *:row-start-1'>
        {/* Foreground */}
        <div className=' w-full relative'>
          <Image
            src='/static/gif/reach-out-bg.gif'
            alt='background image'
            fill
            unoptimized
            className='object-center max-md:object-fill'
          />
        </div>

        {/* Background */}
        <div className='z-10 h-screen-minus-header max-md:h-[calc(100vh-60px)] bg-mason-transparency-layer'>
          {/* main content */}
          <div
            ref={container}
            className='w-full h-full grid place-content-center gap-[177px] max-md:flex max-md:flex-col'
          >
            <div className='flex justify-center items-center flex-col'>
              <div className='text-[35px] leading-[41px] max-md:text-[18px] max-md:leading-[21.2px] text-white'>
                Ready to bring your projects to life?
              </div>
              {/* 00-----000 */}
              <div
                ref={hoverContainer}
                className='font-medium font-adventPro text-[100px] leading-[150px] max-md:text-[45px] max-md:leading-[84px] text-white'
              >
                <Link href='contact-us'>Reach Out to Us!</Link>
                <div className='-mt-6 w-full rounded-full overflow-hidden'>
                  <div className='scaling-line h-2 w-full origin-left bg-white rounded-full invisible opacity-0'></div>
                </div>
              </div>
            </div>

            {/* <Link href={'#footer'}> */}
            <button
              onClick={handleScrollBtnClick}
              className='text-mason-black bg-white rounded-xl text-[15px] leading-[20px] p-[17px] w-fit
              justify-self-center flex gap-2 items-center max-md:self-center max-md:justify-items-stretch'
            >
              <div className='py-2 px-[10px]'>
                <ArrowDownIcon />
              </div>
              Continue to Scroll
              <div className='py-2 px-[10px]'>
                <ArrowDownIcon />
              </div>
            </button>
            {/* </Link> */}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div
        className={clsx(
          'fixed z-50 transition-all duration-300',
          showFooter ? 'top-[calc(0%)]' : 'top-[100%]'
        )}
      >
        <Footer toggleFooterFn={() => setShowFooter(false)} />
      </div>
    </div>
  );
};

export default ReachOutToUs;
