import React from 'react';

import { Accordion, AccordionCell } from '@/components/Accordion/Accordion';

import { accordionImages, solutionData } from './SolutionsData';

export default function FutureProofDigitalSolutions() {
  return (
    <div className='flex flex-col px-20 border border-yellow-300 gap-[100px] pb-[100px]'>
      {/* Title */}
      <div className='flex flex-col'>
        <div className='font-adventPro font-medium text-[100px] leading-[119.6px]'>
          Future-Proof Digital Solutions
        </div>
        <div className='text-[35px] leading-[50px]'>
          Industry best practices and scalable solutions for optimal outcomes
        </div>
      </div>

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
