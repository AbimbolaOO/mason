import React from 'react';

import BoldOneLineText from '@/components/Cards/BoldOneLineText/BoldOneLineText';
import VerticalCard from '@/components/Cards/VerticalCard/VerticalCard';

const OurDesignProcess = () => {
  return (
    <div className='bg-mason-black h-fit gap-20 max-md:gap-[50px] flex flex-col px-20 max-md:px-4 pb-[140px]'>
      <BoldOneLineText label='Our Design Process' />
      <div className='grid grid-cols-2 gap-20 max-md:grid-cols-1 max-md:gap-10'>
        <VerticalCard
          className='bg-[#F8D9D9]'
          title={
            <span>
              Design Systems <br /> on Figma
            </span>
          }
          description='Our in-depth research techniques are founded on business branding and its holistic goals in creating reusable UI component libraries for style guide consistency in ensuring faster design output and uniformity across client projects.'
        />
        <VerticalCard
          className='bg-mason-purple text-white'
          title={
            <span>
              Creative Design <br />
              Solutions
            </span>
          }
          description='We think out of the box and love to engage creatively with business solutions that cater to people ensuring seamless user experiences, simple yet elegant user interfaces with a strong focus on conceptualized solutions which are refined until client satisfaction.'
        />
      </div>
    </div>
  );
};

export default OurDesignProcess;
