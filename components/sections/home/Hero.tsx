"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../../ui/Button';

export function Hero() {
  return (
    <section className="relative h-[80vh] min-h-[600px] flex items-center justify-start mt-16">
      {/* Background Image with Overlay */}
      <motion.div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/heroSection.png')" }}
        initial={{ scale: 1.15 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
      </motion.div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div 
          className="max-w-2xl text-white"
          initial="hidden"
          animate="show"
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: { staggerChildren: 0.2, delayChildren: 0.3 }
            }
          }}
        >
          <motion.p 
            variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } } }}
            className="text-sm md:text-base font-medium text-gray-300 mb-2 uppercase tracking-wider"
          >
            Google Developer Student Clubs Fayoum
          </motion.p>
          <motion.h1 
            variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } } }}
            className="text-5xl md:text-7xl font-bold mb-6 text-white"
          >
            GDSC Fayoum
          </motion.h1>
          <motion.p 
            variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } } }}
            className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed"
          >
            Google Developer Student Clubs are community groups for college and university students interested in Google developer technologies. Students from all undergraduate or graduate programs with an interest in growing as a developer are welcome. By joining a GDSC, students grow their knowledge in a peer-to-peer learning environment and build solutions for local businesses and their community.
          </motion.p>
          <motion.div variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } } }}>
            <Button variant="primary" size="lg">
              Join Us
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
