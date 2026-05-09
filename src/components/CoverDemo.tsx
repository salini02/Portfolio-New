import React from "react";
import { Cover } from "@/components/ui/cover";

export function CoverDemo() {
  return (
    <div>
      <h1 className="text-2xl md:text-2xl lg:text-4xl font-semibold max-w-7xl mx-auto text-center mt-6 relative z-10 py-6 bg-clip-text text-gray-400">
        Building powerful web & mobile solutions that transform
        <br /> your <Cover>vision into reality.</Cover>
      </h1>
    </div>
  );
}
