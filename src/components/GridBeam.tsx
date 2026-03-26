"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const GridBeam: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className }) => (
  <div className={cn("relative w-full h-full", className)}>
    {/* Grid pattern */}
    <div
      className="absolute inset-0 pointer-events-none"
      style={{
        backgroundImage: `
          linear-gradient(rgba(45, 140, 60, 0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(45, 140, 60, 0.03) 1px, transparent 1px)
        `,
        backgroundSize: "60px 60px",
      }}
    />
    {/* Beams */}
    <Beam className="top-0 left-[20%]" delay={0} />
    <Beam className="top-0 left-[50%]" delay={1.2} />
    <Beam className="top-0 left-[80%]" delay={2.4} />
    {children}
  </div>
);

const Beam = ({
  className,
  delay = 0,
}: {
  className?: string;
  delay?: number;
}) => {
  return (
    <svg
      width="156"
      height="63"
      viewBox="0 0 156 63"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(
        "absolute pointer-events-none opacity-40",
        className
      )}
    >
      <path
        d="M31 .5h32M0 .5h32m30 31h32m-1 0h32m-1 31h32M62.5 32V0m62 63V31"
        stroke="url(#grad1)"
        strokeWidth={1.5}
      />
      <defs>
        <motion.linearGradient
          id={`grad-${delay}`}
          variants={{
            initial: {
              x1: "40%",
              x2: "50%",
              y1: "160%",
              y2: "180%",
            },
            animate: {
              x1: "0%",
              x2: "10%",
              y1: "-40%",
              y2: "-20%",
            },
          }}
          animate="animate"
          initial="initial"
          transition={{
            duration: 1.8,
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
            repeatDelay: 2,
            delay,
          }}
        >
          <stop stopColor="#22c55e" stopOpacity="0" />
          <stop stopColor="#22c55e" />
          <stop offset="0.325" stopColor="#15803d" />
          <stop offset="1" stopColor="#166534" stopOpacity="0" />
        </motion.linearGradient>
      </defs>
    </svg>
  );
};

export default GridBeam;
