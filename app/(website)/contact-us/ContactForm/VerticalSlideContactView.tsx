import React from 'react';

import ContactChatView from './ContactChatView';
import ContactFullname from './ContactFullname';
import ContactPhoneNumber from './ContactPhoneNumber';

const VerticalSlideContactView = () => {
  return (
    <div className='grid grid-cols-2 h-[calc(100vh-89px)] bg-mason-black items-center px-[120px] border border-red-500'>
      {/* Right verticalSlider */}
      <div className='flex-col flex text-white border border-yellow-300'>
        <ContactFullname />
        <ContactPhoneNumber />
      </div>

      {/* Chat Viewer */}
      <ContactChatView />
    </div>
  );
};

export default VerticalSlideContactView;
