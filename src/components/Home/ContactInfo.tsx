"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  MapPinIcon, 
  DevicePhoneMobileIcon, 
  PrinterIcon, 
  EnvelopeIcon, 
  ClockIcon 
} from "@heroicons/react/24/outline";

const contactDetails = [
  {
    id: 1,
    title: "Location",
    icon: MapPinIcon,
    content: [
      "Bei den Mühren 70",
      "20457 Hamburg"
    ],
    color: "text-marine"
  },
  {
    id: 2,
    title: "phone",
    icon: DevicePhoneMobileIcon,
    content: ["(040) 638 622 39"],
    color: "text-marine"
  },
  {
    id: 3,
    title: "fax",
    icon: PrinterIcon,
    content: ["(040) 334 824 08"],
    color: "text-marine"
  },
  {
    id: 4,
    title: "e-mail",
    icon: EnvelopeIcon,
    content: ["info@kanzlei-cerkezovic.de"],
    color: "text-marine"
  },
  {
    id: 5,
    title: "Telephone availability",
    icon: ClockIcon,
    content: [
      "Monday–Friday",
      "09:00 am – 06:00 pm"
    ],
    color: "text-marine"
  }
];

const ContactInfo = () => {
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
              {detail.title}
            </h3>
            {detail.content.map((line, i) => (
              <p 
                key={i} 
                className="text-marine/70"
              >
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