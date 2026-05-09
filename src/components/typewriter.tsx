"use client";
import { TypewriterEffectSmooth } from "../components/ui/typewriter-effect";

export function TypewriterEffectSmoothDemo() {
  const words = [
    { text: "Crafting" },
    { text: "Exceptional" },
    { text: "Web" },
    { text: "&" },
    { text: "Mobile" },
    { text: "Experiences.", className: "text-blue-500 dark:text-blue-500" },
  ];

  return (
    <div className="flex flex-col items-center justify-center h-auto py-4 sm:h-[5rem] lg:h-[6rem] px-4">
      <TypewriterEffectSmooth words={words} />
    </div>
  );
}
