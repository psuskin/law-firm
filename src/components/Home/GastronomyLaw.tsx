"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  TruckIcon,
  CameraIcon,
  ScaleIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";
import { useTranslations } from "next-intl";

type ItemWithDescription = {
  subtitle: string;
  description: string;
  type: "description";
};

type ItemWithSubItems = {
  subtitle: string;
  subItems: string[];
  type: "subItems";
};

type LegalAreaItem = ItemWithDescription | ItemWithSubItems;

type LegalArea = {
  id: number;
  title: string;
  icon: any;
  items: LegalAreaItem[];
};

const GastronomyLaw = () => {
  const t = useTranslations("gastronomyLaw");

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-2 lg:px-64">
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
      </motion.div>

      {/* Text */}
      <motion.div
      className="text-center mb-16"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      >
      <p className="text-marine/70 max-w-4xl mx-auto my-4">
      {t("p1")}
      </p>
      <p className="text-marine/70 max-w-4xl mx-auto my-4">
      {t("p2")}
      </p>
      <p className="text-marine/70 max-w-4xl mx-auto">
      {t("p3")}
      </p>
      <p className="text-marine/70 max-w-4xl mx-auto">
      {t("p4")}
      </p>
      <p className="text-marine/70 max-w-4xl mx-auto">
      {t("p5")}
      </p>
      <p className="text-marine/70 max-w-4xl mx-auto my-4">
      {t("p6")}
      </p>
      <p className="text-marine/70 max-w-4xl mx-auto my-4">
      {t("p7")}
      </p>
      <p className="text-marine/70 max-w-4xl mx-auto my-4">
      {t("p8")}
      </p>
      <p className="text-marine/70 max-w-4xl mx-auto">
      {t("offer.title")}
      </p>
      <ul className="list-disc list-inside">
      {t.raw("offer.list").map((item: string, index: number) => (
        <li key={index} className="text-marine/70 my-2">
        {item}
        </li>
      ))}
      </ul>
      <p className="text-marine/70 max-w-4xl mx-auto">
      {t("p9")}
      </p>
      <p className="text-marine/70 max-w-4xl mx-auto">
      {t("p10")}
      </p>
      </motion.div>
      </div>
    </section>
  );
};

export default GastronomyLaw;
