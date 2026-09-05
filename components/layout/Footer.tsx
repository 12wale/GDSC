"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaFacebook, FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa';

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
    <footer className="bg-[#fef2e8] pt-16 pb-8 border-t border-orange-100 overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "50px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="text-center mb-12 relative">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100/80 text-orange-700 text-xs font-semibold uppercase tracking-wider mb-3">
            <span>✦</span> Community & Connection
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 tracking-tight">
            Discover Our Latest Activities
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Stay connected with all our latest news and events. Be part of our growing community and help shape the future of technology with GDSC Fayoum.
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-6">
          {/* Logo & Chapter Brand */}
          <div className="flex items-center gap-3">
            <Image 
              src="/logo.png" 
              alt="GDSC Logo" 
              width={42} 
              height={42} 
              className="object-contain" 
            />
            <span className="font-bold text-gray-900 text-xl tracking-tight">
              GDSC <span className="text-orange-500">Fayoum</span>
            </span>
          </div>

          {/* Quick Navigation Links */}
          <div className="flex flex-wrap justify-center gap-6 sm:gap-8 text-sm font-medium text-gray-700">
            <a href="#" className="hover:text-orange-500 transition-colors">Home</a>
            <a href="#about" className="hover:text-orange-500 transition-colors">About Us</a>
            <a href="#events" className="hover:text-orange-500 transition-colors">Events</a>
            <a href="#team" className="hover:text-orange-500 transition-colors">Team</a>
            <a href="#contact" className="hover:text-orange-500 transition-colors">Contact</a>
          </div>

          {/* Orange Themed Social Icons */}
          <div className="flex items-center gap-3">
            {socialLinks.map((social) => (
              <a 
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                className="w-10 h-10 rounded-full border border-orange-200 bg-white text-orange-500 shadow-sm flex items-center justify-center transition-all duration-300 hover:bg-orange-500 hover:text-white hover:border-orange-500 hover:scale-110 active:scale-95"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 pt-8 border-t border-orange-200/60 gap-4">
          <p>© {new Date().getFullYear()} Google Developer Student Clubs Fayoum. All Rights Reserved.</p>
          <div className="flex items-center gap-2">
             <Image src="/logo.png" alt="GDSC Logo" width={22} height={22} className="object-contain" />
             <span className="font-semibold text-gray-700">Google Developer Student Clubs</span>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-orange-600 transition-colors">Privacy Policy</a>
            <span>•</span>
            <a href="#" className="hover:text-orange-600 transition-colors">Terms of Service</a>
          </div>
        </div>
      </motion.div>
    </footer>
  );
}
