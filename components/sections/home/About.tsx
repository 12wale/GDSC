"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Button } from '../../ui/Button';

export function About() {
  return (
    <section className="py-16 md:py-24 bg-[#fef2e8] overflow-hidden" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* First Block: Who We Are */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col md:flex-row items-center gap-8 md:gap-12 mb-16 md:mb-24 w-full"
        >
          <div className="w-full flex-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100/80 text-orange-700 text-xs font-semibold uppercase tracking-wider mb-3">
              <span>★</span> About GDSC Fayoum
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 md:mb-6 leading-tight">
              Who We Are: Turning Curiosity into Impact
            </h2>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
              GDSC Fayoum is a community of passionate university students who are eager to learn, innovate, and create solutions that leave a positive mark on our local and global community.
            </p>
          </div>
          <div className="w-full flex-1">
            <div className="relative w-full h-[260px] sm:h-[340px] md:h-[380px] rounded-2xl overflow-hidden shadow-xl bg-gray-100">
              <Image 
                src="/WhoWeAre.png" 
                alt="GDSC Fayoum Team - Who We Are" 
                fill 
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
                priority
              />
            </div>
          </div>
        </motion.div>

        {/* Second Block: Our Vision */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col md:flex-row-reverse items-center gap-8 md:gap-12 w-full"
        >
          <div className="w-full flex-1">
            <div className="flex items-center gap-3 mb-4">
               {/* Small badge icon */}
               <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center text-orange-500 shadow-sm">
                 <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
               </div>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 md:mb-6 leading-tight">
              Our vision is to empower the next generation of innovators
            </h2>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-6 md:mb-8">
              We envision a future where students use technology to solve real-world problems. We provide a space for peer-to-peer learning, hands-on workshops, and collaborative projects, helping students transition from learners to creators and leaders in the tech industry.
            </p>
            <Button variant="primary" size="lg">
              Join Us
            </Button>
          </div>
          <div className="w-full flex-1">
            <div className="relative w-full h-[260px] sm:h-[340px] md:h-[400px] rounded-2xl overflow-hidden shadow-xl bg-gray-100">
              <Image 
                src="/ourVision.png" 
                alt="GDSC Fayoum - Our Vision" 
                fill 
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
