"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

const services = [
  {
    id: 1,
    title: "traffic accident",
    description: "You were involved in a traffic accident and would like to claim compensation?",
    action: "Then fill out the accident questionnaire and I will take care of it for you.",
    buttonText: "Accident questionnaire",
    image: "https://images.unsplash.com/photo-1562411052-105105232432?q=80&w=1000&auto=format&fit=crop",
    href: "/questionnaire/accident"
  },
  {
    id: 2,
    title: "fine notice",
    description: "Have you received a fine and are you facing points on your license or a driving ban?",
    action: "Then click on the fine notice button and upload the fine notice, which we will then check for legality.",
    buttonText: "Fine notice",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=1000&auto=format&fit=crop",
    href: "/fine-notice"
  },
  {
    id: 3,
    title: "criminal proceedings",
    description: "Are you being investigated criminally or have you been summoned by the police?",
    action: "Make an appointment for me to listen to your version of events, explain the next steps, and prepare an appropriate defense strategy.",
    buttonText: "Make an appointment",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=1000&auto=format&fit=crop",
    href: "/appointment"
  }
];

const Services = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-marine mb-6">
            Your contact in legal matters
          </h2>
          <p className="text-marine/70 max-w-2xl mx-auto">
            Whether it&apos;s about settling an accident, a fine or defending yourself in criminal proceedings, 
            I&apos;m here to help you. Select the topic that applies to you below and follow the further instructions.
          </p>
        </motion.div>

        {/* Services Grid - Updated Design */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              className="group relative min-h-[500px] bg-white rounded-lg overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Background Image with Enhanced Overlay */}
              <div className="absolute inset-0 z-0">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div 
                  className="absolute inset-0" 
                  style={{
                    background: `
                      linear-gradient(
                        to bottom,
                        rgba(1, 39, 74, 0.7) 0%,
                        rgba(1, 39, 74, 0.85) 50%,
                        rgba(1, 39, 74, 0.95) 100%
                      )
                    `
                  }}
                />
              </div>

              {/* Content Container */}
              <div className="relative z-10 h-full flex flex-col p-8">
                {/* Service Number */}
                <div className="text-gold text-8xl font-bold opacity-20 mb-4">
                  0{index + 1}
                </div>

                {/* Service Content */}
                <div className="mt-auto">
                  <h3 className="text-2xl font-semibold text-white mb-4 capitalize">
                    {service.title}
                  </h3>
                  <p className="text-white/90 mb-4">
                    {service.description}
                  </p>
                  <p className="text-white/70 text-sm mb-8">
                    {service.action}
                  </p>

                  {/* Enhanced Modern Button */}
                  <Link href={service.href} className="w-full">
                    <motion.div
                      className="relative overflow-hidden rounded-md group/button"
                      whileHover="hover"
                      initial="initial"
                    >
                      {/* Button Background with Gradient */}
                      <div className="absolute inset-0 bg-gradient-to-r from-gold via-gold to-gold opacity-90" />
                      
                      {/* Animated Background Layer */}
                      <motion.div
                        className="absolute inset-0 bg-white"
                        initial={{ x: '-100%' }}
                        variants={{
                          initial: { x: '-100%', opacity: 0.1 },
                          hover: { x: '100%', opacity: 0.2 }
                        }}
                        transition={{ duration: 0.5 }}
                      />

                      {/* Button Content */}
                      <div className="relative px-6 py-4 flex items-center justify-between">
                        <span className="font-semibold text-marine">
                          {service.buttonText}
                        </span>
                        
                        {/* Arrow Icon with Animation */}
                        <motion.div
                          className="flex items-center space-x-1"
                          variants={{
                            initial: { x: 0 },
                            hover: { x: 5 }
                          }}
                          transition={{ duration: 0.3 }}
                        >
                          <motion.div
                            className="text-marine"
                            variants={{
                              initial: { opacity: 0, x: -5 },
                              hover: { opacity: 1, x: 0 }
                            }}
                          >
                            <ArrowRightIcon className="w-5 h-5 stroke-2" />
                          </motion.div>
                        </motion.div>
                      </div>

                      {/* Animated Border */}
                      <div className="absolute inset-0 border-2 border-gold rounded-md" />
                      
                      {/* Shine Effect */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0"
                        variants={{
                          initial: { opacity: 0, x: '-100%' },
                          hover: { opacity: 0.2, x: '100%' }
                        }}
                        transition={{ duration: 0.5 }}
                      />
                    </motion.div>
                  </Link>
                </div>

                {/* Decorative Elements */}
                <motion.div 
                  className="absolute top-4 right-4 w-20 h-20 border-t-2 border-r-2 border-gold/30"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                />
              
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;