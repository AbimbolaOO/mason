import clsx from 'clsx';
import React from 'react';

interface InfiniteScrollerIconData {
  icon: React.ReactNode;
  key: string;
}
interface InfiniteScrollerProps {
  iconData: InfiniteScrollerIconData[];
  reverse?: boolean;
}

const InfiniteScroller: React.FC<InfiniteScrollerProps> = ({
  iconData,
  reverse,
}) => {
  return (
    <div className='flex w-full flex-nowrap overflow-hidden py-4 scroll-smooth group'>
      <div
        className={clsx(
          'flex items-center *:ml-14 group-hover:[animation-play-state:paused]',
          reverse ? 'animate-scrollReverse' : 'animate-scroll'
        )}
      >
        {iconData?.map(({ icon, key }: InfiniteScrollerIconData) => (
          <div key={key} className='whitespace-nowrap'>
            {icon}
          </div>
        ))}
      </div>
      <div
        className={clsx(
          'flex items-center *:ml-14 group-hover:[animation-play-state:paused]',
          reverse ? 'animate-scrollReverse' : 'animate-scroll'
        )}
      >
        {iconData?.map(({ icon, key }: InfiniteScrollerIconData) => (
          <div key={key} className='whitespace-nowrap'>
            {icon}
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfiniteScroller;
