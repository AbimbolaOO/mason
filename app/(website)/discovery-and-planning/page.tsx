import React from 'react';

import Hero from './Hero/Hero';
import MasonPremiumBenefits from './MasonPremiumBenefits/MasonPremiumBenefits';
import OurProcess from './OurProcess/OurProcess';
import WeCreateSystems from './WeCreateSystems/WeCreateSystems';

const Page = () => {
  return (
    <div className='flex flex-col'>
      <Hero />
      <OurProcess />
      <MasonPremiumBenefits />
      <WeCreateSystems />
    </div>
  );
};

export default Page;
