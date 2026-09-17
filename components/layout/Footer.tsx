"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { FaFacebook, FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa';
import { CursorFollowSvg } from '@/components/ui/CursorFollowSvg';

function FooterMaskDecoration({
  src,
  className,
}: {
  src: string;
  className: string;
}) {
  return (
    <motion.div
      className={className}
      style={{
        maskImage: `url('${src}')`,
        WebkitMaskImage: `url('${src}')`,
        maskRepeat: 'no-repeat',
        WebkitMaskRepeat: 'no-repeat',
        maskSize: 'contain',
        WebkitMaskSize: 'contain',
      }}
      aria-hidden="true"
    />
  );
}

export function Footer() {
  const socialLinks = [
    {
      name: 'Facebook',
      icon: <FaFacebook size={18} />,
      href: 'https://facebook.com',
    },
    {
      name: 'LinkedIn',
      icon: <FaLinkedin size={18} />,
      href: 'https://linkedin.com',
    },
    {
      name: 'Instagram',
      icon: <FaInstagram size={18} />,
      href: 'https://instagram.com',
    },
    {
      name: 'GitHub',
      icon: <FaGithub size={18} />,
      href: 'https://github.com',
    },
  ];

  return (
    <footer
      className="relative overflow-hidden border-t border-orange-100 pb-6 pt-14 sm:pt-16"
      style={{
        background:
          'linear-gradient(98.75deg, rgba(194, 29, 30, 0.2) 38.01%, rgba(250, 187, 4, 0.2) 58.75%)',
      }}
    >
      <CursorFollowSvg
        src="/brand/spring.svg"
        alt=""
        width={103}
        height={77}
        className="pointer-events-none absolute left-8 top-24 hidden w-20 opacity-90 sm:block"
      />
      <FooterMaskDecoration
        src="/about/illustrations/star-1.svg"
        className="pointer-events-none absolute right-16 top-30 hidden h-12 w-9 bg-[#FEBF00] sm:block"
      />
      <FooterMaskDecoration
        src="/about/illustrations/vector.svg"
        className="pointer-events-none absolute right-6 top-24 hidden h-12 w-12 bg-[#FEBF00] sm:block"
      />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "50px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mx-auto max-w-[820px] px-5 sm:px-8"
      >
        <div className="relative mb-10 text-center sm:mb-12">
          <h2 className="mb-3 text-3xl font-bold tracking-tight text-[#111111] sm:text-4xl">
            Discover Our Latest Activities
          </h2>
          <p className="mx-auto max-w-[560px] text-xs leading-5 text-[#666666] sm:text-sm">
            Stay informed with all the latest updates and news about our events. Never miss a moment of our exciting and innovative gatherings in the world of technology and beyond.
          </p>
        </div>

        <div className="mb-8 flex flex-col items-center gap-7 sm:mb-9 md:flex-row md:items-center md:justify-between">
          {/* Logo & Chapter Brand */}
          <div className="flex items-center">
            <span className="text-lg font-bold tracking-tight text-[#20B15A]">
              GDSC Fayoum
            </span>
          </div>

          {/* Quick Navigation Links */}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 text-xs font-medium text-[#555555]">
            <a href="#" className="transition-colors hover:text-[#20B15A]">About</a>
            <a href="#events" className="transition-colors hover:text-[#20B15A]">Events</a>
            <a href="#contact" className="transition-colors hover:text-[#20B15A]">Contact Us</a>
            <a href="/about" className="transition-colors hover:text-[#20B15A]">About</a>
            <a href="#" className="transition-colors hover:text-[#20B15A]">Join Us</a>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-2">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                className="flex h-7 w-7 items-center justify-center rounded-full border border-[#FABB04] bg-transparent text-[#FABB04] transition-all duration-200 hover:bg-[#FABB04] hover:text-white hover:scale-105 active:scale-95"
              >
                {React.cloneElement(social.icon, { size: 13 })}
              </a>
            ))}
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-[#D4CFC9] pt-6 text-[10px] text-[#555555] sm:flex-row">
          <p>Copyright © Designmonks All Rights Reserved</p>
          <div className="flex items-center gap-4">
            <a href="#" className="transition-colors hover:text-[#20B15A]">Terms &amp; Conditions</a>
            <a href="#" className="transition-colors hover:text-[#20B15A]">Privacy Policy</a>
          </div>
        </div>
      </motion.div>
    </footer>
  );
}
