import React from 'react';

import BoldOneLineText from '@/components/Cards/BoldOneLineText/BoldOneLineText';
import VerticalCard from '@/components/Cards/VerticalCard/VerticalCard';

const OurProcess = () => {
  return (
    <div className='bg-cyan-500 h-fit gap-20 max-md:gap-[50px] flex flex-col px-20 max-md:px-4 pb-[140px]'>
      <BoldOneLineText label='Our Process' />
      <div className='grid grid-cols-2 gap-20 max-md:grid-cols-1 max-md:gap-10'>
        <VerticalCard
          showFooter
          link='/'
          className='bg-[#241111] text-white'
          title={
            <span>
              FREE <br />
              Consultation
            </span>
          }
          description={`Begin with a complimentary consultation where our team reviews your business idea, ensuring alignment with your vision. We'll define the project scope and finalize key details for execution.`}
        />
        <VerticalCard
          className='bg-[#2B2C2D] text-white'
          title={
            <span>
              Concept Planning <br /> & Validation
            </span>
          }
          description={`The team collaborates to develop and document solutions, ensuring clarity for future teams. We establish channels for brainstorming, assumption mapping, validation, and timeline reviews before finalizing project agreements.`}
        />
      </div>
    </div>
  );
};

export default OurProcess;
