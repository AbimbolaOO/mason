import Link from 'next/link';
import React from 'react';

const WeLeverageTechnology = () => {
  return (
    <div className='flex-col flex gap-12 max-md:gap-6 pb-[86px] max-md:pb-4 max-md:pt-10 max-md:items-center max-md:justify-center text-white bg-green-400 px-20 items-center h-[calc(100vh-88px)] max-md:h-fit'>
      <div className='text-6xl max-md:text-[30px] leading-[100px] max-md:leading-[50px] flex flex-col items-center justify-center h-fit font-adventPro font-semibold text-center'>
        We create systems that showcase concepts with professional visuals
        through iteration.
      </div>

      {/* <div className='text-6xl leading-[100px] flex flex-col items-center justify-center h-fit'></div> */}

      <div className='text-[25px] leading-10 max-md:text-[18px] max-md:leading-[28px] max-md:text-center'>
        We simplify complex designs to deliver fast results.
      </div>

      <Link href='/' className='max-md:mt-4'>
        <button className='rounded-xl text-mason-black bg-white text-[15px] py-[17px] px-[54px] leading-5 w-fit'>
          Learn More
        </button>
      </Link>
    </div>
  );
};

export default WeLeverageTechnology;
