"use client";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import React from "react";

export const Highlight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <motion.span
      initial={{
        backgroundSize: "0% 100%",
      }}
      animate={{
        backgroundSize: "100% 100%",
      }}
      transition={{
        duration: 2,
        ease: "linear",
        delay: 0.5,
      }}
      style={{
        backgroundRepeat: "no-repeat",
        backgroundPosition: "left center",
        display: "inline",
      }}
      className={cn(
        "center font-bold text-5xl md:text-7xl inline-block rounded-lg bg-gradient-to-r from-indigo-300 to-purple-300 px-3 dark:from-indigo-500 dark:to-purple-500",
        className,
      )}
    >
      {children}
    </motion.span>
  );
};
