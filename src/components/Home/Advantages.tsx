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
import { useTranslations } from "next-intl";

const Advantages = () => {
  const t = useTranslations("advantages");

  const advantages = [
    {
      id: 1,
      key: "multilingual",
      icon: LanguageIcon,
    },
    {
      id: 2,
      key: "expertise",
      icon: ScaleIcon,
    },
    {
      id: 3,
      key: "processing",
      icon: ClockIcon,
    },
    {
      id: 4,
      key: "transparency",
      icon: BanknotesIcon,
    },
    {
      id: 5,
      key: "assessment",
      icon: DocumentCheckIcon,
    },
    {
      id: 6,
      key: "accessibility",
      icon: PhoneArrowUpRightIcon,
    },
  ];

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
            {t("title")}
          </h2>
          <p className="text-marine/70 max-w-2xl mx-auto">{t("subtitle")}</p>
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
                  {t(`items.${advantage.key}.title`)}
                </h3>
                <p className="text-marine/60 leading-relaxed">
                  {t(`items.${advantage.key}.description`)}
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
