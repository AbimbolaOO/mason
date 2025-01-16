import Image from 'next/image';
import React from 'react';

import TitleCard from '@/components/Cards/TitleCard/TitleCard';

// import PaperTearTop from '@/components/Icons/PaperTearTop';

const Projects = () => {
  return (
    <div className='flex flex-col justify-between'>
      {/* Title */}
      <div className='pl-20 pt-[135px] border border-red-600 bg-white'>
        <TitleCard
          title='Projects'
          description='Explore our project collection'
        />
      </div>

      {/* Scroll view */}
      <div className='bg-blue-700 overflow-hidden'>
        <div className='h-[88px] relative border border-red-500 grid place-content-center -mx-5 p-0'>
          <Image
            src='/static/img/top-paper-strip.png'
            alt='paper strip'
            fill
            className='object-cover object-center'
          />
          {/* <PaperTearTop className='w-[100vw]' /> */}
        </div>
        {/* <div className='bg-red-700'>
          <PaperTearTop />
        </div> */}
        <div className='h-[100vh] bg-mason-black -mt-14'></div>
      </div>
    </div>
  );
};

export default Projects;
