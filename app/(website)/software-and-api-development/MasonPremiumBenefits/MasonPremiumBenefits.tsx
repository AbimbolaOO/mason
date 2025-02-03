import React from 'react';

import BoldOneLineText from '@/components/Cards/BoldOneLineText/BoldOneLineText';
import VerticalIconCard from '@/components/Cards/VerticalIconCard/VerticalIconCard';
import AwardStandIcon from '@/components/Icons/AwardStandIcon';
import BadgeIcon from '@/components/Icons/BadgeIcon';
import MessageIcon from '@/components/Icons/MessageIcon';
import SuperLightenIcon from '@/components/Icons/SuperLightenIcon';

const MasonPremiumBenefits = () => {
  return (
    <div className='flex flex-col bg-mason-black h-[calc(100vh-89px)] gap-[100px] max-md:gap-[32px] px-20 max-md:h-fit'>
      <BoldOneLineText label={`Mason's Premium Benefits`} />
      <div className='grid grid-cols-4 gap-[10px] max-md:grid-cols-1 max-md:gap-8'>
        <VerticalIconCard
          icon={<SuperLightenIcon />}
          description='Faster time to market'
        />
        <VerticalIconCard
          icon={<BadgeIcon />}
          description={
            <span>
              Seasoned product <br />
              consultants
            </span>
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
