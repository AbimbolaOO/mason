import React from 'react';

import EnterIcon from '../Icons/EnterIcon';

const SubmitButton = () => {
  return (
    <div className='flex items-center gap-6'>
      <button
        type='submit'
        className='bg-white rounded-[12px] text-[15px] leading-[20px] py-3 px-[52px]'
      >
        Next
      </button>
      <div className='flex gap-4'>
        <div className='text-white text-[15px]'>Or</div>
        <EnterIcon />
        <div className='text-white text-[15px]'>Press Enter</div>
      </div>
    </div>
  );
};

export default SubmitButton;
