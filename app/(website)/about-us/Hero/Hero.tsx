import Image from 'next/image';
import React from 'react';

const Hero = () => {
  return (
    <div className='h-screen-minus-header bg-mason-black flex flex-col justify-center gap-[28px]'>
      <div className='flex flex-col font-adventPro font-semibold text-6xl leading-[100px] text-white self-center text-center'>
        <div>Building and Shipping.</div>
        <div> It’s What We Do.</div>
      </div>
      <div className='relative h-[calc(40vh)]'>
        <Image
          src='/static/svg/about-us-strip.svg'
          alt='paper strip'
          fill
          priority
          className='object-cover object-center'
        />
      </div>
    </div>
  );
};

export default Hero;
