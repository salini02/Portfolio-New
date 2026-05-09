"use client";
// import laptop from "../assets/dp.svg";

import laptop from "../assets/dp.jpg";


import Image from "next/image";
import { HeroHighlightDemo } from "./Herohighlight";
import { FloatingDockDemo } from "./FloatingDockDemo";

export function AboutSection() {
  return (
    <section
      id="About"
      className="h-[60rem] sm:h-[55rem] w-full bg-black flex flex-col items-center justify-center overflow-hidden relative px-6 sm:px-10 py-8 sm:py-16"
    >
      {/* Positioning the About Me title at the top */}
      <h1 className="text-white text-3xl sm:text-5xl font-bold mb-6">
        About <span className="text-blue-500">Me</span>
      </h1>

      <div className="flex flex-col sm:flex-row justify-center sm:justify-evenly space-y-8 sm:space-y-0 sm:space-x-10 mt-10">
        {/* Text Section */}
        <div className="w-full sm:w-1/2 text-center sm:text-left">
          <HeroHighlightDemo />
          <p className="text-white text-lg sm:text-xl font-semibold mt-4">
            A dedicated Web and Mobile App Developer with strong expertise in
            building scalable, high-performance applications. I specialize in
            developing full-stack solutions using modern technologies, focusing
            on microservices architecture, Docker, and cloud services to ensure
            reliability, scalability, and seamless integration.
          </p>
        </div>

        {/* Image Section */}
        <div className="flex flex-row sm:flex-col items-center justify-evenly relative">
          <Image
            src={laptop}
            alt="Laptop"
            className="w-72 h-auto object-contain rounded-md"
          />
          <div className="relative top-10 sm:top-0">
            <FloatingDockDemo />
          </div>
        </div>
      </div>
    </section>
  );
}
