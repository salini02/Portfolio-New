"use client";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "../components/ui/hero-highlight";

export function HeroHighlightDemo() {
  return (
    <HeroHighlight>
      <motion.h1
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: [20, -5, 0],
        }}
        transition={{
          duration: 0.5,
          ease: [0.4, 0.0, 0.2, 1],
        }}
        className="text-2xl px-4 md:text-3xl lg:text-4xl font-bold text-white max-w-3xl leading-relaxed lg:leading-snug text-center mx-auto "
      >
        Hello I&apos;m, <br />
        <Highlight className="text-black">Salini Herath</Highlight>
      </motion.h1>
    </HeroHighlight>
  );
}
