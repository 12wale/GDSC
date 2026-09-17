"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Button } from '../ui/Button';

export function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const linkClassName = (href: string) =>
    `font-medium text-sm transition-none ${pathname === href ? 'text-[#20B15A]' : 'text-gray-600'
    } hover:text-[#20B15A]`;

  return (
    <nav className="fixed top-0 z-50 flex h-[123px] w-full items-center border-b border-gray-100 bg-white">
      <div className="mx-auto flex h-[83px] w-full max-w-[1301px] items-center px-4 sm:px-6 lg:px-8">
        <div className="relative flex w-full items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex flex-col items-center">
              <Image
                src="/brand/logo.png"
                alt="GDSC Logo"
                width={73}
                height={73}
                className="h-14 w-14 rounded-[15px] sm:h-[73px] sm:w-[73px] sm:rounded-[19px]"
              />
              <span className="-mt-1 h-[19px] w-[103px] whitespace-nowrap text-sm font-medium leading-[120%] text-black sm:-mt-2 sm:text-[16px]">
                GDSC Fayoum
              </span>
            </Link>
          </div>

          <div className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-12 md:flex">
            <Link href="/" className={linkClassName('/')}>Home</Link>
            <Link href="/about" className={linkClassName('/about')}>About</Link>
            <div className="group relative">
              <button
                type="button"
                aria-haspopup="true"
                className={`${linkClassName('#events')} inline-flex items-center gap-1`}
              >
                Events
                <span
                  aria-hidden="true"
                  className="text-[10px] transition-transform duration-200 group-hover:rotate-180 group-focus-within:rotate-180"
                >
                  ▼
                </span>
              </button>
              <div className="invisible absolute left-1/2 top-full z-10 mt-4 w-36 -translate-x-1/2 translate-y-1 opacity-0 transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
                <div className="rounded-xl border border-gray-100 bg-white p-2 shadow-lg">
                  {['Test', 'Test', 'Test', 'Test'].map((item, index) => (
                    <Link
                      key={`${item}-${index}`}
                      href="#events"
                      className="block rounded-lg px-3 py-2 text-sm text-gray-600 transition-colors hover:bg-[#E9F8EF] hover:text-[#20B15A]"
                    >
                      {item}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <Link href="#contact" className={linkClassName('#contact')}>Contact</Link>
          </div>

          <div className="flex items-center gap-2">
            <Button
              variant="primary"
              size="normal"
              className="!w-[91px] !shrink-0 !px-3 !py-2 whitespace-nowrap text-sm sm:!px-6"
            >
              Join Us
            </Button>
            <button
              type="button"
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileMenuOpen}
              onClick={() => setMobileMenuOpen((open) => !open)}
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200 text-xl text-gray-700 md:hidden"
            >
              {mobileMenuOpen ? '×' : '☰'}
            </button>
          </div>
        </div>
        {mobileMenuOpen && (
          <div className="absolute left-4 right-4 top-[76px] flex flex-col gap-1 rounded-xl border border-gray-100 bg-white p-3 shadow-lg md:hidden">
            <Link href="/" onClick={() => setMobileMenuOpen(false)} className="rounded-lg px-3 py-2 text-sm text-gray-600 hover:bg-[#E9F8EF] hover:text-[#20B15A]">Home</Link>
            <Link href="/about" onClick={() => setMobileMenuOpen(false)} className="rounded-lg px-3 py-2 text-sm text-gray-600 hover:bg-[#E9F8EF] hover:text-[#20B15A]">About</Link>
            <a href="#events" onClick={() => setMobileMenuOpen(false)} className="rounded-lg px-3 py-2 text-sm text-gray-600 hover:bg-[#E9F8EF] hover:text-[#20B15A]">Events</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="rounded-lg px-3 py-2 text-sm text-gray-600 hover:bg-[#E9F8EF] hover:text-[#20B15A]">Contact</a>
          </div>
        )}
      </div>
    </nav>
  );
}
