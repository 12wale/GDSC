"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, MotionConfig, useReducedMotion } from "framer-motion";
import { CursorFollowSvg } from "@/components/ui/CursorFollowSvg";

export interface TopSpeaker {
  name: string;
  image: string;
  role?: string;
  description?: string;
}

interface TopSpeakersProps {
  speakers: TopSpeaker[];
}

export function TopSpeakers({ speakers }: TopSpeakersProps) {
  const [activeSpeaker, setActiveSpeaker] = useState<string | null>(null);
  const shouldReduceMotion = useReducedMotion();

  const headingVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  const listVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 40,
      scale: 0.96,
      filter: "blur(6px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  return (
    <MotionConfig reducedMotion="user">
      <section className="w-full overflow-hidden bg-[#FFF4D6] px-5 py-10 sm:px-8 md:px-12 md:py-12">
        <div className="mx-auto max-w-[1290px]">
          {/* Heading */}
          <motion.h2
            variants={headingVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            className="mb-7 max-w-[430px] text-2xl font-bold leading-tight text-[#171717] sm:text-[32px] sm:leading-[1.5]"
          >
            Meet the top
            <br />
            incredible{" "}
            <span className="relative inline-block">
              speakers
              <div
                aria-hidden="true"
                className="absolute left-[120px] top-[-25px] top-0 h-[34px] w-[41px] bg-[#7A38FC] md:left-[180px] md:top-[-25px] md:h-[51.15px] md:w-[51.15px]"
                style={{
                  mask: "url('/about/illustrations/vector.svg') center / contain no-repeat",
                  WebkitMask:
                    "url('/about/illustrations/vector.svg') center / contain no-repeat",
                }}
              />
              <motion.span
                aria-hidden="true"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.7,
                  delay: 0.35,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="absolute bottom-[5px] left-[20px] h-[3px] w-full origin-left rounded-full bg-[#FFAB04]"
              />
            </span>
          </motion.h2>

          {/* Speaker Cards */}
          <motion.div
            variants={listVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.12 }}
            className="flex flex-wrap justify-center gap-6 sm:gap-8 lg:gap-[56px]"
          >
            {speakers.map((speaker, index) => {
              const isActive = activeSpeaker === `${speaker.name}-${index}`;

              return (
                <motion.article
                  key={`${speaker.name}-${index}`}
                  variants={cardVariants}
                  onClick={() => {
                    setActiveSpeaker((current) =>
                      current === `${speaker.name}-${index}`
                        ? null
                        : `${speaker.name}-${index}`,
                    );
                  }}
                  whileHover={
                    shouldReduceMotion
                      ? undefined
                      : {
                          y: -8,
                          scale: 1.015,
                          transition: {
                            duration: 0.3,
                            ease: "easeOut",
                          },
                        }
                  }
                  className={`group relative h-[420px] w-full max-w-[279px] shrink-0 cursor-pointer overflow-hidden rounded-xl bg-[#171717] shadow-[0_5px_20px_rgba(0,0,0,0.08)] transition-shadow duration-300 hover:shadow-[0_20px_45px_rgba(0,0,0,0.2)] sm:h-[460px] lg:h-[488px] ${
                    isActive ? "is-active" : ""
                  }`}
                  role="button"
                  tabIndex={0}
                  aria-expanded={isActive}
                  aria-label={`${speaker.name} details`}
                  onKeyDown={(event) => {
                    if (event.key === "Enter" || event.key === " ") {
                      event.preventDefault();
                      setActiveSpeaker((current) =>
                        current === `${speaker.name}-${index}`
                          ? null
                          : `${speaker.name}-${index}`,
                      );
                    }
                  }}
                >
                  {/* Speaker Image */}
                  <motion.div
                    className="absolute inset-0"
                    animate={
                      isActive && !shouldReduceMotion
                        ? { scale: 1.08 }
                        : { scale: 1 }
                    }
                    whileHover={
                      shouldReduceMotion ? undefined : { scale: 1.08 }
                    }
                    transition={{
                      duration: 0.65,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    <Image
                      src={speaker.image}
                      alt={speaker.name}
                      fill
                      sizes="(max-width: 640px) 90vw, 279px"
                      className="object-cover object-center"
                    />
                  </motion.div>

                  {/* Dark Gradient */}
                  <div
                    className={`pointer-events-none absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent transition-all duration-500 group-hover:from-black/95 group-hover:via-black/35 group-hover:to-black/10 ${
                      isActive ? "from-black/95 via-black/35 to-black/10" : ""
                    }`}
                  />

                  {/* Hover Overlay */}
                  <div
                    className={`pointer-events-none absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/10 ${
                      isActive ? "bg-black/10" : ""
                    }`}
                  />

                  {/* Default Name */}
                  <div
                    className={`absolute inset-x-0 bottom-0 z-10 p-4 transition-all duration-300 group-hover:translate-y-3 group-hover:opacity-0 ${
                      isActive ? "translate-y-3 opacity-0" : ""
                    }`}
                  >
                    <h3 className="truncate text-sm font-semibold text-white sm:text-base">
                      {speaker.name}
                    </h3>
                  </div>

                  {/* Speaker Details */}
                  <div
                    className={`absolute inset-x-0 bottom-0 z-20 translate-y-4 p-4 opacity-0 transition-all duration-500 ease-out group-hover:translate-y-0 group-hover:opacity-100 sm:p-5 ${
                      isActive ? "!translate-y-0 !opacity-100" : ""
                    }`}
                  >
                    <h3 className="text-base font-extrabold leading-tight text-white sm:text-lg">
                      {speaker.name}
                    </h3>

                    {speaker.role && (
                      <p className="mt-2 text-xs font-semibold leading-snug text-white sm:text-sm">
                        {speaker.role}
                      </p>
                    )}

                    {speaker.description && (
                      <p className="mt-2 line-clamp-4 text-xs leading-relaxed text-white/80">
                        {speaker.description}
                      </p>
                    )}

                    <div
                      className={`mt-3 h-[3px] w-0 rounded-full bg-white transition-all duration-500 group-hover:w-12 ${
                        isActive ? "!w-12" : ""
                      }`}
                    />
                  </div>
                </motion.article>
              );
            })}
          </motion.div>
        </div>
      </section>
    </MotionConfig>
  );
}
