import React from 'react';

import HeroTextCard from '@/components/Cards/HeroTextCard/HeroTextCard';

const WeCreateSystems = () => {
  return (
    <div className='bg-mason-black h-[calc(100vh-89px)] text-white grid place-content-center'>
      <HeroTextCard
        topText='We create systems that showcase concepts with'
        bottomText='professional visuals through iteration.'
        footText='We simplify complex designs to deliver fast results.'
      />
    </div>
  );
};

export default WeCreateSystems;
