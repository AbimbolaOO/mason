import { useFormikContext } from 'formik';
import React from 'react';

import EnterIcon from '../Icons/EnterIcon';

interface SubmitButtonProps {
  showSubmit?: boolean;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({ showSubmit }) => {
  const { dirty, isValid } = useFormikContext<any>();
  return (
    <div className='flex items-center gap-6'>
      <button
        type='submit'
        className='text-mason-black bg-white rounded-[12px] text-[15px] leading-[20px] py-3 px-[52px] disabled:bg-mason-lighter-border-grey disabled:cursor-not-allowed'
        disabled={isValid && dirty ? false : true}
      >
        {showSubmit ? 'Submit' : 'Next'}
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
