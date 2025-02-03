import React from 'react';

import BoldOneLineText from '@/components/Cards/BoldOneLineText/BoldOneLineText';
import VerticalIconCard from '@/components/Cards/VerticalIconCard/VerticalIconCard';
import LighteningIcon from '@/components/Icons/LighteningIcon';
import MedalIcon from '@/components/Icons/MedalIcon';
import RadarIcon from '@/components/Icons/RadarIcon';
import SliderIcon from '@/components/Icons/SliderIcon';

const MasonAdvantage = () => {
  return (
    <div className='flex flex-col bg-mason-black h-[calc(100vh-89px)] gap-[100px] max-md:gap-[32px] px-20 max-md:h-fit'>
      <BoldOneLineText label='The Mason Advantage' />
      <div className='grid grid-cols-4 gap-[10px] max-md:grid-cols-1 max-md:gap-8'>
        <VerticalIconCard
          icon={<LighteningIcon />}
          description={
            <span>
              Flexible solutions & rapid <br className='hidden max-md:block' />
              prototyping for testing
            </span>
          }
        />
        <VerticalIconCard
          icon={<MedalIcon />}
          description={
            <span>
              Seasoned product <br />
              designers
            </span>
          }
        />
        <VerticalIconCard
          icon={<SliderIcon />}
          description={
            <span>
              Robust UX channels and <br className='hidden max-md:block' />
              application designs
            </span>
          }
        />
        <VerticalIconCard
          icon={<RadarIcon />}
          description={
            <span>
              Continued iterations and support
              <br className='hidden max-md:block' /> post-launch
            </span>
          }
        />
      </div>
    </div>
  );
};

export default MasonAdvantage;
