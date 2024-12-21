"use client";

import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface ButtonProps extends Omit<HTMLMotionProps<"button">, "children"> {
  variant?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  className?: string;
}

const Button = ({
  variant = "primary",
  size = "md",
  children,
  className,
  ...props
}: ButtonProps) => {
  const baseStyles =
    "relative font-semibold tracking-wide outline-none overflow-hidden group";

  const variants = {
    primary: `
      text-white bg-marine
      border-2 border-marine
      hover:bg-marine/90
      hover:border-marine/80
    `,
    secondary: `
      text-marine bg-transparent
      border-2 border-marine/30
      hover:border-marine
      hover:bg-marine/5
    `,
  };

  const sizes = {
    sm: "text-sm px-6 py-3 rounded-md",
    md: "text-base px-8 py-4 rounded-md",
    lg: "text-lg px-10 py-5 rounded-md",
  };

  return (
    <motion.button
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      whileHover="hover"
      initial="initial"
      {...props}
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-white/5 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Animated Background Layer */}
      <motion.div
        className="absolute inset-0 bg-white"
        initial={{ x: "-100%" }}
        variants={{
          initial: { x: "-100%", opacity: 0.1 },
          hover: { x: "100%", opacity: 0.2 },
        }}
        transition={{ duration: 0.5 }}
      />

      {/* Button Content */}
      <div className="relative px-2 flex items-center justify-between">
        <span className="font-semibold">{children}</span>

        {/* Arrow Icon with Animation */}
        <motion.div
          className="flex items-center ml-2"
          variants={{
            initial: { x: 0 },
            hover: { x: 5 },
          }}
          transition={{ duration: 0.3 }}
        >
          <motion.svg
            className="w-5 h-5"
            variants={{
              initial: { opacity: 0, x: -5 },
              hover: { opacity: 1, x: 0 },
            }}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </motion.svg>
        </motion.div>
      </div>

      {/* Shine Effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent"
        variants={{
          initial: { opacity: 0, x: "-100%" },
          hover: { opacity: 0.15, x: "100%" },
        }}
        transition={{ duration: 0.5 }}
      />
    </motion.button>
  );
};

export default Button;
