'use client';
import gsap from 'gsap';
import Image from 'next/image';
import React from 'react';

import ReachOutToUs from '@/components/Cards/ReachOutToUs/ReachOutToUs';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);
const ReachOutToUsContent = () => {
  return (
    <div className='flex flex-col'>
      <div className='z-20 h-[140px] w-full relative grid place-content-center  -my-[70px]'>
        <Image
          src='/static/img/bottom-paper-strip.png'
          alt='paper strip'
          fill
          priority
          className='object-cover object-center'
        />
      </div>
      <ReachOutToUs />
    </div>
  );
};

export default ReachOutToUsContent;
