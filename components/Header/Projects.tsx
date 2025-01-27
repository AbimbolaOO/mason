import Link from 'next/link';
import React from 'react';

import DarumHeaderIcon from '../Icons/DarumHeaderIcon';
import DwellingHeaderIcon from '../Icons/DwellingHeaderIcon';
import EthiopianHeaderIcon from '../Icons/EthiopianHeaderIcon';
import HeaderDropDown from './HeaderDropDown';

const ProjectsDropdown = () => {
  return (
    <HeaderDropDown label='Projects'>
      <Projects />
    </HeaderDropDown>
  );
};

export default ProjectsDropdown;

const Projects = () => {
  return (
    <div className='rounded-[24px] overflow-hidden'>
      <div className='grid grid-cols-[1fr_3px_1fr_3px_1fr] px-8 py-[28px] pr-9 bg-white w-full gap-[31px]'>
        <Link href='https://darum.ng/' target='_blank'>
          <div className='flex flex-col gap-3'>
            <div className='text-[20px] leading-[23.64px] text-mason-black'>
              Darum
            </div>
            <div className='bg-mason-black rounded-[11px] flex items-center justify-center h-[158px]'>
              <DarumHeaderIcon />
            </div>
          </div>
        </Link>

        <div className='w-[3px] bg-mason-border-grey rounded-sm'></div>

        {/* b */}
        <Link href='https://darum.ng/' target='_blank'>
          <div className='flex flex-col gap-3'>
            <div className='text-[20px] leading-[23.64px] text-mason-black'>
              Ethiopian Cargo
            </div>
            <div className='bg-mason-black rounded-[11px] flex items-center justify-center h-[158px]'>
              <EthiopianHeaderIcon />
            </div>
          </div>
        </Link>

        <div className='w-[3px] bg-mason-border-grey rounded-sm'></div>

        {/* c */}
        <Link href='https://darum.ng/' target='_blank'>
          <div className='flex flex-col gap-3'>
            <div className='text-[20px] leading-[23.64px] text-mason-black'>
              Dwelling
            </div>
            <div className='bg-mason-black rounded-[11px] flex items-center justify-center h-[158px]'>
              <DwellingHeaderIcon />
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};
