import React from 'react';

import Hero from './Hero/Hero';
import MasonPremiumBenefits from './MasonPremiumBenefits/MasonPremiumBenefits';
import OurDevelopmentProcess from './OurDevelopmentProcess/OurDevelopmentProcess';
import WeLeverageTechnology from './WeLeverageTechnology/WeLeverageTechnology';

const Page = () => {
  return (
    <div className='flex flex-col'>
      <Hero />
      <OurDevelopmentProcess />
      <MasonPremiumBenefits />
      <WeLeverageTechnology />
    </div>
  );
};

export default Page;
