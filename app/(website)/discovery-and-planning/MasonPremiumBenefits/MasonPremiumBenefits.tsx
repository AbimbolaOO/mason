import React from 'react';

import BoldOneLineText from '@/components/Cards/BoldOneLineText/BoldOneLineText';
import VerticalIconCard from '@/components/Cards/VerticalIconCard/VerticalIconCard';
import BadgeIcon from '@/components/Icons/BadgeIcon';
import CheckListIcon from '@/components/Icons/CheckListIcon';
import MessageIcon from '@/components/Icons/MessageIcon';
import WandIcon from '@/components/Icons/WandIcon';

const MasonPremiumBenefits = () => {
  return (
    <div className='flex flex-col bg-mason-black h-[calc(100vh-89px)] max-md:h-fit gap-[100px] max-md:gap-[32px] px-20'>
      <BoldOneLineText label={`Mason's Premium Benefits`} />
      <div className='grid grid-cols-4 gap-[10px] max-md:grid-cols-1 max-md:gap-8'>
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
