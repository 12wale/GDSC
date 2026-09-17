"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface CursorFollowSvgProps {
  src: string;
  alt?: string;
  width: number;
  height: number;
  className?: string;
  strength?: number;
}

export function CursorFollowSvg({
  src,
  alt = "",
  width,
  height,
  className = "",
}: CursorFollowSvgProps) {
  return (
    <motion.div
      className={className}
      aria-hidden={alt ? undefined : true}
    >
      <Image src={src} alt={alt} width={width} height={height} className="h-auto w-full" />
    </motion.div>
  );
}
