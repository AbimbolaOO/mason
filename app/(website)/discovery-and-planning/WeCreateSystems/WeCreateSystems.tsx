import Link from 'next/link';
import React from 'react';

const WeLeverageTechnology = () => {
  return (
    <div className='flex-col flex gap-12 pb-[86px] text-white bg-green-400 px-20 items-center h-[calc(100vh-88px)]'>
      <div className='text-6xl leading-[100px] flex flex-col items-center justify-center h-fit font-adventPro font-semibold text-center'>
        We create systems that showcase concepts with professional visuals
        through iteration.
      </div>

      {/* <div className='text-6xl leading-[100px] flex flex-col items-center justify-center h-fit'></div> */}

      <div className='text-[25px] leading-10'>
        We simplify complex designs to deliver fast results.
      </div>

      <Link href='/'>
        <button className='rounded-xl text-mason-black bg-white text-[15px] py-[17px] px-[54px] leading-5 w-fit'>
          Learn More
        </button>
      </Link>
    </div>
  );
};

export default WeLeverageTechnology;
