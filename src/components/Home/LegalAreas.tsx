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

const LegalAreas = () => {
  const t = useTranslations("legalAreas");

  const legalAreasData = [
    // {
    //   id: 1,
    //   key: "traffic_civil_law",
    //   icon: TruckIcon,
    //   items: [
    //     "accident_settlement",
    //     "damage_claims",
    //     "comprehensive_insurance",
    //     "vehicle_purchase",
    //     "car_leasing",
    //     "car_repairs",
    //   ],
    // },
    {
      id: 1,
      key: "gastronomy_law",
      icon: ScaleIcon,
      items: [
        "business_startup",
        "contract_review",
        "dispute_resolution",
        "compliance_advice",
      ],
    },
    {
      id: 2,
      key: "general_criminal_law",
      icon: UserGroupIcon,
      items: [
        "comprehensive_advice",
        "court_representation",
        "evidence_analysis",
        "early_termination",
      ],
    },
    {
      id: 3,
      key: "fines_administrative",
      icon: CameraIcon,
      items: ["fines", "points_bans", "license_revocation", "mpu", "logbook"],
    },
    // {
    //   id: 3,
    //   key: "traffic_criminal_law",
    //   icon: ScaleIcon,
    //   items: [
    //     "dui",
    //     "bodily_harm",
    //     "negligent_homicide",
    //     "hit_and_run",
    //     "traffic_hazard",
    //     "no_insurance",
    //     "no_license",
    //   ],
    // },
  ];

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
            {t("title")}
          </h2>
        </motion.div>

        {/* Legal Areas Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {legalAreasData.map((area, index) => (
            <motion.div
              key={area.id}
              className="relative bg-marine-light/30 rounded-lg p-4 lg:p-6 hover:bg-marine-light/50 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Area Header */}
              <div className="flex items-center gap-4 mb-4 relative">
          <div className="p-3 bg-marine/5 rounded-lg">
            <area.icon className="w-8 h-8 text-gold" />
          </div>
          <h3 className="text-2xl font-semibold text-marine capitalize">
            {t(`areas.${area.key}.title`)}
          </h3>
          <span className="absolute -top-4 right-0 text-[120px] font-bold text-marine/5">
            0{index + 1}
          </span>
              </div>

              {/* Area Content */}
              <div className="grid gap-4">
          {area.items.map((itemKey, idx) => (
            <motion.div
              key={itemKey}
              className="group relative bg-white p-6 rounded-md shadow-sm hover:shadow-md transition-all duration-300"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + idx * 0.1 }}
            >
              <h4 className="text-marine font-medium mb-2 text-lg">
                {t(`areas.${area.key}.items.${itemKey}.title`)}
              </h4>
              <p className="text-marine/70 leading-relaxed">
                {t(`areas.${area.key}.items.${itemKey}.description`)}
              </p>

              {/* Hover accent */}
              <div className="absolute left-0 top-0 w-1 h-0 bg-gold transition-all duration-300 rounded-l-md group-hover:h-full" />
            </motion.div>
          ))}
              </div>

              {/* Background Decoration */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-gold/5 to-transparent rounded-tr-lg -z-10" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-marine/5 to-transparent rounded-bl-lg -z-10" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LegalAreas;
