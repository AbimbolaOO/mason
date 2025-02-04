import React from 'react';

import HeroTextCard from '@/components/Cards/HeroTextCard/HeroTextCard';

const Hero = () => {
  return (
    <div className='bg-red-500 h-[calc(100vh-89px)] max-md:h-screen text-white grid place-content-center'>
      <HeroTextCard
        topText='We design intuitive digital experiences with'
        bottomText='prototypes, offering solutions for all businesses.'
        footText='We develop IT strategies and design systems that align with your goals.'
      />
    </div>
  );
};

export default Hero;
