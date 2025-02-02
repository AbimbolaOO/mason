'use client';
import React from 'react';

import { useAppSelector } from '@/redux/store';

import ContactEmail from './ContactEmail';
import VerticalSlideContactView from './VerticalSlideContactView';
import WhatWeDoForm from './WhatWeDoForm';

const ContactForm = () => {
  const { slideIndex } = useAppSelector((state) => state.contactData);
  return (
    <div>
      {slideIndex === 0 && <ContactEmail />}
      {(slideIndex === 1 || slideIndex === 2) && <VerticalSlideContactView />}
      {slideIndex === 3 && <WhatWeDoForm />}
    </div>
  );
};

export default ContactForm;
