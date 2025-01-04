"use client";

import React from "react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Link from "next/link";

const ImprintContent = () => {
  const t = useTranslations("imprint");

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
            {/* Legal Information */}
            <div className="mb-12">
              <h2 className="text-2xl font-semibold text-marine mb-4">
                {t("legalInfo.title")}
              </h2>
              <p>
                {t("legalInfo.name")}
                <br />
                {t("legalInfo.owner")}
                <br />
                {t("legalInfo.address.street")}
                <br />
                {t("legalInfo.address.city")}
              </p>
            </div>

            {/* Contact Information */}
            <div className="mb-12">
              <h2 className="text-2xl font-semibold text-marine mb-4">
                {t("contact.title")}
              </h2>
              <p>
                {t("contact.phone")}
                <br />
                {t("contact.email")}
              </p>
            </div>

            {/* Supervisory Authority */}
            <div className="mb-12">
              <h2 className="text-2xl font-semibold text-marine mb-4">
                {t("supervisory.title")}
              </h2>
              <p>
                {t("supervisory.name")}
                <br />
                {t("supervisory.address.street")}
                <br />
                {t("supervisory.address.city")}
                <br />
                <Link
                  href={t("supervisory.website")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gold hover:text-marine transition-colors duration-300"
                >
                  {t("supervisory.website")}
                </Link>
              </p>
            </div>

            {/* Professional Information */}
            <div className="mb-12">
              <h2 className="text-2xl font-semibold text-marine mb-4">
                {t("professional.title")}
              </h2>

              <p>
                <strong>{t("professional.designation.title")}</strong>{" "}
                {t("professional.designation.value")}
              </p>

              <p className="mt-4">
                <strong>{t("professional.chamber.title")}</strong>
                <br />
                {t("professional.chamber.name")}
                <br />
                {t("professional.chamber.address.street")}
                <br />
                {t("professional.chamber.address.city")}
              </p>

              <p className="mt-4">
                <strong>{t("professional.issuedIn.title")}</strong>{" "}
                {t("professional.issuedIn.value")}
              </p>

              <div className="mt-4">
                <p className="font-semibold">
                  {t("professional.regulations.title")}
                </p>
                <ul className="list-none pl-0 mt-2 space-y-2">
                  {t
                    .raw("professional.regulations.items")
                    .map(
                      (item: { name: string; link: string }, index: number) => (
                        <li key={index}>
                          <Link
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gold hover:text-marine transition-colors duration-300"
                          >
                            {item.name}
                          </Link>
                        </li>
                      )
                    )}
                </ul>
              </div>
            </div>

            {/* Insurance Information */}
            <div className="mb-12">
              <h2 className="text-2xl font-semibold text-marine mb-4">
                {t("insurance.title")}
              </h2>
              <p>
                <strong>{t("insurance.insurer.title")}</strong>
                <br />
                {t("insurance.insurer.name")}
                <br />
                {t("insurance.insurer.address.street")}
                <br />
                {t("insurance.insurer.address.city")}
              </p>
              <p className="mt-4">
                <strong>{t("insurance.coverage.title")}</strong>{" "}
                {t("insurance.coverage.value")}
              </p>
            </div>

            {/* Dispute Resolution */}
            <div>
              <h2 className="text-2xl font-semibold text-marine mb-4">
                {t("disputes.title")}
              </h2>
              <p>{t("disputes.text")}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ImprintContent;
