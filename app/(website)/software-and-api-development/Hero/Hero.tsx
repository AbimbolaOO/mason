import React from 'react';

import HeroTextCard from '@/components/Cards/HeroTextCard/HeroTextCard';

const Hero = () => {
  return (
    <div className='bg-red-500 h-[calc(100vh-89px)] max-md:h-screen text-white grid place-content-center'>
      <HeroTextCard
        topText='Building scalable software solutions and'
        bottomText='powerful APIs to drive growth.'
        footText='We build custom, high-performance systems for seamless integration and innovation.'
      />
    </div>
  );
};

export default Hero;
