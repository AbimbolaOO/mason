import Image from 'next/image';
import React from 'react';

import InfiniteScrollerText from '@/components/Cards/InfiniteScrollerText/InfiniteScrollerText';
import InfiniteScroller from '@/components/InfiniteScroller/InfiniteScroller';

const scrollingText = [
  {
    key: 'Project Management',
    icon: <InfiniteScrollerText label='Project Management' />,
    // icon: <EthiopianHeaderIcon />,
  },
  {
    key: 'Prototyping and Design',
    icon: <InfiniteScrollerText label='Prototyping and Design' />,
    // icon: <EthiopianHeaderIcon />,
  },
  {
    key: 'Quality Testing',
    icon: <InfiniteScrollerText label='Quality Testing' />,
    // icon: <EthiopianHeaderIcon />,
  },
];

const Hero = () => {
  return (
    <div className='h-screen-minus-header max-md:h-screen bg-mason-black flex flex-col justify-center gap-[28px] max-md:gap-10'>
      <div className='flex flex-col font-adventPro font-semibold text-6xl max-md:text-[30px] leading-[100px] max-md:leading-[50px] text-white self-center text-center'>
        <div>Building and Shipping.</div>
        <div> It’s What We Do.</div>
      </div>
      <div className='grid *:col-start-1 *:row-start-1'>
        <div className='relative h-[calc(40vh)] max-md:h-[175px]'>
          <Image
            src='/static/svg/about-us-strip.svg'
            alt='paper strip'
            fill
            priority
            className='object-cover object-center'
          />
        </div>
        <div className='z-10 flex flex-col justify-center overflow-hidden'>
          <div>
            <InfiniteScroller iconData={scrollingText} />
            <InfiniteScroller iconData={scrollingText} reverse />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
