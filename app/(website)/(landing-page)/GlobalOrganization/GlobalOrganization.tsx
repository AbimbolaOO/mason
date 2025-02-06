import React from 'react';

import Carousel from '@/components/carousel/Carousel';

export default function GlobalOrganization() {
  return (
    <div className='border border-purple-900 grid grid-cols-2 max-md:grid-cols-1 px-20 max-md:p-4 h-screen-minus-header max-md:h-fit max-md:gap-[30px] place-content-center'>
      {/* Carousel */}
      <Carousel />

      {/* Text place */}
      <div className='ml-[67px] max-md:ml-0 flex flex-col justify-center items-start gap-8 max-md:gap-6'>
        <div className='text-[35px] leading-[50px] max-md:text-[20px] max-md:leading-[30px]'>
          Global organizations rely on our support in developing large scale
          internal and external software systems.
        </div>
        <button className='rounded-xl bg-mason-black text-white text-[15px] py-3 px-4 leading-5'>
          Talk About Your Project
        </button>
      </div>
    </div>
  );
}
