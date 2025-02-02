import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import HeaderDropDown from './HeaderDropDown';

const SolutionsDropdown = () => {
  return (
    <HeaderDropDown label='Solutions'>
      <Solutions />
    </HeaderDropDown>
  );
};

export default SolutionsDropdown;

const Solutions = () => {
  return (
    <div className='grid grid-cols-[34%_66%] w-full rounded-[24px] overflow-hidden'>
      {/* LEFT */}
      <div className='p-9 text-mason-black text-xl leading-[23.64px] flex flex-col gap-5 bg-white'>
        <div className='flex gap-3 cursor-default'>
          Consultancy{' '}
          <div className='text-[12px] leading-5 text-mason-badge-txt bg-mason-badge-bg flex items-center justify-center bg-[rgba(0, 183, 63, 0.1)] px-3 py-1 rounded-[8px]'>
            Free
          </div>
        </div>
        <Link href={'discovery-and-planning'}>Discovery and Planning</Link>
        <Link href={'design-and-prototyping'}>Design and Prototyping</Link>
        <Link href={'software-and-api-development'}>
          Software and API Development
        </Link>
      </div>

      {/* RIGHT */}
      <div className='w-full h-full grid *:col-start-1 *:row-start-1 bg-black'>
        <div className='relative w-full bg-primary'>
          <Image
            src='/static/img/solution-bg-left.png'
            alt='background image'
            fill
            priority
            className='object-left-bottom object-contain'
          />

          <Image
            src='/static/img/solution-bg-right.png'
            alt='background image'
            fill
            // priority
            // width={200}
            // height={400}
            className='object-right-bottom object-contain'
          />
        </div>

        <div className='z-10 flex flex-col text-white items-center justify-center'>
          <div className='text-xl leading-[23.85px]'>
            Cant find what youre looking for?
          </div>
          <div className='font-medium text-[57.66px] leading-[86.49px]'>
            Reach Out to Us!
          </div>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
};
