'use client';
import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

import CompanyBlackLogo from '../Icons/CompanyBlackLogo';
import CompanyLogo from '../Icons/CompanyLogo';
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

  return (
    <header
      className={clsx(
        !footer ? 'bg-mason-black' : 'bg-white',
        `flex w-full px-20 py-[22.5px] justify-between top-0 sticky z-30`
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

          <Link
            href={'/contact-us'}
            className={clsx(
              pathname.includes('/contact-us') && 'bg-cyan-950',
              `flex items-center`
            )}
          >
            Contact Us
          </Link>
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
  );
}
