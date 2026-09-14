"use client";

import {
    Camera,
    Code2,
    Layers3,
    MessagesSquare,
    Signpost,
    UsersRound,
    Video,
} from "lucide-react";
import { motion, type Variants } from "framer-motion";

const achievements = [
    {
        title: "5,000+ Students Reached",
        description: "Engaged thousands of students through our events and activities.",
        icon: Layers3,
        color: "text-[#FF5D5D]",
        background: "bg-[#FFF0F0]",
    },
    {
        title: "Content & Media",
        description: " Created podcasts and educational content to extend our impact beyond physical events.",
        icon: Video,
        color: "text-[#FF5D5D]",
        background: "bg-[#FFF0F0]",
    },
    {
        title: "Multiple Technical Workshops",
        description: "Delivered hands-on learning experiences across a variety of technology topics.",
        icon: Code2,
        color: "text-[#F4C343]",
        background: "bg-[#FFFAE8]",
    },
    {
        title: "Industry & Speaker Connections",
        description: "Connected students with professionals, founders, and experts from different fields.",
        icon: Camera,
        color: "text-[#7176E8]",
        background: "bg-[#F0F1FF]",
    },
    {
        title: "3,000+ Students",
        description: "Built a growing student community passionate about technology and innovation.",
        icon: UsersRound,
        color: "text-[#F4C343]",
        background: "bg-[#FFFAE8]",
    },
    {
        title: "Leadership & Community Building",
        description: "Developed student leaders and created opportunities for members to take active roles within the community.",
        icon: Signpost,
        color: "text-[#F4C343]",
        background: "bg-[#FFFAE8]",
    },
    {
        title: "Tech Entrepreneurship",
        description: " Expanded our community’s focus to include entrepreneurship, startups, AI, and turning ideas into real projects.",
        icon: MessagesSquare,
        color: "text-[#7176E8]",
        background: "bg-[#F0F1FF]",
    },
    {
        title: "4 Years of Community Building",
        description: "Continuously growing and creating opportunities for students since the beginning of our journey.",
        icon: Signpost,
        color: "text-[#F4C343]",
        background: "bg-[#FFFAE8]",
    },
];

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