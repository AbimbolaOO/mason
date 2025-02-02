import React from 'react';

import BoldOneLineText from '@/components/Cards/BoldOneLineText/BoldOneLineText';
import VerticalIconCard from '@/components/Cards/VerticalIconCard/VerticalIconCard';
import BadgeIcon from '@/components/Icons/BadgeIcon';
import CheckListIcon from '@/components/Icons/CheckListIcon';
import MessageIcon from '@/components/Icons/MessageIcon';
import WandIcon from '@/components/Icons/WandIcon';

const MasonPremiumBenefits = () => {
  return (
    <div className='flex flex-col bg-mason-black h-[calc(100vh-89px)] gap-[100px] px-20'>
      <BoldOneLineText label={`Mason's Premium Benefits`} />
      <div className='grid grid-cols-4 gap-[10px]'>
        <VerticalIconCard
          icon={<CheckListIcon />}
          description={
            <div>
              Strong outline of business
              <br />
              requirements
            </div>
          }
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
          icon={<WandIcon />}
          description={
            <div>
              Project conceptualization
              <br />& resource planning
            </div>
          }
        />
        <VerticalIconCard
          icon={<MessageIcon />}
          description={
            <div>
              Dedicated support post- <br />
              launch
            </div>
          }
        />
      </div>
    </div>
  );
};

export default MasonPremiumBenefits;
