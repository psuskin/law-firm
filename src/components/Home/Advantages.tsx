"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  LanguageIcon,
  ScaleIcon,
  ClockIcon,
  BanknotesIcon,
  DocumentCheckIcon,
  PhoneArrowUpRightIcon,
} from "@heroicons/react/24/outline";

const advantages = [
  {
    id: 1,
    title: "Multilingual legal advice",
    description:
      "In addition to German, I also advise you in Bosnian, Serbian, Croatian and English.",
    icon: LanguageIcon,
  },
  {
    id: 2,
    title: "Technical expertise",
    description:
      "My focus is on traffic and criminal law, which allows me to develop a solution tailored to your needs.",
    icon: ScaleIcon,
  },
  {
    id: 3,
    title: "Fast processing",
    description:
      "By using various digital tools, I can handle your legal matter efficiently and quickly.",
    icon: ClockIcon,
  },
  {
    id: 4,
    title: "Cost transparency",
    description:
      "I will inform you in advance about the costs involved and, if necessary, obtain a confirmation of coverage from your legal expenses insurance in advance.",
    icon: BanknotesIcon,
  },
  {
    id: 5,
    title: "Free initial assessment",
    description:
      "Use the contact form to describe your concerns to receive a free initial assessment.",
    icon: DocumentCheckIcon,
  },
  {
    id: 6,
    title: "High accessibility",
    description:
      "I offer a variety of contact options. You can reach me by phone or email or arrange a callback.",
    icon: PhoneArrowUpRightIcon,
  },
];

const Advantages = () => {
  return (
    <section className="py-24 bg-marine-light">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-marine mb-6">
            Advantages
          </h2>
          <p className="text-marine/70 max-w-2xl mx-auto">
            The reasons why I am the right contact for you.
          </p>
        </motion.div>

        {/* Advantages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => (
            <motion.div
              key={advantage.id}
              className="relative bg-white p-8 rounded-lg group hover:shadow-elegant transition-all duration-500"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Icon Container */}
              <div className="mb-6 relative">
                <div className="w-16 h-16 bg-marine-light rounded-lg flex items-center justify-center group-hover:bg-marine transition-colors duration-500">
                  <advantage.icon className="w-9 h-9 text-marine group-hover:text-white transition-colors duration-500" />
                </div>
              </div>

              {/* Content */}
              <div className="relative">
                <h3 className="text-xl font-semibold text-marine mb-3 group-hover:text-marine/90 transition-colors duration-300">
                  {advantage.title}
                </h3>
                <p className="text-marine/60 leading-relaxed">
                  {advantage.description}
                </p>
              </div>

              {/* Bottom Accent Line */}
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-gold/30 group-hover:w-full transition-all duration-500" />

              {/* Corner Decoration */}
              <div className="absolute top-0 right-0 w-0 h-0 border-t-[40px] border-r-[40px] border-t-transparent border-r-marine/5 group-hover:border-r-gold/40 transition-colors duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Advantages;
