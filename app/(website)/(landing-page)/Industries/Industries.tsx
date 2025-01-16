import React from 'react';

import TitleCard from '@/components/Cards/TitleCard/TitleCard';
import HorizontalCardScroller from '@/components/ScrollView/HorizontalCardScroller';

import { IndustriesData } from './IndustriesData';

export default function Industries() {
  return (
    // <div className='border border-yellow-300 flex flex-col'>
    <div className='h-screen-minus-header flex flex-col justify-between'>
      {/* Title */}
      <div className='pl-20 -mb-16'>
        <TitleCard
          title='Industries'
          description='Key Industries we expertly serve'
        />
      </div>

      {/* Scroll view */}
      <HorizontalCardScroller cellData={IndustriesData} />
    </div>
  );
}
