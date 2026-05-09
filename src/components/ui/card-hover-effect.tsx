"use client";

import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { Key, ReactElement, ReactNode, useState } from "react";
import { IconRosetteDiscountCheckFilled, IconX } from "@tabler/icons-react";
import { SparklesCore } from "./sparkles";

// Define a type for the item
type Item = {
  icon: JSX.Element;
  title: string;
  description: string;
  link: string;
  moreDetails: (string | number | boolean | ReactElement | ReactNode)[];
};

export const HoverEffect = ({
  items,
  className,
}: {
  items: Item[];
  className?: string;
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [modalItem, setModalItem] = useState<Item | null>(null); // Use the Item type here

  const handleOpenModal = (item: Item) => {
    setModalItem(item);
  };

  const handleCloseModal = () => {
    setModalItem(null);
  };

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-6",
        className
      )}
    >
      {items.map((item, idx) => (
        <div
          key={item.link}
          className="relative group block p-2 h-full w-full cursor-pointer"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
          onClick={() => handleOpenModal(item)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-slate-800/[0.8] block rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card>
            <div>
              <div className="w-12 h-12 mb-4 mx-auto">{item.icon}</div>
            </div>
            <CardTitle>{item.title}</CardTitle>
            <CardDescription>{item.description}</CardDescription>
          </Card>
        </div>
      ))}
      {/* Modal */}
      {modalItem && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center"
          onClick={handleCloseModal} // Background click closes the modal
        >
          <div
            className="relative w-full h-[95vh] md:w-[40rem] md:h-[40rem] bg-black rounded-md overflow-hidden flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()} // Prevent background clicks from closing
          >
            {/* Close Button */}
            <button
              onClick={handleCloseModal}
              className="absolute top-4 right-4 p-2 rounded-full bg-slate-700 hover:bg-slate-600 transition duration-300 text-white z-50"
            >
              <IconX size={20} />
            </button>

            {/* Sparkling Background */}
            <div className="absolute inset-0 w-full h-full z-0">
              {" "}
              {/* Add z-0 to Sparkles */}
              <SparklesCore
                id="tsparticlesfullpage"
                background="transparent"
                minSize={0.6}
                maxSize={1.4}
                particleDensity={100}
                particleColor="#FFFFFF"
                className="w-full h-full"
              />
            </div>

            {/* Modal Content */}
            <div className="relative z-10 text-white px-6">
              <div>
                <div className="w-12 h-12 mb-4 mx-auto">{modalItem.icon}</div>
              </div>
              <div className="mt-4">
                <h2 className="text-3xl md:text-6xl lg:text-5xl font-bold">
                  {modalItem.title}
                </h2>
                <p className="mt-8 text-lg text-justify">
                  {modalItem.description}
                </p>
                <div className="mt-4 text-md text-gray-300 text-left">
                  {modalItem.moreDetails.map(
                    (
                      detail:
                        | string
                        | number
                        | boolean
                        | ReactElement
                        | ReactNode, // This part was already good
                      index: Key | null | undefined
                    ) => (
                      <div
                        key={index}
                        className="flex justify-start items-center space-x-2 mb-2"
                      >
                        <IconRosetteDiscountCheckFilled className="text-blue-500 w-6 h-6" />
                        <p className="text-slate-400">{detail}</p>
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full p-4 overflow-hidden bg-black border border-white/[0.2] group-hover:border-slate-700 relative z-20",
        className
      )}
    >
      <div className="relative z-50">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};

export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4 className={cn("text-zinc-100 font-bold tracking-wide mt-4", className)}>
      {children}
    </h4>
  );
};

export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={cn(
        "mt-8 text-zinc-400 tracking-wide leading-relaxed text-sm",
        className
      )}
    >
      {children}
    </p>
  );
};
