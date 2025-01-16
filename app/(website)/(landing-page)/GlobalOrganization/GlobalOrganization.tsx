import React from 'react';

import Carousel from '@/components/carousel/Carousel';

export default function GlobalOrganization() {
  return (
    <div className='border border-purple-900 grid grid-cols-2 px-20 h-screen-minus-header place-content-center'>
      {/* Carousel */}
      <Carousel />

      {/* Text place */}
      <div className='ml-[67px] flex flex-col justify-center items-start gap-8'>
        <div className='text-[35px] leading-[50px]'>
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
