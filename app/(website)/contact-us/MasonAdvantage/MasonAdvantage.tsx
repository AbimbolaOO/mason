import React from 'react';

import BoldOneLineText from '@/components/Cards/BoldOneLineText/BoldOneLineText';
import VerticalIconCard from '@/components/Cards/VerticalIconCard/VerticalIconCard';
import LighteningIcon from '@/components/Icons/LighteningIcon';
import MedalIcon from '@/components/Icons/MedalIcon';
import RadarIcon from '@/components/Icons/RadarIcon';
import SliderIcon from '@/components/Icons/SliderIcon';

const MasonAdvantage = () => {
  return (
    <div className='flex flex-col bg-mason-black h-[calc(100vh-89px)] max-md:h-fit gap-[100px] max-md:gap-[32px] px-20'>
      <BoldOneLineText label='The Mason Advantage' />
      <div className='grid grid-cols-4 gap-[10px] max-md:grid-cols-1 max-md:gap-8'>
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
