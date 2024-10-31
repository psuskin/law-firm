"use client";

import React from "react";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] w-full bg-marine-light overflow-hidden">
      {/* Content Container */}
      <div className="container mx-auto px-4 lg:px-8 h-full relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between h-full pt-20 pb-32 gap-8">
          {/* Text Content */}
          <motion.div
            className="max-w-2xl lg:max-w-[45%] w-full"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.p
              className="text-marine font-medium mb-6 tracking-wide"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              LAW FIRM FOR TRAFFIC AND CRIMINAL LAW
            </motion.p>

            <motion.h1
              className="text-4xl md:text-5xl lg:text-7xl font-bold text-marine mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Čerkezović Law Firm
            </motion.h1>

            <motion.p
              className="text-marine/80 text-base md:text-lg lg:text-xl mb-12 max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              Your competent legal counsel in legal matters in the area of​
              traffic and criminal law.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <Button variant="primary" size="lg">
                Schedule Consultation
              </Button>
            </motion.div>
          </motion.div>

          {/* Modern Flat Image Container - Mobile Optimized */}
          <motion.div
            className="relative w-full lg:w-[45%] h-[400px] lg:h-[600px] mt-8 lg:mt-0"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            {/* Main Image Container */}
            <div className="relative h-full w-full">
              {/* Background Shapes - Adjusted for mobile */}
              <div className="absolute top-[5%] right-[5%] w-[90%] lg:w-[80%] h-[90%] lg:h-[80%] bg-marine/5" />
              <div className="absolute top-[2%] right-[2%] w-[90%] lg:w-[80%] h-[90%] lg:h-[80%] bg-marine/10" />

              {/* Image Wrapper - Adjusted for mobile */}
              <div className="relative w-[90%] lg:w-[80%] h-[90%] lg:h-[80%] overflow-hidden">
                <Image
                  src="/lawyer-image.jpg"
                  alt="Professional Lawyer"
                  fill
                  className="object-cover object-center"
                  priority
                  sizes="(max-width: 768px) 90vw, (max-width: 1200px) 45vw"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-marine/10 to-transparent" />
              </div>
            </div>

            {/* Decorative Elements - Hidden on mobile, visible on desktop */}
            <div className="hidden lg:block absolute -z-10 top-[15%] right-0 w-[70%] h-[70%] border-r-2 border-t-2 border-marine/20" />
            <div className="hidden lg:block absolute -z-10 bottom-0 left-[10%] w-[70%] h-[70%] border-l-2 border-b-2 border-marine/20" />

            {/* Accent Line - Modified for mobile */}
            <motion.div
              className="hidden lg:block absolute top-[15%] right-0 w-[20%] h-[2px] bg-gold"
              initial={{ width: 0 }}
              animate={{ width: "20%" }}
              transition={{ delay: 1, duration: 0.8 }}
            />
            <motion.div
              className="hidden lg:block absolute bottom-[15%] left-[10%] w-[2px] h-[20%] bg-gold"
              initial={{ height: 0 }}
              animate={{ height: "20%" }}
              transition={{ delay: 1.2, duration: 0.8 }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
