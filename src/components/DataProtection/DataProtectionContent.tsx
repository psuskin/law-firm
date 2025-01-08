"use client";

import React from "react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Link from "next/link";

const DataProtectionContent = () => {
  const t = useTranslations("dataProtection");

  const formatLink = (text: string | undefined) => {
    // Return empty string if text is undefined
    if (!text) return "";

    // Check if text contains a URL
    if (text.includes("http")) {
      const words = text.split(" ");
      return words.map((word, index) => {
        if (word.startsWith("http")) {
          return (
            <React.Fragment key={index}>
              {index > 0 && " "}
              <Link
                href={word}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold hover:text-marine transition-colors duration-300 break-all inline-flex items-center gap-1 group"
              >
                {word}
                <svg
                  className="w-4 h-4 flex-shrink-0 transform transition-transform group-hover:translate-x-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
              {index < words.length - 1 && " "}
            </React.Fragment>
          );
        }
        return index === 0 ? word : ` ${word}`;
      });
    }
    return text;
  };

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
                <h2 className="text-2xl font-semibold text-marine mb-4 break-words sm:text-lg md:text-2xl">
                  {section.title}
                </h2>
                <p className="break-words">{formatLink(section.content)}</p>

                {section.details && (
                  <div className="mt-4">
                    {section.details.map((detail: string, idx: number) => (
                      <p key={idx} className="my-1 break-words">
                        {formatLink(detail)}
                      </p>
                    ))}
                  </div>
                )}

                {section.items && (
                  <ul className="list-disc pl-6 mt-4 space-y-2">
                    {section.items.map((item: string, idx: number) => (
                      <li key={idx} className="break-words">
                        {formatLink(item)}
                      </li>
                    ))}
                  </ul>
                )}

                {section.legalBasis && (
                  <p className="mt-4 break-words">
                    {formatLink(section.legalBasis)}
                  </p>
                )}

                {section.subsections && (
                  <div className="mt-6 space-y-8">
                    {section.subsections.map(
                      (subsection: any, subIdx: number) => (
                        <div key={subIdx}>
                          <h3 className="text-xl font-semibold text-marine mb-3 break-words">
                            {subsection.title}
                          </h3>
                          <p className="break-words">
                            {formatLink(subsection.content)}
                          </p>
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
