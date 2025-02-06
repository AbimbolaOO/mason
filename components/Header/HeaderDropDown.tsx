import clsx from 'clsx';
import React from 'react';

import ChevronMiniArrowDownIcon from '../Icons/ChevronMiniArrowDownIcon';

interface HeaderDropDownProps {
  label: string;
  children: React.ReactNode;
}

const HeaderDropDown: React.FC<HeaderDropDownProps> = ({ label, children }) => {
  return (
    <div className='group relative flex h-fit items-center text-[12px] w-fit'>
      {/* Dropdown label */}
      <div className='flex h-fit cursor-pointer items-center gap-[4px] py-[12px] text-sm'>
        {label} <ChevronMiniArrowDownIcon />
      </div>

      {/* Dropdown content */}
      <div
        className={clsx(
          'invisible absolute top-[150%] opacity-0 flex flex-col group-hover:visible group-hover:opacity-100 group-hover:top-[100%] transition-all duration-500 w-[calc(100vw-160px)]',
          label === 'Projects'
            ? 'right-[calc(0px-410%)]'
            : 'right-[calc(0px-250%)]'
          // label === 'Projects'
          //   ? 'right-[calc(0px-540%)]'
          //   : 'right-[calc(0px-362%)]'
        )}
      >
        {/* Empty space div */}
        <div className='h-[30px]'></div>
        {/* Main dropdown content */}
        {children}
      </div>
    </div>
  );
};

export default HeaderDropDown;
