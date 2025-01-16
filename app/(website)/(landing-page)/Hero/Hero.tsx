import React from 'react';

import ExecutionIcon from '@/components/Icons/ExecutionIcon';
import PlanningIcon from '@/components/Icons/PlanningIcon';
import SpeedIcon from '@/components/Icons/SpeedIcon';

export default function Hero() {
  return (
    <div className='border  border-red-600 h-screen-minus-header bg-mason-black grid place-content-center relative'>
      <div className='absolute border border-red-500 top-[-64px] left-[580px]'>
        <PlanningIcon />
      </div>
      <div className='absolute border border-blue-500 bottom-[30px] right-[60px]'>
        <ExecutionIcon />
      </div>
      <div className='absolute border border-green-500 bottom-[-64px] left-0'>
        <SpeedIcon />
      </div>

      {/* Actual Content */}
      <div className='text-white text-[100px] leading-[150px] text-center'>
        <div>Powering Enterprises.</div>
        <div className='text-mason-grey'>Inspiring People.</div>
      </div>
    </div>
  );
}
