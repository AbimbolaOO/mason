import React from 'react';

import { Accordion, AccordionCell } from '@/components/Accordion/Accordion';
import TitleCard from '@/components/Cards/TitleCard/TitleCard';

import { accordionImages, solutionData } from './SolutionsData';

export default function FutureProofDigitalSolutions() {
  return (
    <div className='flex flex-col px-20 max-md:px-4 max-md:mt-20 gap-[100px] max-md:gap-8 pb-[100px]'>
      {/* Title */}
      <TitleCard
        title='Future-Proof Digital Solutions'
        description='Industry best practices and scalable solutions for optimal outcomes'
      />

      {/* Accordion Area*/}
      <div className=''>
        <Accordion imageList={accordionImages}>
          {solutionData.map((data, index) => (
            <AccordionCell key={index} title={data.title}>
              {data.content}
            </AccordionCell>
          ))}
        </Accordion>
      </div>
    </div>
  );
}
