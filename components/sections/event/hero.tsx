
"use client";

import Image from "next/image";
import {
  motion,
  MotionConfig,
  useMotionTemplate,
  useMotionValue,
} from "framer-motion";
import { useRef } from "react";

interface HeroProps {
  span: string;
  description: string;
  image: string;
}

export function Hero({ span, description, image }: HeroProps) {
  const imageContainerRef = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(-1000);
  const mouseY = useMotionValue(-1000);

  const spotlightBackground = useMotionTemplate`
    radial-gradient(
      circle 180px at ${mouseX}px ${mouseY}px,
      rgba(255, 255, 255, 0.25) 0%,
      rgba(255, 255, 255, 0.12) 35%,
      rgba(0, 0, 0, 0.25) 70%,
      rgba(0, 0, 0, 0.55) 100%
    )
  `;

  const handleMouseMove = (
    event: React.MouseEvent<HTMLDivElement>
  ) => {
    const rect = event.currentTarget.getBoundingClientRect();

    mouseX.set(event.clientX - rect.left);
    mouseY.set(event.clientY - rect.top);
  };

  const handleMouseLeave = () => {
    mouseX.set(-1000);
    mouseY.set(-1000);
  };

  const textVariants = {
    hidden: {
      opacity: 0,
      y: 35,
      filter: "blur(8px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  const highlightVariants = {
    hidden: {
      opacity: 0,
      y: 15,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        delay: 0.15,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  const imageVariants = {
    hidden: {
      opacity: 0,
      scale: 1.12,
      y: 35,
      clipPath: "inset(15% 0% 85% 0% round 20px)",
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      clipPath: "inset(0% 0% 0% 0% round 20px)",
      transition: {
        opacity: { duration: 0.6, delay: 0.2 },
        scale: {
          duration: 1.2,
          delay: 0.15,
          ease: [0.22, 1, 0.36, 1] as const,
        },
        y: {
          duration: 0.9,
          delay: 0.15,
          ease: [0.22, 1, 0.36, 1] as const,
        },
        clipPath: {
          duration: 1.1,
          delay: 0.15,
          ease: [0.76, 0, 0.24, 1] as const,
        },
      },
    },
  };

  return (
    <MotionConfig reducedMotion="user">
      <section className="w-full overflow-hidden bg-white px-5 pb-12 pt-[47px] sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[1290px]">
          {/* Animated Heading */}
          <motion.p
            initial="hidden"
            animate="visible"
            variants={textVariants}
            className="mb-6 max-w-[1290px] text-[26px] font-[400] leading-[1.35] text-black sm:text-[32px]"
          >
            <motion.span
              variants={highlightVariants}
              className="inline-block font-[700] text-[#20B15A]"
            >
              {span}
            </motion.span>{" "}
            {description}
          </motion.p>

          {/* Hero Image */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={imageVariants}
            className="group relative aspect-video w-full overflow-hidden rounded-[20px] bg-neutral-100"
          >
            <div
              ref={imageContainerRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className="absolute inset-0"
            >
              {/* Image with cinematic zoom */}
              <motion.div
                className="absolute inset-0"
                initial={{ scale: 1 }}
                animate={{ scale: [1, 1.025, 1] }}
                transition={{
                  duration: 12,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1.5,
                }}
              >
                <Image
                  src={image}
                  alt={`${span} event`}
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 1290px"
                  className="object-cover"
                />
              </motion.div>

              {/* Dark overlay */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-black/35 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              />

              {/* Moving Spotlight */}
              <motion.div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{
                  background: spotlightBackground,
                  mixBlendMode: "screen",
                }}
              />

              {/* Soft green ambient glow */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-[#20B15A]/10 via-transparent to-transparent"
              />

              {/* Bottom Gradient */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent"
              />
            </div>
          </motion.div>
        </div>
      </section>
    </MotionConfig>
  );
}
