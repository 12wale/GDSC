"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";

const tracks = [
    {
        title: "UI/UX DESIGN",
        description:
            "Learn how to design intuitive, user-friendly digital experiences. Explore user research, wireframing, prototyping, and visual interface design.",
        image: "/tracks/uiux.jpg",
    },
    {
        title: "FRONT-END DEVELOPMENT",
        description:
            "Learn how to turn designs into interactive and responsive websites. Explore HTML, CSS, JavaScript, and modern front-end tools.",
        image: "/tracks/frontend.jpg",
    },
    {
        title: "BACK-END DEVELOPMENT",
        description:
            "Learn how to build the logic and infrastructure behind web applications. Explore databases, APIs, server-side programming, and application security.",
        image: "/tracks/backend.jpg",
    },
];

const cardVariants: Variants = {
    hidden: { opacity: 0, y: 32 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.65, ease: "easeOut" },
    },
};

export default function OurTracks() {
    return (
        <section
            id="tracks"
            className="relative w-full overflow-hidden px-5 py-14 sm:px-8 md:px-12 md:py-16"
            style={{
                background:
                    "linear-gradient(110deg, rgba(194, 29, 30, 0.1) 10%, #FFFAF9 52%, rgba(255, 171, 4, 0.1) 90%)",
            }}
        >
            <motion.div
                className="pointer-events-none absolute -left-24 bottom-10 h-64 w-64 rounded-full bg-white/60 blur-3xl"
                animate={{ x: [0, 24, 0], scale: [1, 1.1, 1] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                aria-hidden="true"
            />
            <div className="mx-auto max-w-[1180px]">
                <motion.h2
                    className="mb-8 text-center text-3xl font-semibold text-[#111111] sm:text-4xl"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                >
                    Our Tracks
                </motion.h2>

                <motion.div
                    className="grid grid-cols-1 gap-6 md:grid-cols-3"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.15 }}
                    variants={{
                        hidden: {},
                        visible: { transition: { staggerChildren: 0.14 } },
                    }}
                >
                    {tracks.map((track) => (
                        <motion.article
                            key={track.title}
                            className="group overflow-hidden rounded-sm bg-white shadow-[0_8px_18px_rgba(31,47,32,0.12)]"
                            variants={cardVariants}
                            whileHover={{ y: -10, rotateX: 2, rotateY: -2 }}
                            whileTap={{ scale: 0.98 }}
                            transition={{ type: "spring", stiffness: 220, damping: 20 }}
                            style={{ transformPerspective: 900 }}
                        >
                            <div className="relative aspect-[1.7] w-full overflow-hidden bg-[#F7FAFC]">
                                <motion.div
                                    className="absolute inset-0"
                                    whileHover={{ scale: 1.08 }}
                                    transition={{ duration: 0.7, ease: "easeOut" }}
                                >
                                    <Image
                                        src={track.image}
                                        alt={track.title}
                                        fill
                                        sizes="(max-width: 768px) 100vw, 33vw"
                                        className="object-cover"
                                    />
                                </motion.div>
                                <motion.div
                                    className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-[#20B15A]/10 via-transparent to-white/30 opacity-0"
                                    whileHover={{ opacity: 1 }}
                                    transition={{ duration: 0.5 }}
                                    aria-hidden="true"
                                />
                            </div>
                            <motion.div
                                className="min-h-[184px] px-5 py-5"
                                whileHover={{ backgroundColor: "#fffdf8" }}
                                transition={{ duration: 0.35 }}
                            >
                                <h3 className="text-lg font-bold uppercase leading-7 text-[#231F20]">
                                    {track.title}
                                </h3>
                                <p className="mt-2 text-sm leading-5 text-[#A3A3A3]">
                                    {track.description}
                                </p>
                            </motion.div>
                        </motion.article>
                    ))}
                </motion.div>

                <motion.a
                    href="#tracks"
                    className="mx-auto mt-7 block w-fit text-base font-medium text-[#4285F4] underline underline-offset-4 transition-colors hover:text-[#1967D2]"
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                >
                    See more <span aria-hidden="true">→</span>
                </motion.a>
            </div>
        </section>
    );
}
