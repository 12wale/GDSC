"use client";

import Image from "next/image";
import {
    motion,
    useScroll,
    useSpring,
    useTransform,
    type Variants,
} from "framer-motion";
import { useRef } from "react";

const journeyItems = [
    {
        year: "2022–2023",
        description:
            "GDSC Fayoum University began its journey by building a student community passionate about technology. From the very first season, we were able to reach a large number of students and create a space where they could connect, learn, and explore technology together.",
    },
    {
        year: "2023–2024",
        description:
            "The community continued to grow, with more students joining and engaging with GDSC. We focused on strengthening our presence within the university and creating a stronger sense of community among students interested in technology.",
    },
    {
        year: "2024–2025",
        description:
            "We focused on building a stronger and more organized community while expanding our activities and opportunities for students. Our goal was to create experiences that helped students learn, develop their skills, and connect with others.",
    },
    {
        year: "2025–2026",
        description:
            "Our journey reached a new level of impact. The community grew to 350+ students, while our events and activities reached 500+ students. We also expanded our focus beyond technology to include leadership, entrepreneurship, career development, and soft skills. 4 Years. Hundreds of Students. One Community.",
    },
];

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 28 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.65, ease: "easeOut" },
    },
};

export default function OurJourney() {
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
                    <div className="absolute bottom-0 left-0 top-0 w-[37px]">
                        <div className="absolute inset-y-0 left-[15px] w-px bg-[#B9DFC8]" />
                        <motion.div
                            className="absolute inset-0"
                            style={{ clipPath: stepperClip }}
                        >
                            <Image
                                src="/about_resources/imgs/Stepper Vertical.svg"
                                alt=""
                                fill
                                sizes="37px"
                                className="h-full w-full"
                                aria-hidden="true"
                            />
                        </motion.div>
                    </div>
                    <div className="absolute bottom-0 left-[195px] top-0 hidden w-px bg-[#2FA85D] md:block" />

                    <motion.div
                        className="space-y-10 sm:space-y-12 md:space-y-16"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.15 }}
                        variants={{
                            hidden: {},
                            visible: { transition: { staggerChildren: 0.16 } },
                        }}
                    >
                        {journeyItems.map((item) => (
                            <motion.article
                                key={item.year}
                                className="relative grid grid-cols-[32px_1fr] gap-5 sm:grid-cols-[40px_150px_1fr] sm:gap-5 md:grid-cols-[40px_125px_1fr] md:gap-[15px]"
                                variants={itemVariants}
                                whileHover={{ x: 8, scale: 1.01 }}
                                transition={{ type: "spring", stiffness: 220, damping: 22 }}
                            >
                                <div aria-hidden="true" />
                                <h3 className="pt-0.5 text-xl font-semibold  text-[#111111] sm:text-2xl">
                                    {item.year}
                                </h3>
                                <p className="col-start-2 text-sm font-[550] leading-6 text-[#1A202C] sm:col-start-3 sm:text-base sm:leading-7 md:pl-8">
                                    {item.description}
                                </p>
                            </motion.article>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}