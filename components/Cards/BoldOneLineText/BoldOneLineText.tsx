import React from 'react';

interface BoldOneLineTextProps {
  label: string;
}

const BoldOneLineText: React.FC<BoldOneLineTextProps> = ({ label }) => {
  return (
    <div className='text-white text-[100px] max-md:text-[30px] leading-[100px] max-md:leading-[50px] font-adventPro font-semibold text-center'>
      {label}
    </div>
  );
};

export default BoldOneLineText;
