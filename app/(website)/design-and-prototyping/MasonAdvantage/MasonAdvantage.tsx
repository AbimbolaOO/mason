import React from 'react';

import BoldOneLineText from '@/components/Cards/BoldOneLineText/BoldOneLineText';
import VerticalIconCard from '@/components/Cards/VerticalIconCard/VerticalIconCard';
import LighteningIcon from '@/components/Icons/LighteningIcon';
import MedalIcon from '@/components/Icons/MedalIcon';
import RadarIcon from '@/components/Icons/RadarIcon';
import SliderIcon from '@/components/Icons/SliderIcon';

const MasonAdvantage = () => {
  return (
    <div className='flex flex-col bg-mason-black h-[calc(100vh-89px)] gap-[100px] px-20'>
      <BoldOneLineText label='The Mason Advantage' />
      <div className='grid grid-cols-4 gap-[10px]'>
        <VerticalIconCard
          icon={<LighteningIcon />}
          description='Flexible solutions & rapid prototyping for testing'
        />
        <VerticalIconCard
          icon={<MedalIcon />}
          description={
            <div>
              Seasoned product <br />
              designers
            </div>
          }
        />
        <VerticalIconCard
          icon={<SliderIcon />}
          description='Robust UX channels and application designs'
        />
        <VerticalIconCard
          icon={<RadarIcon />}
          description='Continued iterations and support post-launch'
        />
      </div>
    </div>
  );
};

export default MasonAdvantage;
