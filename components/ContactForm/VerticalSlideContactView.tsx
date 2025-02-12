import clsx from 'clsx';
import React from 'react';

import { useAppSelector } from '@/redux/store';

import ContactChatView from './ContactChatView';
import ContactFullname from './ContactFullname';
import ContactPhoneNumber from './ContactPhoneNumber';

const VerticalSlideContactView = () => {
  const { verticalSlideIndex } = useAppSelector((state) => state.contactData);

  return (
    <div
      className='grid grid-cols-2 max-md:flex max-md:flex-col-reverse max-md:w-full max-md:gap-8
    h-[calc(100vh-89px)] items-center px-[120px] max-md:p-4'
    >
      {/* Right verticalSlider */}
      <div className='h-[273px] overflow-y-hidden w-fit'>
        <div
          className={clsx(
            'flex-col flex text-white transition-all duration-700',
            verticalSlideIndex === 0 ? 'translate-y-[0%]' : 'translate-y-[-50%]'
          )}
        >
          <ContactFullname />
          <ContactPhoneNumber />
        </div>
      </div>

      {/* Chat Viewer */}
      <ContactChatView />
    </div>
  );
};

export default VerticalSlideContactView;
