import React from 'react';

interface BoldOneLineTextProps {
  label: string;
}

const BoldOneLineText: React.FC<BoldOneLineTextProps> = ({ label }) => {
  return (
    <div className='text-white text-[100px] leading-[100px] font-adventPro font-semibold text-center'>
      {label}
    </div>
  );
};

export default BoldOneLineText;
