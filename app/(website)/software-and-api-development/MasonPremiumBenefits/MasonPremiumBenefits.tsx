import React from 'react';

import BoldOneLineText from '@/components/Cards/BoldOneLineText/BoldOneLineText';
import VerticalIconCard from '@/components/Cards/VerticalIconCard/VerticalIconCard';
import AwardStandIcon from '@/components/Icons/AwardStandIcon';
import BadgeIcon from '@/components/Icons/BadgeIcon';
import MessageIcon from '@/components/Icons/MessageIcon';
import SuperLightenIcon from '@/components/Icons/SuperLightenIcon';

const MasonPremiumBenefits = () => {
  return (
    <div className='flex flex-col bg-mason-black h-[calc(100vh-89px)] gap-[100px] px-20'>
      <BoldOneLineText label={`Mason's Premium Benefits`} />
      <div className='grid grid-cols-4 gap-[10px]'>
        <VerticalIconCard
          icon={<SuperLightenIcon />}
          description='Faster time to market'
        />
        <VerticalIconCard
          icon={<BadgeIcon />}
          description={
            <div>
              Seasoned product <br />
              consultants
            </div>
          }
        />
        <VerticalIconCard
          icon={<AwardStandIcon />}
          description='Scalability for growth'
        />
        <VerticalIconCard
          icon={<MessageIcon />}
          description={
            <div>
              Post-launch support and <br />
              maintenance
            </div>
          }
        />
      </div>
    </div>
  );
};

export default MasonPremiumBenefits;
