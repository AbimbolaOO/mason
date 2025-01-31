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

const Projects = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  // const sliderWrapper = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      const sliderContainer = document.querySelector(
        '.slider-container'
      ) as HTMLDivElement;
      const sliderWidth = sliderContainer.offsetWidth;
      const amountToScroll = sliderWidth - window.innerWidth;

      // Horizontal scroll animation
      const horizontalScroll = gsap.to('.slider-container', {
        x: -amountToScroll,
        ease: 'none',
      });

      // ScrollTrigger for horizontal scroll
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: 'top top',
        end: '+=' + amountToScroll,
        animation: horizontalScroll,
        // markers: true,
        pin: true,
        scrub: 1,
        invalidateOnRefresh: true,
      });

      const nestSlideBtnSections = gsap.utils.toArray(
        '.next-prj-container'
      ) as HTMLElement[];

      nestSlideBtnSections.forEach((section) => {
        ScrollTrigger.create({
          trigger: section,
          start: 'left center',
          // animation: nestSlide,
          animation: gsap
            .timeline({})
            .to(section.querySelector('.next-prj-slide'), { autoAlpha: 1 })
            .fromTo(
              section.querySelector('.launchBtn'),
              {
                y: 100,
                opacity: 0,
                ease: 'none',
              },
              { y: 0, opacity: 1, ease: 'none' },
              '<'
            )
            .to(
              section.querySelector('.arrow-btn'),
              {
                x: 16,
                opacity: 1,
                ease: 'elastic.inOut',
                repeat: -1,
                duration: 1,
                yoyo: true,
              },
              '<'
            ),
          // onEnter: () => console.log('lol'),
          // markers: true,
          containerAnimation: horizontalScroll,
        });
      });
    },
    { scope: containerRef }
  );

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
      <div className='bg-white overflow-x-hidden'>
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
          className='h-[calc(100vh+90px)] bg-mason-black -mt-20 overflow-hidden overscroll-x-contain flex items-center'
        >
          <div className='slider-container text-white grid grid-flow-col'>
            {ProjectData.map((project, index) => (
              <HorizontalScrollProjectCards {...project} key={index} />
            ))}
          </div>
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
    <>
      {/* LEFT TEXT AREA */}
      <div className='text-white  w-[780px] ml-20'>
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
          {/* <LaunchProjectBtn linkToProject={linkToProject} /> */}
          <DotIconBtn
            label='Launch Project'
            href={linkToProject}
            target='_blank'
          />
        </div>
      </div>

      {/* Project Image Area */}
      <div className='w-[100vw] grid p-0 justify-center'>
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
    </>
  );
};

const NextProjectSlide = ({ linkToProject }: { linkToProject: string }) => {
  return (
    <div className='next-prj-container w-fit self-center justify-self-center'>
      <div className='next-prj-slide flex gap-[49px] justify-center w-fit invisible opacity-0'>
        {/* <LaunchProjectBtn linkToProject={linkToProject} /> */}
        <DotIconBtn
          label='Launch Project'
          href={linkToProject}
          target='_blank'
        />
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
    </div>
  );
};
