"use client";

import { motion, type Variants } from "framer-motion";
import Image from "next/image";
import { events } from "@/content/home";
import { CursorFollowSvg } from "@/components/ui/CursorFollowSvg";

const cardVariants: Variants = {
  hidden: { opacity: 0 },
  visible: (index: number) => ({
    opacity: 1,
    transition: {
      duration: 0.7,
      delay: index * 0.12,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export function Events() {
  return (
    <section
      className="relative overflow-hidden py-20"
      id="events"
      style={{
        background:
          "linear-gradient(110deg, rgba(194, 29, 30, 0.1) 10%, #FFFAF9 52%, rgba(255, 171, 4, 0.1) 90%)",
      }}
    >
      <CursorFollowSvg
        src="/home/events/events-left.svg"
        width={110}
        height={95}
        className="pointer-events-none absolute left-0 top-8 w-20 sm:w-28"
      />

      <CursorFollowSvg
        src="/home/events/events-right.svg"
        width={110}
        height={95}
        className="pointer-events-none absolute right-0 top-0 w-20 sm:w-28"
      />

      <motion.div
        className="pointer-events-none absolute -right-24 bottom-0 h-64 w-64 rounded-full bg-[#FFAB04]/10 blur-3xl"
        animate={{ opacity: [0.3, 0.65, 0.3] }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-5xl px-6 sm:px-10 lg:px-16">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mb-8 flex flex-col items-start gap-2 sm:mb-10 sm:flex-row sm:items-center sm:gap-5"
        >
          <h2 className="text-2xl font-bold tracking-tight text-[#0F0B0C] sm:text-3xl">
            Our Biggest Event
          </h2>

          <p className="hidden max-w-md text-xs leading-5 text-[#0F0B0C] sm:block">
            <span className="text-[#20B15A]">Tech Event 2023</span> Here at
            Google DSC Fayoum University, we&apos;ve created a game just for
            you, where you&apos;re the hero
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="flex h-[520px] flex-col gap-4 sm:h-[400px] md:h-[290px] md:flex-row md:gap-5"
        >
          {events.map((event, index) => (
            <motion.article
              key={event.title}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
              whileHover={{
                flexGrow: index === 0 ? 2.3 : 1.45,
                y: -4,
                zIndex: 10,
                boxShadow: "0 24px 45px rgba(15, 11, 12, 0.25)",
                transition: {
                  duration: 0.3,
                  ease: "easeOut",
                },
              }}
              layout
              transition={{
                layout: {
                  duration: 0.35,
                  ease: [0.22, 1, 0.36, 1],
                },
              }}
              style={{
                flexGrow: index === 0 ? 1.7 : 0.85,
              }}
              className="group relative min-h-0 flex-1 basis-0 cursor-pointer overflow-hidden rounded-2xl shadow-md"
            >
              <motion.div
                className="absolute inset-0"
                whileHover={{ scale: 1.08 }}
                transition={{
                  duration: 0.8,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <Image
                  src={event.src}
                  alt={event.title}
                  fill
                  priority={index === 0}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </motion.div>

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent" />

              <motion.div
                className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-r from-white/0 via-white/20 to-white/0 opacity-0"
                whileHover={{ opacity: 1 }}
                transition={{
                  duration: 0.8,
                  ease: "easeInOut",
                }}
                aria-hidden="true"
              />

              <motion.div
                className="absolute bottom-4 left-4 right-4 z-10 text-white sm:bottom-5 sm:left-5"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                  delay: 0.25 + index * 0.12,
                  duration: 0.45,
                }}
              >
                <p className="text-[9px] font-semibold uppercase tracking-widest text-white/80">
                  {event.subtitle}
                </p>

                <h3 className="mt-1 text-lg font-medium leading-tight sm:text-xl">
                  {event.title}
                </h3>
              </motion.div>
            </motion.article>
          ))}
        </motion.div>

        <motion.a
          href={`/event/2022`}
          className="mx-auto mt-8 block w-fit text-sm font-medium text-[#20B15A] underline underline-offset-4 transition-colors hover:text-[#168844]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.6,
            delay: 0.2,
            ease: "easeOut",
          }}
        >
          See more <span aria-hidden="true">→</span>
        </motion.a>
      </div>
    </section>
  );
}
