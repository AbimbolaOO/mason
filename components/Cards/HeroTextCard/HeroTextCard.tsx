import React from 'react';

interface HeroTextCardProps {
  topText: string;
  bottomText: string;
  footText: string;
}

const HeroTextCard: React.FC<HeroTextCardProps> = ({
  topText,
  bottomText,
  footText,
}) => {
  return (
    <div className='flex flex-col gap-12 items-center border'>
      <div className='text-6xl leading-[100px] flex flex-col items-center justify-center h-fit text-white font-semibold font-adventPro text-center'>
        <div>{topText}</div>
        <div>{bottomText}</div>
      </div>
      <div className='text-[25px] leading-10'>{footText}</div>
    </div>
  );
};

export default HeroTextCard;
