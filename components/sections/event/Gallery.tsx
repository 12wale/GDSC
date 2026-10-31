
"use client";

import Image from "next/image";
import {
  motion,
  MotionConfig,
  useReducedMotion,
} from "framer-motion";

interface GalleryImage {
  image: string;
}

interface GalleryProps {
  images: GalleryImage[];
}

export function Gallery({ images }: GalleryProps) {
  const shouldReduceMotion = useReducedMotion();

  const columns = [
    images.filter((_, index) => index % 4 === 0),
    images.filter((_, index) => index % 4 === 1),
    images.filter((_, index) => index % 4 === 2),
    images.filter((_, index) => index % 4 === 3),
  ];

  const heights = [
    ["h-[351px]", "h-[341px]", "h-[252px]"],
    ["h-[252px]", "h-[341px]", "h-[252px]"],
    ["h-[341px]", "h-[341px]", "h-[252px]"],
    ["h-[252px]", "h-[374px]", "h-[252px]"],
  ];

  return (
    <MotionConfig reducedMotion="user">
      <section
        id="gallery"
        className="w-full overflow-hidden bg-white px-5 py-12 sm:px-8 sm:py-16"
      >
        <div className="mx-auto max-w-[1290px]">
          {/* Gallery Heading */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{
              duration: 0.65,
              ease: "easeOut",
            }}
            className="mb-8 text-center"
          >
            <h2 className="text-[30px] font-bold tracking-tight text-[#171717] sm:text-[36px] md:text-[42px] lg:text-[46px]">
              Check our latest gallery
            </h2>

            <p className="mx-auto mt-2 max-w-[480px] text-sm leading-[1.7] text-[#666666] sm:text-base">
              Great moments, great people, and unforgettable memories. ✨
              <br />
              Your energy, presence, and smiles made this event even more
              special.
            </p>
          </motion.div>

          {/* Masonry Gallery */}
          <div className="grid grid-cols-2 items-start gap-3 sm:grid-cols-4 sm:gap-[15px]">
            {columns.map((column, columnIndex) => (
              <div
                key={columnIndex}
                className="flex min-w-0 flex-col gap-3 sm:gap-[15px]"
              >
                {column.map((item, imageIndex) => {
                  const globalIndex = columnIndex + imageIndex * 4;

                  return (
                    <motion.figure
                      key={`${item.image}-${globalIndex}`}
                      initial={{
                        opacity: 0,
                        y: 22,
                        scale: 0.97,
                      }}
                      whileInView={{
                        opacity: 1,
                        y: 0,
                        scale: 1,
                      }}
                      viewport={{
                        once: true,
                        amount: 0.15,
                      }}
                      transition={{
                        duration: 0.55,
                        delay: shouldReduceMotion
                          ? 0
                          : columnIndex * 0.08 + imageIndex * 0.06,
                        ease: "easeOut",
                      }}
                      whileHover={
                        shouldReduceMotion
                          ? undefined
                          : {
                              y: -4,
                              scale: 1.025,
                              transition: {
                                duration: 0.25,
                                ease: "easeOut",
                              },
                            }
                      }
                      className={`group relative w-full overflow-hidden rounded-[9px] bg-[#F5F0E8] ${
                        heights[columnIndex][
                          imageIndex % heights[columnIndex].length
                        ]
                      }`}
                    >
                      <Image
                        src={item.image}
                        alt={`GDSC event gallery photo ${globalIndex + 1}`}
                        fill
                        sizes="(max-width: 639px) 45vw, (max-width: 1023px) 22vw, 300px"
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />

                      {/* Hover Overlay */}
                      <div className="pointer-events-none absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/10" />

                      {/* Bottom Accent */}
                      <div className="pointer-events-none absolute bottom-0 left-0 h-[3px] w-0 rounded-r-full bg-white transition-all duration-500 group-hover:w-full" />
                    </motion.figure>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      </section>
    </MotionConfig>
  );
}
