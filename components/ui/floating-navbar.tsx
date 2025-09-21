"use client";
import React from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
} from "motion/react";
import { cn } from "@/lib/utils";


export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();

  const visible = true;

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: 0, 
          opacity: 1, 
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
  "relative top-10 inset-x-0 max-w-2xl mx-auto z-50"
)}
        // className={cn(
        //   "fixed top-10 inset-x-0 max-w-2xl mx-auto z-50"
        // )}
      >
        <div className="flex items-center justify-center space-x-8 px-8 py-4 bg-white/10 dark:bg-black/20 backdrop-blur-md rounded-full border border-white/20 shadow-lg">
          {navItems.map((navItem: any, idx: number) => (
            <a
              key={`link-${idx}`}
              href={navItem.link}
              className={cn(
                "relative text-neutral-100 dark:text-neutral-100 items-center flex space-x-2 hover:text-white transition-colors duration-200"
              )}
            >
              <span className="block">{navItem.icon}</span>
              <span className="text-lg font-bold">{navItem.name}</span>
            </a>
          ))}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
