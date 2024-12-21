"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  TruckIcon,
  CameraIcon,
  ScaleIcon, 
  UserGroupIcon, 
} from "@heroicons/react/24/outline";


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

const legalAreasData: LegalArea[] = [
  {
    id: 1,
    title: "traffic civil law",
    icon: TruckIcon,
    items: [
      {
        type: "description",
        subtitle: "Accident settlement",
        description:
          "I will take over the complete communication with the opposing insurance company and the experts in order to successfully enforce your claims.",
      },
      {
        type: "description",
        subtitle: "Damage claims",
        description:
          "I enforce all relevant damage claims, including property damage, personal injury and loss of use.",
      },
      {
        type: "description",
        subtitle: "Comprehensive insurance claims",
        description:
          "In the event of comprehensive insurance claims, I represent your interests vis-à-vis your own insurance company.",
      },
      {
        type: "description",
        subtitle: "Vehicle purchase",
        description:
          "If you were deceived when purchasing a vehicle or important information was withheld, I will support you in withdrawing from the contract.",
      },
      {
        type: "description",
        subtitle: "Car leasing",
        description:
          "I resolve conflicts in car leasing contracts competently and represent your interests towards the lessor.",
      },
      {
        type: "description",
        subtitle: "Car repair shops",
        description:
          "I will be at your side in legal disputes with car repair shops.",
      },
    ],
  },
  {
    id: 2,
    title: "fines and administrative proceedings",
    icon: CameraIcon,
    items: [
      {
        type: "description",
        subtitle: "Fines",
        description:
          "I check the legality of fines, be it for speeding, distance violations or red light violations.",
      },
      {
        type: "description",
        subtitle: "Points in Flensburg and driving bans",
        description:
          "In the case of serious violations that could lead to points in Flensburg or driving bans, I will check the likelihood of success of an appeal, especially if your driving license is essential for private or professional purposes.",
      },
      {
        type: "description",
        subtitle: "Revocation of driving license",
        description:
          "After a certain number of points, your driving license may be revoked. I will support you in this process.",
      },
      {
        type: "description",
        subtitle: "Medical-psychological examination (MPU)",
        description:
          "If there are doubts about your ability to drive, for example due to drug or alcohol consumption, I will help you with a possible MPU requirement.",
      },
      {
        type: "description",
        subtitle: "Avoiding logbook requirements",
        description:
          "I am committed to avoiding logbook requirements and to successfully representing your interests.",
      },
    ],
  },
  {
    id: 3,
    title: "traffic criminal law",
    icon: ScaleIcon,
    items: [
      {
        type: "description",
        subtitle: "Drunkenness/drugs in traffic",
        description:
          "Expert defense in cases involving driving under the influence of alcohol or drugs.",
      },
      {
        type: "description",
        subtitle: "Bodily harm",
        description:
          "Representation in cases of traffic accidents resulting in personal injury.",
      },
      {
        type: "description",
        subtitle: "Negligent homicide",
        description:
          "Sensitive and professional handling of fatal traffic accident cases.",
      },
      {
        type: "description",
        subtitle: "Hit and run",
        description:
          "Strategic defense in cases of leaving the scene of an accident.",
      },
      {
        type: "description",
        subtitle: "Road traffic hazard",
        description:
          "Defense against charges of endangering road traffic safety.",
      },
      {
        type: "description",
        subtitle: "Driving without insurance",
        description: "Legal support in cases of uninsured driving violations.",
      },
      {
        type: "description",
        subtitle: "Driving without a license",
        description: "Defense strategies for driving without proper licensing.",
      },
    ],
  },
  {
    id: 4,
    title: "general criminal law",
    icon: UserGroupIcon,
    items: [
      {
        type: "description",
        subtitle: "Comprehensive advice",
        description:
          "Whether it's about investigations, police summons, arrests or charges, I'll be at your side from the start. Together we'll develop a tailor-made defense strategy.",
      },
      {
        type: "description",
        subtitle: "Representation in Court",
        description:
          "Should the case go to court, I will represent your interests with professionalism and determination. I know the legal system and work hard to present your side of the story.",
      },
      {
        type: "description",
        subtitle: "Evidence Analysis",
        description:
          "I carefully examine all evidence and information related to your case to identify and exploit potential weaknesses in the prosecution.",
      },
      {
        type: "description",
        subtitle: "Early termination of proceedings",
        description:
          "Where possible, I will try to have the criminal proceedings against you terminated before charges are brought.",
      },
    ],
  },
];

const LegalAreas = () => {
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
            Legal Areas
          </h2>
        </motion.div>

        {/* Legal Areas Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
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
                  {area.title}
                </h3>
                {/* Decorative number */}
                <span className="absolute -top-4 right-0 text-[120px] font-bold text-marine/5">
                  0{index + 1}
                </span>
              </div>

              {/* Area Content */}
              <div className="grid gap-4">
                {area.items.map((item, idx) => (
                  <motion.div
                    key={idx}
                    className="group relative bg-white p-6 rounded-md shadow-sm hover:shadow-md transition-all duration-300"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + idx * 0.1 }}
                  >
                    <h4 className="text-marine font-medium mb-2 text-lg">
                      {item.subtitle}
                    </h4>
                    {item.type === "description" && (
                      <p className="text-marine/70 leading-relaxed">
                        {item.description}
                      </p>
                    )}

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
