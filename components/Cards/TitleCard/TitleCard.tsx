import React from 'react';

interface TitleCardProps {
  title: string;
  description: string;
}

const TitleCard: React.FC<TitleCardProps> = ({ title, description }) => {
  return (
    <div className='flex flex-col'>
      <div className='font-adventPro font-medium text-[100px] leading-[119.6px]'>
        {title}
      </div>
      <div className='text-[35px] leading-[50px]'>{description}</div>
    </div>
  );
};

export default TitleCard;
