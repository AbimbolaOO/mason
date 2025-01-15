'use client';
import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

import CompanyBlackLogo from '../Icons/CompanyBlackLogo';
import CompanyLogo from '../Icons/CompanyLogo';

const navLinks = [
  { href: '/about-us', label: 'About' },
  { href: '/projects', label: 'Projects' },
  { href: '/solutions', label: 'Solutions' },
  { href: '/contact-us', label: 'Contact Us' },
];

interface HeaderProps {
  footer?: boolean;
}

export default function Header({ footer = false }: HeaderProps) {
  const pathname = usePathname();

  return (
    <header
      className={clsx(
        !footer ? 'bg-mason-black' : 'bg-white',
        `flex w-full px-20 py-[22.5px] justify-between top-0 sticky z-20`
      )}
    >
      {/* Company Logo */}
      <Link href='/' className='flex items-center'>
        {!footer ? <CompanyLogo /> : <CompanyBlackLogo />}
      </Link>

      {/* Nav */}
      <nav
        className={clsx(
          !footer ? ' text-white' : 'text-mason-black',
          `flex gap-5 text-sm`
        )}
      >
        <div className='flex gap-4 [&>*]:px-2'>
          {navLinks.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className={clsx(
                pathname.includes(link.href) && 'bg-cyan-950',
                `flex items-center`
              )}
            >
              {link.label}
            </Link>
          ))}
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
