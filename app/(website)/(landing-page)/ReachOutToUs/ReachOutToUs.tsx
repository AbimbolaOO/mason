import React from 'react';

import ArrowDownIcon from '@/components/Icons/ArrowDownIcon';

const ReachOutToUs = () => {
  return (
    <div className='border border-red-600 h-[100vh] bg-mason-black'>
      <div className='w-full h-full border border-purple-700 grid place-content-center gap-[177px]'>
        <div className='flex justify-center items-center flex-col border border-red-500'>
          <div className='text-[35px] leading-[41px] text-white'>
            Ready to bring your projects to life?
          </div>
          <div className='font-medium font-adventPro text-[100px] leading-[150px] text-white'>
            Reach Out to Us!
          </div>
        </div>

        <button className='text-mason-black bg-white rounded-xl text-[15px] leading-[20px] p-[17px] w-fit justify-self-center flex gap-2 items-center'>
          <div className='py-2 px-[10px]'>
            <ArrowDownIcon />
          </div>
          Continue to Scroll
          <div className='py-2 px-[10px]'>
            <ArrowDownIcon />
          </div>
        </button>
      </div>
    </div>
  );
};

export default ReachOutToUs;
