
"use client";

import { useState } from "react";

import {
  Search,
  Rocket,
  Lightbulb,
  type LucideIcon,
} from "lucide-react";

import {
  motion,
  MotionConfig,
  useReducedMotion,
} from "framer-motion";

import type { WhatHappenCards } from "@/content/event";

interface WhatHappenedProps {
  cards: WhatHappenCards[];
}

const iconMap: Record<string, LucideIcon> = {
  glass: Search,
  search: Search,
  rocket: Rocket,
  lightbulb: Lightbulb,
};

function getIcon(iconName: string): LucideIcon {
  const normalizedName = iconName.trim().toLowerCase();
  return iconMap[normalizedName] ?? Lightbulb;
}

export function WhatHappened({ cards }: WhatHappenedProps) {
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const shouldReduceMotion = useReducedMotion();

  const headingVariants = {
    hidden: {
      opacity: 0,
      y: 25,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 35,
      scale: 0.97,
      filter: "blur(5px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        duration: 0.65,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  return (
    <MotionConfig reducedMotion="user">
      <section className="w-full overflow-hidden bg-white px-5 py-10 sm:px-8 md:px-12 md:py-12">
        <div className="mx-auto max-w-[1290px]">
          {/* Heading */}
          <motion.div
            variants={headingVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            className="mb-7 text-center"
          >
            <h2 className="text-3xl font-bold uppercase text-[#111111] sm:text-[40px] lg:text-[48px]">
              What Happened?
            </h2>

            <p className="mt-2 text-lg font-medium text-[#8A94A6] sm:text-2xl lg:text-[36px]">
              Three key experiences. One big career journey.
            </p>
          </motion.div>

          {/* Cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3"
          >
            {cards.map((card, index) => {
              const Icon = getIcon(card.icon);
              const isActive = activeCard === index;

              const toggleCard = () => {
                setActiveCard((current) =>
                  current === index ? null : index
                );
              };

              return (
                <motion.article
                  key={`${card.title}-${index}`}
                  variants={cardVariants}
                  onClick={toggleCard}
                  onKeyDown={(event) => {
                    if (event.key === "Enter" || event.key === " ") {
                      event.preventDefault();
                      toggleCard();
                    }
                  }}
                  role="button"
                  tabIndex={0}
                  aria-pressed={isActive}
                  whileHover={
                    shouldReduceMotion
                      ? undefined
                      : {
                          y: -7,
                          scale: 1.015,
                          transition: {
                            duration: 0.25,
                            ease: "easeOut",
                          },
                        }
                  }
                  className={`group relative flex min-h-[229px] cursor-pointer flex-col overflow-hidden rounded-xl bg-gradient-to-br from-[#FBE5E5] to-[#FFF5D9] p-5 shadow-[0_4px_16px_rgba(0,0,0,0.03)] transition-shadow duration-300 hover:shadow-[0_16px_35px_rgba(0,0,0,0.09)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#20B15A] sm:p-6 ${
                    isActive ? "-translate-y-1 shadow-[0_16px_35px_rgba(0,0,0,0.09)]" : ""
                  }`}
                >
                  {/* Decorative glow */}
                  <div
                    aria-hidden="true"
                    className={`pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-[#FFAB04]/10 blur-2xl transition-all duration-500 group-hover:scale-150 group-hover:bg-[#FFAB04]/20 ${
                      isActive ? "scale-150 bg-[#FFAB04]/20" : ""
                    }`}
                  />

                  {/* Card heading */}
                  <div className="relative z-10 mb-3 flex items-center gap-3">
                    <motion.div
                      animate={
                        isActive && !shouldReduceMotion
                          ? { rotate: [0, -8, 8, 0], scale: [1, 1.1, 1] }
                          : { rotate: 0, scale: 1 }
                      }
                      whileHover={
                        shouldReduceMotion
                          ? undefined
                          : {
                              rotate: [0, -8, 8, 0],
                              scale: 1.1,
                            }
                      }
                      transition={{ duration: 0.45 }}
                      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/70"
                    >
                      <Icon
                        size={28}
                        strokeWidth={1.8}
                        className="text-black"
                        aria-hidden="true"
                      />
                    </motion.div>

                    <h3 className="text-lg font-bold leading-snug text-[#171717] sm:text-xl lg:text-2xl">
                      {card.title}
                    </h3>
                  </div>

                  {/* Card description */}
                  <p className="relative z-10 mt-3 text-base leading-relaxed text-[#4B4545] sm:text-lg lg:text-xl">
                    {card.description}
                  </p>

                  {/* Bottom accent */}
                  <div
                    aria-hidden="true"
                    className={`absolute bottom-0 left-0 h-[3px] rounded-r-full bg-[#FBE5E5] transition-all duration-500 group-hover:w-full ${
                      isActive ? "w-full" : "w-0"
                    }`}
                  />
                </motion.article>
              );
            })}
          </motion.div>
        </div>
      </section>
    </MotionConfig>
  );
}
