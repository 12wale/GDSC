"use client";

import Image from "next/image";
import {
    motion,
    useScroll,
    useReducedMotion,
    useSpring,
    useTransform,
} from "framer-motion";
import { useRef } from "react";
import { journeyItems } from "@/content/about";

export default function OurJourney() {
    const prefersReducedMotion = useReducedMotion();
    const timelineRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: timelineRef,
        offset: ["start 75%", "end 35%"],
    });
    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 90,
        damping: 22,
        mass: 0.35,
    });
    const stepperClip = useTransform(
        smoothProgress,
        (progress) => `inset(0 0 ${(1 - progress) * 100}% 0)`,
    );

    return (
        <section
            className="relative w-full overflow-hidden px-5 py-14 sm:px-8 md:px-12 md:py-16"
            style={{
                background:
                    "linear-gradient(110deg, rgba(194, 29, 30, 0.1) 10%, #FFFAF9 52%, rgba(255, 171, 4, 0.1) 90%)",
            }}
        >
            <motion.div
                className="pointer-events-none absolute -right-28 top-24 h-72 w-72 rounded-full bg-white/50 blur-3xl"
                animate={{ scale: [1, 1.12, 1], opacity: [0.35, 0.6, 0.35] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                aria-hidden="true"
            />
            <div className="mx-auto max-w-[1180px]">
                <motion.h2
                    className="mb-10 text-3xl font-semibold text-[#111111] sm:text-4xl"
                    initial={{ opacity: 0, x: -24 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    whileHover={{ x: 8 }}
                >
                    Our Journey
                </motion.h2>

                <div ref={timelineRef} className="relative">
                    <div className="absolute bottom-0 left-0 top-0 w-[32px] md:bottom-auto md:h-[1240px]">
                        <div className="absolute inset-y-0 left-[15px] w-px bg-[#B9DFC8]" />
                        <motion.div
                            className="absolute inset-0"
                            style={{ clipPath: stepperClip }}
                        >
                            <Image
                                src="/about/timeline/stepper-vertical.svg"
                                alt=""
                                fill
                                sizes="32px"
                                className="h-full w-full"
                                aria-hidden="true"
                            />
                        </motion.div>
                    </div>
                    <div className="absolute bottom-0 left-[180px] top-0 hidden w-px bg-[#2FA85D] md:block" />

                    <div className="space-y-10 sm:space-y-12 md:space-y-0">
                        {journeyItems.map((item, index) => (
                            <motion.article
                                key={item.year}
                                className={`relative grid min-h-[180px] grid-cols-[32px_105px_minmax(0,1fr)] gap-4 sm:grid-cols-[40px_150px_minmax(0,1fr)] sm:gap-5 md:grid-cols-[32px_120px_minmax(0,1fr)] md:gap-5 ${
                                    index === journeyItems.length - 1 ? "md:min-h-0" : "md:min-h-[390px]"
                                }`}
                                initial={{
                                    opacity: 0,
                                    y: prefersReducedMotion ? 0 : 46,
                                    scale: prefersReducedMotion ? 1 : 0.94,
                                }}
                                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                viewport={{
                                    once: true,
                                    amount: prefersReducedMotion ? 0.25 : 0.6,
                                    margin: "-12% 0px -12% 0px",
                                }}
                                whileHover={{ x: 8, scale: 1.01 }}
                                transition={{
                                    type: prefersReducedMotion ? "tween" : "spring",
                                    stiffness: 120,
                                    damping: 18,
                                    mass: 0.7,
                                    duration: prefersReducedMotion ? 0.25 : undefined,
                                    delay: prefersReducedMotion ? 0 : index * 0.08,
                                }}
                                style={{ transformOrigin: "center center" }}
                            >
                                <div aria-hidden="true" />
                                <h3 className="whitespace-nowrap pt-0.5 text-lg font-semibold text-[#111111] sm:text-2xl md:pt-0 md:text-xl">
                                    {item.year}
                                </h3>
                                <p className="col-start-3 text-xs font-[550] leading-5 text-[#1A202C] sm:text-base sm:leading-7 md:pl-6">
                                    {item.description}
                                </p>
                            </motion.article>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}