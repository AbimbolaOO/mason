import React from 'react';

import BoldOneLineText from '@/components/Cards/BoldOneLineText/BoldOneLineText';
import VerticalCard from '@/components/Cards/VerticalCard/VerticalCard';

const OurProcess = () => {
  return (
    <div className='bg-cyan-500 h-fit gap-20 flex flex-col px-20 pb-[140px]'>
      <BoldOneLineText label='Our Process' />
      <div className='grid grid-cols-2 gap-20'>
        <VerticalCard
          showFooter
          link='/'
          className='bg-[#241111] text-white'
          title='FREE Consultation'
          description={`Begin with a complimentary consultation where our team reviews your business idea, ensuring alignment with your vision. We'll define the project scope and finalize key details for execution.`}
        />
        <VerticalCard
          className='bg-[#2B2C2D] text-white'
          title='Concept Planning &&nbsp;Validation'
          description={`The team collaborates to develop and document solutions, ensuring clarity for future teams. We establish channels for brainstorming, assumption mapping, validation, and timeline reviews before finalizing project agreements.`}
        />
      </div>
    </div>
  );
};

export default OurProcess;
