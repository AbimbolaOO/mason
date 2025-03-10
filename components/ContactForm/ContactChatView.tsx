import clsx from 'clsx';
import React from 'react';

import EllipseIcon from '@/components/Icons/EllipseIcon';
import MasonIcon from '@/components/Icons/MasonIcon';
import { useAppSelector } from '@/redux/store';

const ContactChatView = () => {
  const {
    contactNameSlide: { fullName },
    contactPhoneSlide: { phone },
    slideIndex,
  } = useAppSelector((state) => state.contactData);

  return (
    <div className='ml-auto max-md:ml-0 z-20 max-md:hidden'>
      <div className='bg-[#272727] w-[327px] max-md:w-full p-4 rounded-[24px] text-white flex flex-col gap-[19px]'>
        {/* Number View */}
        {fullName && slideIndex >= 2 && (
          <div className='flex flex-col items-center'>
            <div className='rounded-full text-[30px] leading-[25px] bg-mason-clear w-[50px] h-[50px] grid place-content-center'>
              {fullName.slice(0, 1).toLocaleUpperCase()}
            </div>
            <div className='text-sm leading-[25px]'>{phone}</div>
          </div>
        )}

        {/* Messages view*/}
        <div className='rounded-[20px] p-[1px] bg-mason-linear-stroke'>
          <div className='rounded-[20px] px-5 py-[25px] bg-[#3D3D3D] text-white flex-col flex gap-4'>
            <div className='flex items-center gap-2'>
              <div>
                <div className='w-[41px] h-[41px] rounded-full grid place-content-center bg-mason-linear-stroke'>
                  <div className='w-10 h-10 rounded-full grid place-content-center  bg-[#3D3D3D]'>
                    <MasonIcon />
                  </div>
                </div>
              </div>
              <div className='text-[14px] leading-[25px] flex py-2 px-[11px] rounded-[15px] relative chatLeftMsg bg-[#4A4A4A]'>
                Your full name?
              </div>
            </div>
            <div
              className={clsx(
                'text-[14px] leading-[25px] flex py-2 px-[11px] rounded-[15px] relative  w-fit self-end',
                fullName
                  ? 'bg-[#4A4A4A] chatRightMsg'
                  : 'bg-[#2F2F2F] chatRightMsgDark'
              )}
            >
              {/* {fullName} */}
              {fullName || <EllipseIcon />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactChatView;
