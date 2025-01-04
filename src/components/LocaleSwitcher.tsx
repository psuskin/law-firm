"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GlobeAltIcon } from "@heroicons/react/24/outline";

const languages = [
  { code: "de", name: "Deutsch" },
  { code: "en", name: "English" },
  { code: "tr", name: "Türkçe" },
];

export default function LocaleSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const switchLocale = (newLocale: string) => {
    const currentPath = pathname.replace(`/${locale}`, "");
    router.push(`/${newLocale}${currentPath}`);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative z-50" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 text-marine/70 hover:text-marine transition-colors duration-300 px-2 py-1"
      >
        <GlobeAltIcon className="w-5 h-5" />
        <span className="text-sm font-medium uppercase hidden sm:inline">
          {locale}
        </span>
        <span className="text-sm font-medium sm:hidden">
          {languages.find((lang) => lang.code === locale)?.name}
        </span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute right-0 mt-2 w-36 bg-white rounded-lg shadow-lg overflow-hidden border border-marine/10"
          >
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => switchLocale(lang.code)}
                className={`block w-full text-left px-4 py-2.5 text-sm transition-colors duration-200 ${
                  locale === lang.code
                    ? "bg-marine/5 text-marine font-medium"
                    : "text-marine/70 hover:bg-marine/5 hover:text-marine"
                }`}
              >
                <span className="flex items-center justify-between">
                  {lang.name}
                  {locale === lang.code && (
                    <motion.div
                      layoutId="activeLocale"
                      className="w-1 h-1 rounded-full bg-gold"
                    />
                  )}
                </span>
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
