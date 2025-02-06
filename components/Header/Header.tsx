'use client';
import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';

import ArrowRightIcon from '../Icons/ArrowRightIcon';
import ChevronArrowRightIcon from '../Icons/ChevronArrowRightIcon';
import CloseIcon from '../Icons/CloseIcon';
import CompanyBlackLogo from '../Icons/CompanyBlackLogo';
import CompanyLogo from '../Icons/CompanyLogo';
import HamburgerIcon from '../Icons/HamburgerIcon';
import ProjectsDropdown from './Projects';
import SolutionsDropdown from './Solutions';

interface HeaderProps {
  footer?: boolean;
  toggleFooterFn?: () => void;
}

export default function Header({
  toggleFooterFn,
  footer = false,
}: HeaderProps) {
  const pathname = usePathname();
  const [reveal, setReveal] = useState(false);

  return (
    <>
      <header
        className={clsx(
          !footer ? 'bg-mason-black' : 'bg-white',
          `flex w-full px-20 py-[22.5px] justify-between top-0 sticky z-30 max-md:hidden`
        )}
      >
        {/* Company Logo */}
        <Link href='/' className='flex items-center'>
          {!footer ? (
            <CompanyLogo />
          ) : (
            <div onClick={() => toggleFooterFn && toggleFooterFn()}>
              <CompanyBlackLogo />
            </div>
          )}
        </Link>

        {/* Nav */}
        <nav
          className={clsx(
            !footer ? ' text-white' : 'text-mason-black',
            `flex gap-5 text-sm`
          )}
        >
          <div className='flex gap-4 [&>*]:px-2'>
            <Link
              onClick={() => toggleFooterFn && toggleFooterFn()}
              href={'/about-us'}
              className={clsx(
                pathname.includes('/about-us') && 'bg-cyan-950',
                `flex items-center`
              )}
            >
              About
            </Link>

            <ProjectsDropdown />

            <SolutionsDropdown />

            {/* <Link
              href={'/contact-us'}
              className={clsx(
                pathname.includes('/contact-us') && 'bg-cyan-950',
                `flex items-center`
              )}
            >
              Contact Us
            </Link> */}
          </div>

          <Link href={'book-a-free-consultation'}>
            <button
              className={clsx(
                !footer
                  ? 'bg-white text-mason-black'
                  : 'text-white bg-mason-black',
                `rounded-lg px-4 py-3  text-[15px] leading-5`
              )}
            >
              Book a Free Consultation
            </button>
          </Link>
        </nav>
      </header>

      {/* Mobile Header */}
      <div className='relative md:hidden'>
        {/* Comeback here to address the issues */}
        <header
          className={clsx(
            'bg-mason-black flex justify-between p-4 w-full h-fit z-[110] transition-colors',
            reveal || footer ? 'bg-white' : `bg-mason-black`,
            footer ? 'sticky top-0' : `fixed removeHeaderClass`
          )}
        >
          <Link href='/' className='flex items-center'>
            {!reveal && !footer ? (
              <CompanyLogo />
            ) : (
              <div
                onClick={() => {
                  setReveal(false);
                  if (toggleFooterFn) toggleFooterFn();
                }}
              >
                <CompanyBlackLogo />
              </div>
            )}
          </Link>

          <div className='cursor-pointer' onClick={() => setReveal(!reveal)}>
            {!reveal ? <HamburgerIcon currentColor={footer} /> : <CloseIcon />}
          </div>
        </header>

        {/* menu items*/}
        <div
          className={clsx(
            'fixed top-[60px] transition-all duration-300 flex flex-col h-[calc(100vh-60px)] bg-white px-5 pt-[27px] gap-6 font-adventPro text-[25px] leading-[30px] font-semibold w-full z-[100]', // 'translate-y-[100vh]',
            reveal
              ? 'opacity-1 translate-y-[0vh]'
              : `opacity-0 translate-y-[-100vh]`
          )}
        >
          <div className='flex flex-col gap-[30px] rounded-[8px] bg-mason-light-red px-4 py-[30px]'>
            <Link
              href={'about-us'}
              onClick={() => {
                setReveal(!reveal);
                if (toggleFooterFn) toggleFooterFn();
              }}
            >
              <MobileHeaderText>About</MobileHeaderText>
            </Link>
            <RevealItem
              label='Projects'
              revealData={[
                { label: 'Darum', link: 'https://darum.ng' },
                { label: 'Ethiopian Cargo', link: 'https://darum.ng' },
                { label: 'Dwelling', link: 'https://darum.ng' },
              ]}
              revealFn={() => setReveal(!reveal)}
            />
            <RevealItem
              label='Solutions'
              revealData={[
                { label: 'Consultancy' },
                {
                  label: 'Discovery and Planning',
                  link: 'discovery-and-planning',
                },
                {
                  label: 'Design and Prototyping',
                  link: 'design-and-prototyping',
                },
                {
                  label: 'Software and API Development',
                  link: 'software-and-api-development',
                },
              ]}
              revealFn={() => setReveal(!reveal)}
            />
            {/* <Link href={'contact-us'} onClick={() => setReveal(!reveal)}>
              <MobileHeaderText>Contact Us</MobileHeaderText>
            </Link> */}
          </div>

          {/* Button */}
          <Link
            href={'book-a-free-consultation'}
            onClick={() => setReveal(!reveal)}
          >
            <button
              className={clsx(
                `rounded-lg px-4 py-3 w-full flex items-center justify-between text-white bg-mason-black`
              )}
            >
              Book a Free Consultation{' '}
              <ArrowRightIcon className='w-5' currentColor />
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

const MobileHeaderText = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='w-fit text-mason-black cursor-pointer'>{children}</div>
  );
};

interface RevealItemProps {
  revealData: { label: string; link?: string }[];
  label: string;
  revealFn: (...args: any) => void;
}

const RevealItem: React.FC<RevealItemProps> = ({
  revealData,
  label,
  revealFn,
}) => {
  const [reveal, setReveal] = useState(false);
  return (
    <div className=''>
      <div
        className='flex justify-between items-center'
        onClick={() => setReveal(!reveal)}
      >
        <MobileHeaderText>{label}</MobileHeaderText>

        <div
          className={clsx(
            'cursor-pointer transition-all duration-300',
            reveal ? 'rotate-180' : ''
          )}
        >
          <ChevronArrowRightIcon />
        </div>
      </div>

      {/* Dropdown Items */}
      <div
        className={clsx(
          'flex flex-col font-aBeeZee text-[12px] leading-[14px] gap-4 font-normal pl-3 border-l border-mason-red transition-all duration-300 justify-center',
          reveal
            ? `mt-3 ${label === 'Solutions' ? 'h-[104px]' : 'h-[77px]'} visible`
            : 'mt-0 h-0 invisible'
        )}
      >
        {revealData.map((data, index) => (
          <React.Fragment key={index}>
            {data?.link ? (
              <Link
                href={data?.link}
                onClick={revealFn}
                className='cursor-pointer'
              >
                <RevealSubItem reveal={reveal}>{data.label}</RevealSubItem>
              </Link>
            ) : (
              <RevealSubItem reveal={reveal} className='cursor-default'>
                {data.label}
              </RevealSubItem>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

const RevealSubItem = ({
  children,
  reveal,
  className,
}: {
  children: React.ReactNode;
  reveal: boolean;
  className?: string;
}) => {
  return (
    <div
      className={clsx(
        'transition-all w-fit',
        reveal ? 'opacity-1 duration-300 delay-100' : 'opacity-0 duration-100',
        className
      )}
    >
      {children}
    </div>
  );
};
