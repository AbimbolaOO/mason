'use client';
import React from 'react';

import ContactEmail from './ContactEmail';
import ContactFullname from './ContactFullname';
import ContactPhoneNumber from './ContactPhoneNumber';
import WhatWeDoForm from './WhatWeDoForm';

const ContactForm = () => {
  return (
    <div>
      <ContactEmail />
      <ContactFullname />
      <ContactPhoneNumber />
      <WhatWeDoForm />
    </div>
  );
};

export default ContactForm;
