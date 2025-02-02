import React from 'react';

import Hero from './Hero/Hero';
import MasonAdvantage from './MasonAdvantage/MasonAdvantage';
import MasonBuildsScalableSoftware from './MasonBuildsScalableSoftware/MasonBuildsScalableSoftware';
import OurDesignProcess from './OurDesignProcess/OurDesignProcess';

const Page = () => {
  return (
    <div className='flex flex-col'>
      <Hero />
      <OurDesignProcess />
      <MasonAdvantage />
      <MasonBuildsScalableSoftware />
    </div>
  );
};

export default Page;
