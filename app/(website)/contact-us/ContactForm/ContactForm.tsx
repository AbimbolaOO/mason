'use client';
import React from 'react';

import ContactEmail from './ContactEmail';
import VerticalSlideContactView from './VerticalSlideContactView';
import WhatWeDoForm from './WhatWeDoForm';

const ContactForm = () => {
  return (
    <div>
      <ContactEmail />
      <VerticalSlideContactView />
      <WhatWeDoForm />
    </div>
  );
};

export default ContactForm;
