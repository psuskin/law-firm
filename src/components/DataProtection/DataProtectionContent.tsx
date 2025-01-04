"use client";

import React from "react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const DataProtectionContent = () => {
  const t = useTranslations("dataProtection");

  return (
    <section className="py-32 bg-marine-light">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-marine mb-8">
            {t("title")}
          </h1>

          <div className="prose prose-lg text-marine/70 max-w-none">
            {t.raw("sections").map((section: any, index: number) => (
              <div key={index} className="mb-12">
                <h2 className="text-2xl font-semibold text-marine mb-4">
                  {section.title}
                </h2>
                <p>{section.content}</p>

                {section.details && (
                  <div className="mt-4">
                    {section.details.map((detail: string, idx: number) => (
                      <p key={idx} className="my-1">
                        {detail}
                      </p>
                    ))}
                  </div>
                )}

                {section.items && (
                  <ul className="list-disc pl-6 mt-4 space-y-2">
                    {section.items.map((item: string, idx: number) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                )}

                {section.legalBasis && (
                  <p className="mt-4">{section.legalBasis}</p>
                )}

                {section.subsections && (
                  <div className="mt-6 space-y-8">
                    {section.subsections.map(
                      (subsection: any, subIdx: number) => (
                        <div key={subIdx}>
                          <h3 className="text-xl font-semibold text-marine mb-3">
                            {subsection.title}
                          </h3>
                          <p>{subsection.content}</p>
                        </div>
                      )
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DataProtectionContent;
