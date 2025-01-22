import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import ArrowDownIcon from '@/components/Icons/ArrowDownIcon';

const ReachOutToUs = () => {
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
      <div className='z-10 border border-red-600 h-[100vh]'>
        {/* paper bottom */}
        <div className='h-[140px] relative border border-red-700 grid place-content-center -mt-[70px]'>
          <Image
            src='/static/img/bottom-paper-strip.png'
            alt='paper strip'
            fill
            priority
            className='object-cover object-center'
          />
        </div>

        {/* main content */}
        <div className='w-full h-full border border-purple-700 grid place-content-center gap-[177px]'>
          <div className='flex justify-center items-center flex-col border border-red-500'>
            <div className='text-[35px] leading-[41px] text-white'>
              Ready to bring your projects to life?
            </div>
            <div className='font-medium font-adventPro text-[100px] leading-[150px] text-white'>
              <Link href='contact-us'>Reach Out to Us!</Link>
              <div className='h-2 w-full origin-left bg-white rounded-full -mt-6'></div>
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
