import React from 'react';

import TitleCard from '@/components/Cards/TitleCard/TitleCard';
import HorizontalCardScroller from '@/components/ScrollView/HorizontalCardScroller';
import HorizontalMobileCardScroller from '@/components/ScrollView/HorizontalMobileCardScroller';

import { IndustriesData } from './IndustriesData';

export default function Industries() {
  return (
    <div className='h-screen-minus-header max-md:h-fit max-md:mb-[80px] flex flex-col md:justify-between max-md:gap-8'>
      {/* Title */}
      <div className='pl-20 max-md:pl-4 -mb-16 max-md:mb-0'>
        <TitleCard
          title='Industries'
          description='Key Industries we expertly serve'
        />
      </div>

      {/* Scroll view */}
      <HorizontalCardScroller cellData={IndustriesData} />
      <HorizontalMobileCardScroller cellData={IndustriesData} />
    </div>
  );
}
