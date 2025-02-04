import Image from 'next/image';
import React from 'react';

import MissionCard from '@/components/Cards/MissionCard/MissionCard';

const GlobalPresence = () => {
  return (
    <div>
      {/* Globe section */}
      <div className='grid pl-20 py-[175px] pr-[120px] max-md:p-8 bg-white grid-cols-2 gap-[82px] max-md:gap-6 max-md:flex-col-reverse max-md:flex'>
        <div className='text-6xl leading-[100px] max-md:text-[30px] max-md:leading-[50px] font-adventPro self-center font-semibold'>
          We are creating global products that solve complex problems
        </div>

        <div className='relative border border-red-600 w-[600px] h-[600px] max-md:h-auto max-md:w-auto'>
          <Image
            src='/static/img/globe.png'
            alt='globe'
            width={600}
            height={600}
            priority
            className='object-contain'
          />
        </div>
      </div>

      {/* Cards section */}
      <div className='grid *:col-start-1 *:row-start-1 max-md:bg-mason-bg-gradient'>
        <div className='relative h-full max-md:hidden'>
          <Image
            src='/static/svg/mission.svg'
            alt='paper strip'
            fill
            priority
            className='object-cover object-center'
          />
        </div>
        {/* foreground */}
        <div className='z-10 flex justify-between p-20 max-md:p-4 max-md:flex max-md:flex-col max-md:items-center max-md:gap-10'>
          <MissionCard
            description='To create impactful products that solve problems from the point of
        concept validation through launch.'
            title='The Mason Atlantic Vision'
          />
          <div className='w-full bg-[#D9D9D9] h-[1px] md:hidden'></div>
          <MissionCard
            description='To be a leading force in shaping the future by delivering solutions that drive progress and enhance lives worldwide.'
            title='The Mason Atlantic Mission'
          />
        </div>
      </div>
    </div>
  );
};

export default GlobalPresence;
