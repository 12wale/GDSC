"use client";

import { motion, type Variants } from "framer-motion";
import { achievements } from "@/content/achievements";

const achievementVariants: Variants = {
    hidden: { opacity: 0, y: 28 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" },
    },
};

function AchievementCard({
    achievement,
}: {
    achievement: (typeof achievements)[number];
}) {
    const Icon = achievement.icon;

    return (
        <motion.article
            className="group relative flex flex-col items-center text-center"
            variants={achievementVariants}
            whileHover={{ y: -8 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
        >
            <motion.div
                className="pointer-events-none absolute -inset-5 rounded-3xl bg-gradient-to-b from-white/0 via-[#20B15A]/[0.04] to-white/0 opacity-0 blur-xl group-hover:opacity-100"
                transition={{ duration: 0.4 }}
                aria-hidden="true"
            />
            <div
                className={`relative mb-4 flex h-12 w-12 items-center justify-center rounded-full ${achievement.background} transition-shadow duration-500 group-hover:shadow-[0_10px_28px_rgba(32,177,90,0.2)]`}
            >
                <motion.div
                    whileHover={{ rotate: [0, -10, 10, 0], scale: 1.18 }}
                    transition={{ duration: 0.55, ease: "easeInOut" }}
                >
                    <Icon className={`h-6 w-6 ${achievement.color}`} strokeWidth={1.8} />
                </motion.div>
            </div>
            <h3 className="max-w-[220px] text-sm font-semibold leading-5 text-[#111111]">
                {achievement.title}
            </h3>
            <p className="mt-3 max-w-[240px] text-sm leading-5 text-[#111111]">
                {achievement.description}
            </p>
        </motion.article>
    );
}

export default function OurAchievements() {
    return (
        <section className="w-full bg-white px-6 py-16 sm:px-10 md:px-16 md:py-20">
            <div className="mx-auto max-w-[900px]">
                <motion.h2
                    className="mb-12 text-center text-3xl font-semibold text-[#111111] sm:text-4xl"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                >
                    Our Achievements
                </motion.h2>

                <motion.div
                    className="mx-auto grid max-w-[560px] grid-cols-1 gap-x-12 gap-y-12 sm:grid-cols-2 md:gap-x-16"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={{
                        hidden: {},
                        visible: { transition: { staggerChildren: 0.1 } },
                    }}
                >
                    {achievements.slice(0, 2).map((achievement) => (
                        <AchievementCard key={achievement.title} achievement={achievement} />
                    ))}
                </motion.div>

                <motion.div
                    className="mt-12 grid grid-cols-1 gap-x-10 gap-y-12 sm:grid-cols-2 md:grid-cols-3 md:gap-x-14 md:gap-y-14"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.12 }}
                    variants={{
                        hidden: {},
                        visible: { transition: { staggerChildren: 0.1 } },
                    }}
                >
                    {achievements.slice(2).map((achievement) => (
                        <AchievementCard key={achievement.title} achievement={achievement} />
                    ))}
                </motion.div>
            </div>
        </section>
    );
}