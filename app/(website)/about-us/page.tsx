import React from 'react';

import ReachOutToUs from '@/components/Cards/ReachOutToUs/ReachOutToUs';

import GlobalPresence from './GlobalPresence/GlobalPresence';
import Hero from './Hero/Hero';

export default function page() {
  return (
    <div>
      <Hero />
      <GlobalPresence />
      <ReachOutToUs />
    </div>
  );
}
