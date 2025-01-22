import React from 'react';

interface MissionCardProps {
  description: string;
  title: string;
}

const MissionCard: React.FC<MissionCardProps> = ({ description, title }) => {
  return (
    <div className='flex flex-col text-3xl leading-[48px] gap-[70px] w-[520px] px-6 py-4'>
      <div className='text-mason-grey'>{description}</div>
      <div className='text-mason-red '>{title}</div>
    </div>
  );
};

export default MissionCard;
