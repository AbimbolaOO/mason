import React from 'react';

interface MissionCardProps {
  description: string;
  title: string;
}

const MissionCard: React.FC<MissionCardProps> = ({ description, title }) => {
  return (
    <div className='flex flex-col text-3xl leading-[48px] gap-[70px] w-[520px] px-6 py-4 max-md:px-0 max-md:w-full'>
      <div className='text-mason-grey max-md:text-[20px] max-md:leading-[32px]'>
        {description}
      </div>
      <div className='text-mason-red max-md:text-[30px] max-md:leading-[39px]'>
        {title}
      </div>
    </div>
  );
};

export default MissionCard;
