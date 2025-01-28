import Image from 'next/image';
import React from 'react';

import MissionCard from '@/components/Cards/MissionCard/MissionCard';

const GlobalPresence = () => {
  return (
    <div>
      {/* Globe section */}
      <div className='grid pl-20 py-[175px] pr-[120px] bg-white grid-cols-2 gap-[82px]'>
        <div className='text-6xl leading-[100px] font-adventPro self-center font-semibold'>
          We are creating global products that solve complex problems
        </div>
        {/* <div>LOL</div> */}
        <div className='relative border border-red-600 w-[600px] h-[600px]'>
          <Image
            src='/static/svg/globe.svg'
            alt='paper strip'
            fill
            // width={600}
            // height={600}
            priority
            className='object-cover object-center'
          />
        </div>
      </div>

      {/* Cards section */}
      <div className='grid *:col-start-1 *:row-start-1'>
        <div className='relative h-full'>
          <Image
            src='/static/svg/mission.svg'
            alt='paper strip'
            fill
            priority
            className='object-cover object-center'
          />
        </div>
        {/* foreground */}
        <div className='z-10 flex justify-between p-20'>
          <MissionCard
            description='To create impactful products that solve problems from the point of
        concept validation through launch.'
            title='The Mason Atlantic Vision'
          />
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
