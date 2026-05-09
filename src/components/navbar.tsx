"use client";
import React, { useState } from "react";
import { Menu, MenuItem, MobileMenu } from "../components/ui/navbar-menu";
import {
  IconHome,
  IconLayout,
  IconBrandAppleArcade,
  IconServer,
  IconDevices,
} from "@tabler/icons-react";
import { cn } from "@/lib/utils";
import { Link } from "react-scroll";

export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2" />
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <MobileMenu
        isOpen={isMobileOpen}
        toggleMenu={() => setIsMobileOpen(!isMobileOpen)}
      >
        <div className="flex flex-col space-y-4 text-sm">
          <div className="flex items-center space-x-2">
            <IconHome size={25} color="white" />
            <Link
              to="Home"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={() => setIsMobileOpen(false)}
              className="text-white text-xl"
            >
              Home
            </Link>
          </div>
          <div className="flex items-center space-x-2">
            <IconLayout size={25} color="white" />
            <Link
              to="About"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={() => setIsMobileOpen(false)}
              className="text-white text-xl"
            >
              About
            </Link>
          </div>
          <div className="flex items-center space-x-2">
            <IconBrandAppleArcade size={25} color="white" />
            <Link
              to="Services"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={() => setIsMobileOpen(false)}
              className="text-white text-xl"
            >
              Services
            </Link>
          </div>
          <div className="flex items-center space-x-2">
            <IconServer size={25} color="white" />
            <Link
              to="Projects"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={() => setIsMobileOpen(false)}
              className="text-white text-xl"
            >
              Projects
            </Link>
          </div>
          <div className="flex items-center space-x-2">
            <IconDevices size={25} color="white" />
            <Link
              to="Contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={() => setIsMobileOpen(false)}
              className="text-white text-xl"
            >
              Contact
            </Link>
          </div>
        </div>
      </MobileMenu>
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="Home"></MenuItem>
        <MenuItem setActive={setActive} active={active} item="About"></MenuItem>
        <MenuItem
          setActive={setActive}
          active={active}
          item="Services"
        ></MenuItem>
        <MenuItem
          setActive={setActive}
          active={active}
          item="Projects"
        ></MenuItem>
        <MenuItem
          setActive={setActive}
          active={active}
          item="Contact"
        ></MenuItem>
      </Menu>
    </div>
  );
}
