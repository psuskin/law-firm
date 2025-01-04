"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";

export default function NotFoundContent() {
  const t = useTranslations("not-found");

  return (
    <div className="min-h-screen flex items-center justify-center bg-law-background">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-primary-600">404</h1>
        <h2 className="mt-2 text-3xl font-semibold text-primary-800">
          {t("title")}
        </h2>
        <p className="mt-2 text-lg text-muted-foreground">{t("description")}</p>
        <div className="mt-8">
          <Link
            href="/"
            className="px-5 py-3 bg-primary text-primary-foreground rounded-full hover:bg-primary-600 transition duration-300"
          >
            {t("button")}
          </Link>
        </div>
      </div>
    </div>
  );
}
