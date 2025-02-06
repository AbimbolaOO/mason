'use client';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React from 'react';

import { useGSAP } from '@gsap/react';

import { HorizontalCard } from './HorizontalCardScroller';

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

interface ICellData {
  icon: React.ReactNode;
  label: string;
  description: string;
  imageName: string;
}

interface HorizontalMobileCardScrollerProps {
  cellData: ICellData[];
}

const HorizontalMobileCardScroller: React.FC<
  HorizontalMobileCardScrollerProps
> = ({ cellData }) => {
  return (
    <div className='w-full overflow-auto flex overscroll-x-contain'>
      <div className='grid grid-flow-col pl-[80px] max-md:pl-4'>
        {cellData.map((data, index) => (
          <HorizontalCard key={index} {...data} />
        ))}
      </div>
    </div>
  );
};

export default HorizontalMobileCardScroller;

// const HorizontalCard: React.FC<ICellData> = ({
//   icon,
//   label,
//   description,
//   imageName,
// }) => {
//   return (
//     <div className='slider-content-item border-l-[1px] border-mason-border flex flex-col p-4 w-[350px] justify-between gap-4'>
//       <div className='flex flex-col gap-4'>
//         {/* Icon Part */}
//         <div className='grid place-content-center p-[7px] bg-mason-icon-bg w-[54px] h-[54px] rounded-lg'>
//           {icon}
//         </div>

//         {/* Label part */}
//         <div className='font-adventPro font-semibold text-xl leading-[32px]'>
//           {label}
//         </div>

//         {/* Description part */}
//         <div className='text-[15px] leading-[30px]'>{description}</div>
//       </div>

//       {/* Image part */}
//       <div className='relative'>
//         <Image
//           src={`/static/img/${imageName}.png`}
//           alt={`${imageName} image`}
//           width={318}
//           height={140.09}
//           priority
//           className=''
//         />
//       </div>
//     </div>
//   );
// };
