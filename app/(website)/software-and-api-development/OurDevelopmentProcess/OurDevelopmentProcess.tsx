import React from 'react';

import BoldOneLineText from '@/components/Cards/BoldOneLineText/BoldOneLineText';
import VerticalCard from '@/components/Cards/VerticalCard/VerticalCard';

const OurDevelopmentProcess = () => {
  return (
    <div className='bg-mason-black h-fit gap-20 max-md:gap-[50px] flex flex-col px-20 max-md:px-4 pb-[140px]'>
      <BoldOneLineText label='Our Development Process' />
      <div className='grid grid-cols-2 gap-20 max-md:grid-cols-1 max-md:gap-10'>
        <VerticalCard
          className='bg-mason-dark-purple text-white'
          title={
            <span>
              Development <br />& Coding{' '}
            </span>
          }
          description='We prioritize clean, efficient code and maintain transparent communication by providing consistent updates and feedback. Additionally, we utilize agile planning methodologies to optimize development timelines and ensure timely delivery.'
        />
        <VerticalCard
          className='bg-white text-mason-black'
          title='Quality Assurance & Testing'
          description={`At this stage, the teams primary focus is ensuring the system operates as intended consistently. We conduct thorough system and integration testing, perform user acceptance testing (UAT), and verify that performance, security, and scalability standards are met.`}
        />
      </div>
    </div>
  );
};

export default OurDevelopmentProcess;
