"use client";

import { motion, useReducedMotion } from 'framer-motion';
import Image from 'next/image';
import { Button } from '../../ui/Button';
import { CursorFollowSvg } from '@/components/ui/CursorFollowSvg';


export function About() {
  const prefersReducedMotion = useReducedMotion();

  const revealTransition = {
    duration: prefersReducedMotion ? 0.25 : 0.7,
    ease: [0.22, 1, 0.36, 1] as const,
  };

  return (
    <section className="m-auto flex w-full justify-center overflow-hidden bg-[#fef2e8] px-5 py-14 sm:px-8 md:px-10 md:py-24" id="about">
      <div className="w-full max-w-7xl">

        {/* First Block: Who We Are */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "50px" }}
          transition={revealTransition}
          className="mb-16 flex w-full flex-col items-center gap-8 md:mb-24 md:flex-row md:gap-12"
        >
          <motion.div
            className="w-full flex-1"
            initial={{ opacity: 0, x: prefersReducedMotion ? 0 : -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ ...revealTransition, delay: prefersReducedMotion ? 0 : 0.08 }}
          >
            <h2 className="text-[24px] font-bold text-gray-900 mb-[28px] leading-tight">
              Who We Are: Turning Curiosity into Impact
            </h2>
            <p className="text-gray-600 text-[16px] leading-relaxed">
              GDSC Fayoum is a community of passionate university students who are eager to learn, innovate, and create solutions that leave a positive mark on our local and global community.
            </p>
          </motion.div>
          <motion.div
            className="w-full flex-1"
            initial={{ opacity: 0, x: prefersReducedMotion ? 0 : 28, scale: prefersReducedMotion ? 1 : 0.96 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ ...revealTransition, delay: prefersReducedMotion ? 0 : 0.18 }}
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[21px] bg-gray-100 shadow-xl">
              <Image
                src="/home/about/who-we-are.png"
                alt="GDSC Fayoum Team - Who We Are"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
                priority
              />
            </div>
          </motion.div>
        </motion.div>

        {/* Second Block: Our Vision */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "50px" }}
          transition={revealTransition}
          className="flex w-full flex-col items-center gap-8 md:flex-row-reverse md:gap-12"
        >
          <motion.div
            className="relative w-full flex-1 md:pt-16"
            initial={{ opacity: 0, x: prefersReducedMotion ? 0 : 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ ...revealTransition, delay: prefersReducedMotion ? 0 : 0.08 }}
          >
            <CursorFollowSvg
              src="/about/illustrations/about-mark.svg"
              width={158}
              height={87}
              className="pointer-events-none absolute right-[80px] top-[-100px] hidden h-[87px] w-[158px] md:block"
            />
            <CursorFollowSvg
              src="/about/illustrations/star-1.svg"
              width={35}
              height={34}
              className="pointer-events-none absolute -right-[-100px] top-8 hidden w-[35px] md:block"
            />
            <CursorFollowSvg
              src="/about/illustrations/vector.svg"
              width={55}
              height={59}
              className="pointer-events-none absolute -right-[-50px] top-5 hidden w-[55px] md:block"
            />
            <h2 className="mb-4 max-w-[380px] text-[24px] font-bold leading-[1.25] text-gray-900 md:text-[24px]">
              Our vision is to empower the next generation of innovators
            </h2>
            <p className="mb-6 max-w-[440px] text-[14px] leading-[1.65] text-gray-700 md:text-[13px]">
              We envision a future where students use technology to solve real-world problems. We provide a space for peer-to-peer learning, hands-on workshops, and collaborative projects, helping students transition from learners to creators and leaders in the tech industry.
            </p>
            <div className="flex justify-end md:pr-4">
              <Button variant="primary" size="wide">
                About Us
                <Image
                  src="/brand/leading.svg"
                  alt=""
                  width={20}
                  height={20}
                  aria-hidden="true"
                />
              </Button>
            </div>
          </motion.div>
          <motion.div
            className="w-full flex-1"
            initial={{ opacity: 0, x: prefersReducedMotion ? 0 : -28, scale: prefersReducedMotion ? 1 : 0.96 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ ...revealTransition, delay: prefersReducedMotion ? 0 : 0.18 }}
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[21px] bg-gray-100 shadow-xl">
              <Image
                src="/home/about/our-vision.png"
                alt="GDSC Fayoum - Our Vision"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="mt-10 flex justify-center md:mt-14"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <Image
            src="/brand/gdsc-fayoum-mark.png"
            alt="Google Developer Student Clubs Fayoum University"
            width={120}
            height={120}
            className="h-[90px] w-[90px] object-contain md:h-[120px] md:w-[120px]"
          />
        </motion.div>

      </div>
    </section>
  );
}
