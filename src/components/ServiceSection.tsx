"use client";

import { motion } from "framer-motion";

import { CardHoverEffectDemo } from "./CardServiceDemo";
import { BackgroundLines } from "./ui/background-lines";

export function ServiceSection() {
  return (
    <section id="Services" className="relative py-4 bg-black overflow-hidden ">
      {/* Background lines */}
      <BackgroundLines className="absolute inset-0 z-0" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-5xl font-bold text-center mb-10 text-white"
        >
          My <span className="text-blue-500">Services</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="shadow-lg text-center"
        >
          <CardHoverEffectDemo />
        </motion.div>
      </div>
    </section>
  );
}

export default ServiceSection;
