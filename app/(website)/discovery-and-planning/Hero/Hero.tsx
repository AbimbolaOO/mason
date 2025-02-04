import React from 'react';

import HeroTextCard from '@/components/Cards/HeroTextCard/HeroTextCard';

const Hero = () => {
  return (
    <div className='bg-red-500 h-[calc(100vh-89px)] max-md:h-screen text-white grid place-content-center'>
      <HeroTextCard
        topText='Validate concepts and create tailored execution'
        bottomText='plans aligned with your goals.'
        footText='We analyze your business, challenges, and IT landscape to craft tailored solutions.'
      />
    </div>
  );
};

export default Hero;
