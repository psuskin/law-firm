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
  const baseStyles = "relative font-medium outline-none transition-all duration-300 group";
  
  const variants = {
    primary: "text-gold bg-marine border-2 border-transparent hover:border-dashed hover:border-gold",
    secondary: "text-marine bg-marine-light border-2 border-transparent hover:border-dashed hover:border-marine",
  };

  const sizes = {
    sm: "text-sm px-6 py-2 rounded-sm",
    md: "text-sm px-8 py-3 rounded-sm",
    lg: "text-base px-10 py-4 rounded-sm",
  };

  const shadowVariants = {
    primary: "shadow-[0_0_0_4px_#01274a,2px_2px_4px_2px_rgba(1,39,74,0.15)]",
    secondary: "shadow-[0_0_0_4px_#f0f6ff,2px_2px_4px_2px_rgba(1,39,74,0.15)]",
  };

  return (
    <motion.button
      className={cn(
        baseStyles, 
        variants[variant], 
        sizes[size], 
        shadowVariants[variant],
        className
      )}
      whileTap={{
        scale: 0.98,
        boxShadow: variant === 'primary' 
          ? '0 0 0 4px #01274a, 1px 1px 2px 1px rgba(1,39,74,0.15)'
          : '0 0 0 4px #f0f6ff, 1px 1px 2px 1px rgba(1,39,74,0.15)',
        transition: { duration: 0.1 }
      }}
      whileHover={{
        scale: 1.005,
        transition: { duration: 0.2 }
      }}
      {...props}
    >
      <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-1">
        {children}
      </span>
    </motion.button>
  );
};

export default Button;