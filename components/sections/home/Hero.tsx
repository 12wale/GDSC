"use client";

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import Image from 'next/image';
import { Button } from '../../ui/Button';

export function Hero() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="relative mt-[123px] flex min-h-[calc(100svh-123px)] w-full items-center justify-start overflow-hidden py-16 md:h-[80vh] md:min-h-[600px] md:py-0">
      {/* Background Image with Overlay */}
      <motion.div
        className="absolute -inset-[5%] z-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/home/hero/hero-section.png')" }}
        initial={{ scale: prefersReducedMotion ? 1 : 1.08 }}
        animate={{ scale: 1 }}
        transition={{
          duration: 1.6,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <div className="absolute inset-0 bg-[#87DE84]/20" />
        <div className="absolute inset-0 bg-black/50" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
        <motion.div
          className="max-w-2xl text-white"
          initial="hidden"
          animate="show"
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: { staggerChildren: 0.08, delayChildren: 0.05 }
            }
          }}
        >
          <motion.p
            variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeOut" } } }}
            className="mb-3 text-sm font-normal leading-[130%] text-gray-300 sm:text-base md:text-[24px]"
          >
            Where Every Expert Was Once a Curious Student
          </motion.p>
          <motion.h1
            variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeOut" } } }}
            className="mb-5 text-4xl font-bold leading-[115%] text-white sm:text-5xl md:mb-6 md:text-[84px]"
          >
            GDSC Fayoum
          </motion.h1>
          <motion.p
            variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeOut" } } }}
            className="mb-8 max-w-xl text-base font-medium leading-[150%] text-gray-200 sm:text-lg md:text-[20px]"
          >
            Every great developer starts with curiosity. GDSC is where future innovators begin their journey. We create opportunities to learn emerging technologies, collaborate on real-world projects, and develop the skills and confidence needed to build solutions that make a lasting impact.
          </motion.p>
          <motion.div variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeOut" } } }}>
            <Button
              variant="primary"
              size="wide"
              className="!h-[44px] !w-[130px] !rounded-[12px] !px-6 !py-2 !transition-none"
            >
              Join Us
              <Image src="/brand/leading.svg" alt="" width={20} height={20} aria-hidden="true" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
