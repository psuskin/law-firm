"use client";

import React from "react";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import Image from "next/image";

const Hero = () => {
  const fadeUpVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const handleScroll = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navHeight = 96; // Height of your navbar
      const elementPosition = element.offsetTop - navHeight;

      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="relative min-h-[90vh] w-full bg-marine-light overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="w-full h-full grid grid-cols-12">
            {Array.from({ length: 48 }).map((_, i) => (
              <div key={i} className="border-r border-marine" />
            ))}
          </div>
        </div>
      </div>

      {/* Content Container */}
      <div className="container mx-auto px-4 lg:px-8 h-full relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between h-full pt-28 pb-20 gap-12 lg:gap-8">
          {/* Text Content */}
          <motion.div
            className="max-w-2xl lg:max-w-[45%] w-full"
            initial="hidden"
            animate="visible"
            viewport={{ once: true }}
          >
            <motion.p
              className="text-marine font-medium mb-6 tracking-wider uppercase"
              variants={fadeUpVariant}
            >
              Law Firm for Traffic and Criminal Law
            </motion.p>

            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-marine mb-8 leading-tight"
              variants={fadeUpVariant}
            >
              Anwaltskanzlei <span className="text-gold">Gür</span>
            </motion.h1>

            <motion.p
              className="text-marine/80 text-lg lg:text-xl mb-12 leading-relaxed max-w-2xl"
              variants={fadeUpVariant}
            >
              Your competent legal counsel in matters of traffic and criminal
              law. Professional representation with years of experience.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-6"
              variants={fadeUpVariant}
            >
              <Button variant="primary" size="lg">
                Schedule Consultation
              </Button>
              <Button
                variant="secondary"
                size="lg"
                onClick={() => handleScroll("about")}
              >
                Learn More
              </Button>
            </motion.div>
          </motion.div>

          {/* Image Container */}
          <motion.div
            className="relative w-full lg:w-[45%] h-[400px] lg:h-[600px]"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            {/* Background Elements */}
            <div className="absolute top-[5%] right-[5%] w-[90%] h-[90%]">
              <div className="absolute inset-0 bg-marine/5 rounded-2xl transform rotate-3" />
              <div className="absolute inset-0 bg-gold/5 rounded-2xl -rotate-3" />
            </div>

            {/* Main Image */}
            <div className="relative w-[90%] h-[90%] overflow-hidden rounded-2xl">
              <Image
                src="/lawyer-image.jpg"
                alt="Professional Lawyer"
                fill
                className="object-cover object-center"
                priority
                sizes="(max-width: 768px) 90vw, (max-width: 1200px) 45vw"
              />
              {/* Image Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-marine/20 to-transparent" />
            </div>

            {/* Decorative Elements */}
            <div className="absolute -z-10 top-[15%] right-0 w-[70%] h-[70%] border-r-2 border-t-2 border-marine/20 rounded-tr-3xl" />
            <div className="absolute -z-10 bottom-0 left-[10%] w-[70%] h-[70%] border-l-2 border-b-2 border-marine/20 rounded-bl-3xl" />

            {/* Accent Lines */}
            <motion.div
              className="hidden lg:block absolute top-[15%] right-[10%] h-[2px] bg-gold"
              initial={{ width: 0 }}
              animate={{ width: "20%" }}
              transition={{ delay: 1, duration: 0.8 }}
            />
            <motion.div
              className="hidden lg:block absolute bottom-[10%] left-[10%] w-[2px] bg-gold"
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
