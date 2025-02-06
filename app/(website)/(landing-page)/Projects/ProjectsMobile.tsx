'use client';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import React, { useRef } from 'react';

import { DotIconBtn } from '@/components/Buttons/Buttons';
import TitleCard from '@/components/Cards/TitleCard/TitleCard';
import ArrowRightIcon from '@/components/Icons/ArrowRightIcon';
import { useGSAP } from '@gsap/react';

import { ProjectData } from './ProjectData';

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const ProjectsMobile = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  return (
    <div className='flex flex-col justify-center md:hidden'>
      {/* Title */}
      <div className='mx-4'>
        <TitleCard
          title='Projects'
          description='Explore our project collection'
        />
      </div>

      {/* Scroll view */}
      <div className='bg-white '>
        {/* paper top */}
        <div className='z-10 h-[88px] relative grid place-content-center'>
          <Image
            src='/static/img/top-paper-strip.png'
            alt='paper strip'
            fill
            priority
            className='object-cover object-center'
          />
        </div>

        {/* Horizontal scroll section */}
        <div
          ref={containerRef}
          className='h-[calc(100vh+88px)] -mt-[80px] pt-[80px] bg-mason-black overflow-auto overscroll-x-contain flex flex-col sticky top-[100px] hide-the-scrollbar'
        >
          <div className='slider-container text-white grid grid-cols-1 mx-4 gap-[54px]'>
            {ProjectData.map((project, index) => (
              <VerticalScrollProjectCards {...project} key={index} />
            ))}
            <div className='h-[50px]'></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsMobile;

interface VerticalScrollProjectCards {
  title: string;
  description: string;
  servicesOffered: string[];
  projectImageName: string;
  linkToProject: string;
}

const VerticalScrollProjectCards: React.FC<VerticalScrollProjectCards> = ({
  title,
  description,
  servicesOffered,
  projectImageName,
  linkToProject,
}) => {
  return (
    <>
      {/* LEFT TEXT AREA */}
      <div className='text-white w-full md:hidden'>
        {/* Text Area */}
        <div className='text-[12px] leading-[27px] flex flex-col gap-6'>
          {/* Top */}
          <div className='flex flex-col gap-[28px]'>
            <div className='font-semibold text-[25px] leading-[30px] font-adventPro'>
              {title}
            </div>
            <div className=''>{description}</div>
          </div>

          {/* Bottom */}
          <div className='flex flex-col gap-[28px]'>
            <div className='font-semibold text-[25px] leading-[30px] font-adventPro'>
              Services Offered
            </div>
            <div>
              <ul className='list-disc pl-4'>
                {servicesOffered.map((service, index) => (
                  <li key={index}>{service}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Button Area */}
          <DotIconBtn
            label='Launch Project'
            href={linkToProject}
            target='_blank'
          />
        </div>
      </div>

      {/* Project Image Area */}
      <div className='w-full grid p-0 gap-[38px] justify-center'>
        <Image
          src={`/static/img/${projectImageName}.png`}
          alt={`${projectImageName}`}
          width={838}
          height={653}
          priority
          className=''
        />

        <NextProjectSlide />
      </div>
    </>
  );
};

const NextProjectSlide = () => {
  return (
    <div className='next-prj-container w-fit self-center justify-self-center'>
      <div className='flex flex-col'>
        <div className='text-[15px] leading-[20px] text-mason-grey'>
          Keep Scrolling to
        </div>
        <div className='text-white flex items-center gap-2'>
          <div className='text-xl leading-[20px]'>Next Project</div>
          <div className='w-[120px] h-[3px] bg-mason-border-transparent'></div>
          <ArrowRightIcon currentColor className='arrow-btn' />
        </div>
      </div>
    </div>
  );
};
