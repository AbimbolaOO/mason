import React from 'react';

import DarumIcon from '../Icons/DarumIcon';
import DwellingIcon from '../Icons/DwellingIcon';
import EthiopianIcon from '../Icons/EthiopianIcon';

const Carousel = () => {
  return (
    <div className='h-[470px] bg-mason-black rounded-[20px] grid text-white *:col-start-1 *:row-start-1'>
      <div className='border border-red-700 flex overflow-auto'>
        <div className='grid h-full grid-flow-col pb-[60px]'>
          <div className='w-fit border border-yellow-500 grid place-content-center'>
            <EthiopianIcon />
          </div>
          <div className='w-[600px] border border-green-700 grid place-content-center'>
            <DwellingIcon />
          </div>
          <div className='w-[600px] border border-blue-700 grid place-content-center'>
            <DarumIcon />
          </div>
        </div>
      </div>

      <div className='w-[100%] h-[5px] grid grid-cols-3 self-end mb-[30px] px-[30px] gap-4'>
        <div className='bg-white rounded-full'></div>
        <div className='bg-white rounded-full'></div>
        <div className='bg-white rounded-full'></div>
      </div>
    </div>
  );
};

export default Carousel;
