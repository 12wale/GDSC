"use client";

import Image from 'next/image';
import { useRef, useState, type MouseEvent } from 'react';
import {
    AnimatePresence,
    motion,
    useScroll,
    useMotionValue,
    useSpring,
    useTransform,
    type Variants,
} from 'framer-motion';

const particleColors = ['#20B15A', '#FFAB04', '#4285F4', '#C21D1E', '#FF6B6B', '#8B5CF6'];

const contentVariants: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.7,
            ease: 'easeOut',
        },
    },
};

export default function AboutUs() {
    const sectionRef = useRef<HTMLElement>(null);
    const cardRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"],
    });
    const titleY = useTransform(scrollYProgress, [0, 1], [28, -28]);
    const glowY = useTransform(scrollYProgress, [0, 1], [-40, 40]);
    const cardX = useSpring(useMotionValue(0), { stiffness: 180, damping: 18 });
    const cardY = useSpring(useMotionValue(0), { stiffness: 180, damping: 18 });
    const rotateX = useSpring(useMotionValue(0), { stiffness: 180, damping: 18 });
    const rotateY = useSpring(useMotionValue(0), { stiffness: 180, damping: 18 });
    const cardScale = useSpring(useMotionValue(1), { stiffness: 420, damping: 18, mass: 0.45 });
    const [particleBurst, setParticleBurst] = useState<{ id: number; x: number; y: number } | null>(null);

    const handleCardMouseMove = (event: MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current) return;

        const bounds = cardRef.current.getBoundingClientRect();
        const normalizedX = (event.clientX - bounds.left) / bounds.width - 0.5;
        const normalizedY = (event.clientY - bounds.top) / bounds.height - 0.5;

        cardX.set(normalizedX * 10);
        cardY.set(normalizedY * 8);
        rotateX.set(normalizedY * -5);
        rotateY.set(normalizedX * 5);
    };

    const resetCardPosition = () => {
        cardX.set(0);
        cardY.set(0);
        rotateX.set(0);
        rotateY.set(0);
    };

    const handleCardClick = (event: MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current) return;

        const bounds = cardRef.current.getBoundingClientRect();
        const burst = {
            id: Date.now(),
            x: event.clientX - bounds.left,
            y: event.clientY - bounds.top,
        };

        setParticleBurst(burst);
        cardScale.set(0.955);
        requestAnimationFrame(() => cardScale.set(1));

        window.setTimeout(() => {
            setParticleBurst((currentBurst) =>
                currentBurst?.id === burst.id ? null : currentBurst,
            );
        }, 950);
    };

    return (
        <div className='w-full flex justify-center mt-[30px]' style={{
            background: 'linear-gradient(105deg, rgba(255, 171, 4, 0.1) 10%, #FFFAF9 48%, rgba(194, 29, 30, 0.1) 90%)',
        }}>
            <section
                ref={sectionRef}
                className="relative w-full overflow-hidden mt-[24px] px-6 py-12 sm:px-10 md:px-[49.25px] md:py-16 flex items-center justify-center flex-col"
            >
                <motion.div
                    className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-[#FFAB04]/10 blur-3xl"
                    style={{ y: glowY }}
                    animate={{ x: [0, 30, 0], scale: [1, 1.15, 1] }}
                    transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
                    aria-hidden="true"
                />
                <motion.div
                    className="pointer-events-none absolute -right-32 bottom-24 h-80 w-80 rounded-full bg-[#C21D1E]/10 blur-3xl"
                    animate={{ x: [0, -24, 0], y: [0, -16, 0] }}
                    transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
                    aria-hidden="true"
                />
                {/* Main heading */}
                <motion.header
                    className="relative text-center"
                    style={{ y: titleY }}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.35 }}
                    variants={{
                        hidden: {},
                        visible: {
                            transition: {
                                staggerChildren: 0.14,
                            },
                        },
                    }}
                >
                    <motion.div
                        className="pointer-events-none absolute right-[-48px] top-[68px] hidden h-[44px] w-[68px] items-start sm:flex md:right-[-86px] md:top-[72px] md:h-[56px] md:w-[86px]"
                        initial={{ opacity: 0, x: 18, rotate: 8 }}
                        whileInView={{ opacity: 1, x: 0, rotate: 0 }}
                        viewport={{ once: true, amount: 0.35 }}
                        transition={{ duration: 0.7, delay: 0.35, ease: 'easeOut' }}
                    >

                        <Image
                            src="/about_resources/imgs/Star 1.svg"
                            alt=""
                            width={55}
                            height={59}
                            className="absolute left-0 top-[8px] h-[27px] w-[28px] md:left-[70px] md:top-[40px] md:h-[33.54px] md:w-[34.11px]"
                            aria-hidden="true"
                        />
                        <Image
                            src="/about_resources/imgs/Vector.svg"
                            alt=""
                            width={35}
                            height={34}
                            className="absolute left-[24px] top-0 h-[44px] w-[41px] md:left-[100px] md:top-[30px] md:h-[55.22px] md:w-[51.15px]"
                            aria-hidden="true"
                        />
                    </motion.div>
                    <motion.h1
                        className="
                    m-0
                    max-w-[850px]
                    text-[38px]
                    font-semibold
                    leading-[1.16]
                    tracking-normal
                    text-black
                    transition-[color,-webkit-text-stroke] duration-300
                    hover:text-transparent
                    hover:[-webkit-text-stroke:1.5px_#20AE63]
                    sm:text-[48px]
                    md:text-[60px]
                "
                        variants={contentVariants}
                        whileHover={{ scale: 1.015 }}
                        transition={{ type: "spring", stiffness: 220, damping: 18 }}
                    >
                        <span>
                            Who <span className="text-[#20AE63]">We Are</span>
                        </span>
                        <br />
                        <span>
                            Turning Curiosity <span className="text-[#20AE63]">Into Impact</span>
                        </span>
                    </motion.h1>

                    {/* Description */}
                    <motion.p
                        className="
                    mx-auto
                    mt-5
                    max-w-[720px]
                    text-[20px]
                    font-normal
                    leading-7
                    text-center
                    tracking-normal
                    text-[#1A202C]
                "
                        variants={contentVariants}
                    >
                        GDSC Fayoum is a space where curiosity meets creativity.
                        We bring students together to learn, build, collaborate, and{' '}
                        <span className="text-[#20AE63]">turn their passion for technology</span> into opportunities for
                        growth and <span className="text-[#20AE63]">impact</span>.
                    </motion.p>
                </motion.header>

                {/* Image */}
                <motion.div
                    ref={cardRef}
                    className="relative mt-8 w-full max-w-[976px] overflow-hidden rounded-2xl"
                    initial={{ opacity: 0, y: 36, scale: 0.96 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.9, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
                    onMouseMove={handleCardMouseMove}
                    onMouseLeave={resetCardPosition}
                    onClick={handleCardClick}
                    style={{
                        x: cardX,
                        y: cardY,
                        rotateX,
                        rotateY,
                        scale: cardScale,
                        transformPerspective: 900,
                    }}
                >
                    <motion.div
                        animate={{ y: [0, -5, 0] }}
                        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                        whileHover={{ scale: 1.035 }}
                        className="transition-transform duration-700"
                    >
                        <Image
                            src="/about_resources/imgs/aboutus-image.png"
                            alt="About us"
                            width={976}
                            height={628}
                            className="
                    h-auto
                    w-full
                    max-w-[976px]
                    object-cover
                "
                        />
                    </motion.div>
                    <div
                        className="pointer-events-none absolute inset-0"
                        style={{ backgroundColor: '#FEF8E62E' }}
                        aria-hidden="true"
                    />
                    <AnimatePresence>
                        {particleBurst && (
                            <motion.div
                                key={particleBurst.id}
                                className="pointer-events-none absolute inset-0 z-20"
                                initial={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                            >
                                <motion.div
                                    className="absolute h-16 w-16 rounded-full border-2 border-white/80"
                                    style={{ left: particleBurst.x - 32, top: particleBurst.y - 32 }}
                                    initial={{ scale: 0.2, opacity: 0.8 }}
                                    animate={{ scale: [0.2, 1.5, 2.2], opacity: [0.8, 0.35, 0] }}
                                    transition={{ duration: 0.8, ease: "easeOut" }}
                                />
                                {particleColors.map((color, index) => {
                                    const angle = (Math.PI * 2 * index) / particleColors.length;
                                    const distance = 52 + (index % 3) * 16;

                                    return (
                                        <motion.span
                                            key={`${particleBurst.id}-${color}`}
                                            className="absolute h-2.5 w-2.5 rounded-full shadow-[0_0_12px_currentColor]"
                                            style={{
                                                left: particleBurst.x - 5,
                                                top: particleBurst.y - 5,
                                                backgroundColor: color,
                                                color,
                                            }}
                                            initial={{ x: 0, y: 0, opacity: 0, scale: 0.2 }}
                                            animate={{
                                                x: Math.cos(angle) * distance,
                                                y: Math.sin(angle) * distance,
                                                opacity: [0, 1, 0],
                                                scale: [0.2, 1.5, 0],
                                                rotate: 180 + index * 45,
                                            }}
                                            transition={{
                                                duration: 0.8 + (index % 3) * 0.08,
                                                delay: index * 0.025,
                                                ease: [0.16, 1, 0.3, 1],
                                            }}
                                        />
                                    );
                                })}
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>
            </section>
        </div>
    );
}