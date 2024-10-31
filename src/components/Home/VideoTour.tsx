"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PlayIcon, XMarkIcon } from "@heroicons/react/24/outline";

const VideoTour = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=1000")'
        }}
      >
        {/* Dark Overlay with more sophisticated gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-marine/95 via-marine/90 to-marine/95" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 h-full">
        <div className="flex flex-col items-center justify-center min-h-[90vh] text-center">
          {/* Play Button and Text */}
          <motion.div
            className="space-y-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.button
              className="group relative"
              onClick={() => setIsVideoOpen(true)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Multiple Outer Rings */}
              {[...Array(3)].map((_, i) => (
                <motion.div 
                  key={i}
                  className="absolute -inset-4 rounded-full border border-white/20"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 0, 0.5]
                  }}
                  transition={{
                    duration: 2,
                    delay: i * 0.4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              ))}
              
              {/* Play Button Circle */}
              <div className="relative w-24 h-24 rounded-full bg-gold/90 backdrop-blur-sm flex items-center justify-center transition-all duration-300 group-hover:bg-white">
                <PlayIcon className="w-10 h-10 text-marine transition-colors duration-300" />
              </div>
            </motion.button>

            <div className="space-y-6">
              <motion.h2 
                className="text-5xl md:text-6xl font-bold text-white"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                Take a Tour
              </motion.h2>
              <motion.p 
                className="text-white/90 text-lg max-w-2xl mx-auto leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                We can provide corporate governance, helping clients manage the responsibilities of running a corporation in financial field.
              </motion.p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Enhanced Video Modal */}
      <AnimatePresence>
        {isVideoOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
            initial={{ opacity: 0, backdropFilter: 'blur(0px)' }}
            animate={{ opacity: 1, backdropFilter: 'blur(8px)' }}
            exit={{ opacity: 0, backdropFilter: 'blur(0px)' }}
          >
            {/* Modal Backdrop */}
            <div className="absolute inset-0 bg-marine/95" />

            {/* Close Button */}
            <motion.button
              className="absolute top-8 right-8 text-white/80 hover:text-white transition-colors z-10"
              onClick={() => setIsVideoOpen(false)}
              whileHover={{ scale: 1.1, rotate: 90 }}
              transition={{ duration: 0.2 }}
            >
              <XMarkIcon className="w-8 h-8" />
            </motion.button>

            {/* Video Container */}
            <motion.div
              className="relative w-full max-w-[90vw] max-h-[90vh] aspect-video bg-black rounded-lg overflow-hidden shadow-2xl"
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
            >
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/your-video-id?autoplay=1"
                title="Video Tour"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default VideoTour;