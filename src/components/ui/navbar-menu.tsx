"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { IconMenu3, IconX } from "@tabler/icons-react";
import { Link as ScrollingLink } from "react-scroll";

const transition = {
  type: "spring",
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

export const MenuItem = ({
  setActive,
  active,
  item,
  children,
}: {
  setActive: (item: string) => void;
  active: string | null;
  item: string;
  children?: React.ReactNode;
}) => {
  return (
    <div onMouseEnter={() => setActive(item)} className="relative">
      <motion.p
        transition={{ duration: 0.3 }}
        className="cursor-pointer hover:opacity-[0.9] text-white"
      >
        <ScrollingLink
          to={item}
          spy={true}
          smooth={true}
          duration={500}
          className="text-md"
        >
          {item}
        </ScrollingLink>
      </motion.p>
      {active !== null && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={transition}
        >
          {active === item && (
            <div className="absolute top-[calc(100%_+_1.2rem)] left-1/2 transform -translate-x-1/2 pt-4">
              <motion.div
                transition={transition}
                layoutId="active"
                className="bg-white backdrop-blur-sm rounded-2xl overflow-hidden border border-black/[0.2] dark:border-white/[0.2] shadow-xl"
              >
                <motion.div layout className="w-max h-full p-4">
                  {children}
                </motion.div>
              </motion.div>
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
};

export const Menu = ({
  setActive,
  children,
}: {
  setActive: (item: string | null) => void;
  children: React.ReactNode;
}) => {
  return (
    <nav
      onMouseLeave={() => setActive(null)}
      className="hidden sm:flex relative rounded-full border border-white/[0.1] bg-slate-950 shadow-input justify-center space-x-4 px-8 py-6"
    >
      {children}
    </nav>
  );
};

export const MobileMenu = ({
  isOpen,
  toggleMenu,
  children,
}: {
  isOpen: boolean;
  toggleMenu: () => void;
  children: React.ReactNode;
}) => {
  return (
    <div className="sm:hidden">
      <button
        onClick={toggleMenu}
        className="text-white text-2xl p-2 focus:outline-none"
      >
        {isOpen ? <IconX /> : <IconMenu3 />}
      </button>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={transition}
          className="absolute z-50 inset-x-0 top-[calc(100%_+_1rem)] bg-black h-[100vh] shadow-lg p-6 rounded-lg"
        >
          {children}
        </motion.div>
      )}
    </div>
  );
};

export const ProductItem = ({
  title,
  description,
  href,
  src,
}: {
  title: string;
  description: string;
  href: string;
  src: string;
}) => {
  return (
    <Link href={href} className="flex space-x-2">
      <Image
        src={src}
        width={140}
        height={70}
        alt={title}
        className="flex-shrink-0 rounded-md shadow-2xl"
      />
      <div>
        <h4 className="text-xl font-bold mb-1 text-black dark:text-white">
          {title}
        </h4>
        <p className="text-neutral-700 text-sm max-w-[10rem] dark:text-neutral-300">
          {description}
        </p>
      </div>
    </Link>
  );
};

export const HoveredLink = ({
  children,
  ...rest
}: React.ComponentProps<typeof Link>) => {
  return (
    <Link
      {...rest}
      className="text-white dark:text-neutral-200 hover:text-black text-xl "
    >
      {children}
    </Link>
  );
};
