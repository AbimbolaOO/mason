import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import TitleCard from '@/components/Cards/TitleCard/TitleCard';
import ArrowRightIcon from '@/components/Icons/ArrowRightIcon';
import DotIcon from '@/components/Icons/DotIcon';

import { ProjectData } from './ProjectData';

const Projects = () => {
  return (
    <div className='flex flex-col justify-center'>
      {/* Title */}
      <div className='pl-20 pt-[135px] bg-white'>
        <TitleCard
          title='Projects'
          description='Explore our project collection'
        />
      </div>

      {/* Scroll view */}
      <div className='bg-blue-700 overflow-x-hidden'>
        {/* paper top */}
        <div className='h-[88px] relative grid place-content-center'>
          <Image
            src='/static/img/top-paper-strip.png'
            alt='paper strip'
            fill
            priority
            className='object-cover object-center'
          />
        </div>

        {/* Horizontal scroll section */}
        <div className='h-[calc(100vh+90px)] bg-mason-black border-4 -mt-20 overflow-x-auto overscroll-x-contain flex items-center'>
          {ProjectData.map((project, index) => (
            <HorizontalScrollProjectCards {...project} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;

interface HorizontalScrollProjectCards {
  title: string;
  description: string;
  servicesOffered: string[];
  projectImageName: string;
  linkToProject: string;
}

const HorizontalScrollProjectCards: React.FC<HorizontalScrollProjectCards> = ({
  title,
  description,
  servicesOffered,
  projectImageName,
  linkToProject,
}) => {
  return (
    <div className='text-white border-2 border-blue-400 grid grid-flow-col'>
      {/* LEFT TEXT AREA */}
      <div className='text-white border border-red-400 w-[780px] ml-20'>
        {/* Text Area */}
        <div className='text-[20px] leading-[40px] flex flex-col gap-6'>
          {/* Top */}
          <div className='flex flex-col gap-8'>
            <div className='font-semibold text-[70px] leading-[70px] font-adventPro'>
              {title}
            </div>
            <div className=''>{description}</div>
          </div>

          {/* Bottom */}
          <div className='flex flex-col gap-8'>
            <div className='font-semibold text-[70px] leading-[70px] font-adventPro'>
              Services Offered
            </div>
            <div>
              <ul className='list-disc pl-6'>
                {servicesOffered.map((service, index) => (
                  <li key={index}>{service}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Button Area */}
          <LaunchProjectBtn linkToProject={linkToProject} />
        </div>
      </div>

      {/* Project Image Area */}
      <div className='w-[100vw] border border-fuchsia-600 grid p-0 justify-center'>
        <Image
          src={`/static/img/${projectImageName}.png`}
          alt={`${projectImageName}`}
          width={838}
          height={653}
          priority
          className=''
        />

        <NextProjectSlide linkToProject={linkToProject} />
      </div>
    </div>
  );
};

const NextProjectSlide = ({ linkToProject }: { linkToProject: string }) => {
  return (
    <div className='flex gap-[49px] justify-center'>
      <LaunchProjectBtn linkToProject={linkToProject} />
      <div className='flex flex-col'>
        <div className='text-[15px] leading-[20px] text-mason-grey'>
          Keep Scrolling to
        </div>
        <div className='text-white flex items-center gap-2'>
          <div className='text-xl leading-[20px]'>Next Project</div>
          <div className='w-[120px] h-[3px] bg-mason-border-transparent'></div>
          <ArrowRightIcon currentColor />
        </div>
      </div>
    </div>
  );
};

const LaunchProjectBtn = ({ linkToProject }: { linkToProject: string }) => {
  return (
    <Link href={linkToProject} target='_blank'>
      <button className='bg-white rounded-xl text-[15px] leading-[20px] flex gap-2 text-mason-black w-fit py-3 px-4 items-center'>
        Launch Project <DotIcon />
      </button>
    </Link>
  );
};
