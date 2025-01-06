"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  MapPinIcon,
  DevicePhoneMobileIcon,
  PrinterIcon,
  EnvelopeIcon,
  ClockIcon,
} from "@heroicons/react/24/outline";
import { useTranslations } from "next-intl";

const ContactInfo = () => {
  const t = useTranslations("contact.info");

  const contactDetails = [
    {
      id: 1,
      key: "location",
      icon: MapPinIcon,
    },
    {
      id: 2,
      key: "phone",
      icon: DevicePhoneMobileIcon,
    },
    // {
    //   id: 3,
    //   key: "fax",
    //   icon: PrinterIcon,
    // },
    {
      id: 4,
      key: "email",
      icon: EnvelopeIcon,
    },
    {
      id: 5,
      key: "availability",
      icon: ClockIcon,
    },
  ];

  return (
    <div className="space-y-8">
      {contactDetails.map((detail, index) => (
        <motion.div
          key={detail.id}
          className="flex items-start gap-6"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <div className="flex-shrink-0">
            <detail.icon className="w-6 h-6 text-gold" />
          </div>
          <div>
            <h3 className="text-lg font-medium text-marine mb-2">
              {t(`${detail.key}.title`)}
            </h3>
            {t.raw(`${detail.key}.lines`).map((line: string, i: number) => (
              <p key={i} className="text-marine/70">
                {line}
              </p>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default ContactInfo;
