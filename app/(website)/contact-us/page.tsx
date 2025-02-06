import React from 'react';

import ContactForm from '@/components/ContactForm/ContactForm';

import Hero from './Hero/Hero';
import MasonAdvantage from './MasonAdvantage/MasonAdvantage';
import OurDesignProcess from './OurDesignProcess/OurDesignProcess';
import WeCreateSystems from './WeCreateSystems/WeCreateSystems';

export default function page() {
  return (
    <div className='flex flex-col'>
      <Hero />
      <OurDesignProcess />
      <MasonAdvantage />
      <WeCreateSystems />
      <ContactForm />
    </div>
  );
}
