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
    <div className='flex flex-col gap-12 items-center'>
      <div className='max-md:text-[30px] text-6xl max-md:leading-[50px] leading-[100px] flex flex-col items-center justify-center h-fit text-white font-semibold font-adventPro text-center'>
        <div>{topText}</div>
        <div>{bottomText}</div>
      </div>
      <div className='text-[25px] max-md:text-[18px] leading-10 max-md:leading-[28px] text-center'>
        {footText}
      </div>
    </div>
  );
};

export default HeroTextCard;
