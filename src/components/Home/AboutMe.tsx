"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { BriefcaseIcon, AcademicCapIcon } from "@heroicons/react/24/outline";
import { useTranslations } from "next-intl";

const AboutMe = () => {
  const t = useTranslations("aboutMe");

  return (
    <section className="py-32 bg-gradient-to-b from-white to-marine-light/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-marine mb-2">
            {t("title")}
          </h2>
        </motion.div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Column - Image */}
            <motion.div
              className="relative mx-auto w-[340px] md:w-full max-w-[600px]"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {/* Background Pattern */}
              <div className="absolute -top-6 -left-6 w-full h-full bg-marine/5 rounded-3xl" />
              <div className="absolute -bottom-6 -right-6 w-full h-full bg-gold/10 rounded-3xl" />

              {/* Main Image Container */}
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
                <Image
                  src="/lawyer-image.jpg"
                  alt="Mirnes Anwaltskanzlei_Gür"
                  fill
                  className="object-cover"
                />
                {/* Image Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-marine/20 to-transparent" />
              </div>

              {/* Name Tag */}
              <motion.div
                className="absolute -bottom-6 md:-bottom-8 left-1/3 lg:left-1/2 -translate-x-1/2 bg-gold px-6 md:px-8 py-3 md:py-4 rounded-full shadow-elegant"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                <h3 className="text-lg md:text-xl font-semibold text-marine whitespace-nowrap">
                  {t("nameTag.title")}
                </h3>
                <p className="text-center text-marine/70 text-sm">
                  {t("nameTag.subtitle")}
                </p>
              </motion.div>
            </motion.div>

            {/* Right Column - Content */}
            <div className="space-y-12">
              {/* Education Section */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="group"
              >
                <div className="flex items-start gap-6">
                  <div className="p-4 bg-marine-light rounded-xl group-hover:bg-marine transition-colors duration-300">
                    <AcademicCapIcon className="w-6 h-6 text-marine group-hover:text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-marine mb-4">
                      {t("education.title")}
                    </h3>
                    <p className="text-marine/70 leading-relaxed">
                      {t("education.description")}
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Experience Section */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="group"
              >
                <div className="flex items-start gap-6">
                  <div className="p-4 bg-marine-light rounded-xl group-hover:bg-marine transition-colors duration-300">
                    <BriefcaseIcon className="w-6 h-6 text-marine group-hover:text-white" />
                  </div>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold text-marine mb-4">
                        {t("experience.title")}
                      </h3>
                      <div className="space-y-4">
                        {t
                          .raw("experience.items")
                          .map((text: string, index: number) => (
                            <motion.p
                              key={index}
                              initial={{ opacity: 0, y: 10 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: 0.3 + index * 0.1 }}
                              className="text-marine/70 leading-relaxed"
                            >
                              {text}
                            </motion.p>
                          ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
