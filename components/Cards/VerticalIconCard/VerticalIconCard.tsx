import React from 'react';

interface VerticalIconCardProps {
  icon: React.ReactNode;
  description: React.ReactNode;
}

const VerticalIconCard: React.FC<VerticalIconCardProps> = ({
  icon,
  description,
}) => {
  return (
    <div className='flex flex-col items-center'>
      <div className='bg-mason-icon-bg p-[25px] rounded-[16.67px]'>{icon}</div>
      <div className='text-center text-[23px] leading-[41px] max-md:text-[18px] max-md:leading-[32px] text-white py-3'>
        {description}
      </div>
    </div>
  );
};

export default VerticalIconCard;
