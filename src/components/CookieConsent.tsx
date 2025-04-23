"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const CookieConsent = () => {
  const [showConsent, setShowConsent] = useState(false);

  useEffect(() => {
    const hasConsented = localStorage.getItem("cookieConsent");
    if (!hasConsented) {
      setShowConsent(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "true");
    setShowConsent(false);

    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("consent", "update", {
        analytics_storage: "granted",
      });
    }
  };

  const handleDecline = () => {
    localStorage.setItem("cookieConsent", "false");
    setShowConsent(false);

    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("consent", "update", {
        analytics_storage: "denied",
      });
    }
  };

  return (
    <AnimatePresence>
      {showConsent && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 400, damping: 30 }}
          className="fixed bottom-0 sm:bottom-6 left-0 sm:left-1/2 w-full sm:w-[95%] sm:-translate-x-1/2 max-w-4xl bg-white shadow-2xl sm:rounded-2xl z-50 overflow-hidden"
        >
          {/* Background Pattern - Responsive Grid */}
          <div className="absolute inset-0 opacity-[0.02]">
            <div className="absolute top-0 left-0 w-full h-full">
              <div className="w-full h-full grid grid-cols-4 sm:grid-cols-8">
                {Array.from({ length: 32 }).map((_, i) => (
                  <div key={i} className="border-r border-marine" />
                ))}
              </div>
            </div>
          </div>

          <div className="relative p-4 sm:p-6 md:p-8">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 md:gap-6">
              {/* Content - Improved Text Scaling */}
              <div className="flex-1 space-y-2">
                <h3 className="text-base sm:text-lg font-semibold text-marine mb-1 sm:mb-2">
                  Cookie Settings
                </h3>
                <p className="text-marine/70 text-xs sm:text-sm leading-relaxed max-w-[90%] sm:max-w-none">
                  Wir verwenden Cookies, um Ihr Browsererlebnis zu verbessern, personalisierte Inhalte bereitzustellen und unseren Datenverkehr zu analysieren. Indem Sie auf &quot;Alle akzeptieren&quot; klicken, stimmen Sie der Verwendung von Cookies zu.{" "}
                  <a
                  href="/data-protection"
                  className="text-marine underline hover:text-gold transition-colors inline-flex items-center gap-1 group whitespace-nowrap"
                  >
                  Mehr erfahren
                  <svg
                    className="w-3 h-3 transform transition-transform group-hover:translate-x-0.5"
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
                  </a>
                </p>
              </div>

              {/* Buttons - Responsive Layout */}
              <div className="flex items-center gap-2 sm:gap-3 w-full md:w-auto mt-2 md:mt-0">
                <button
                  onClick={handleDecline}
                  className="flex-1 md:flex-none min-w-[100px] px-4 sm:px-6 py-2 sm:py-2.5 text-xs sm:text-sm font-medium text-marine/70 hover:text-marine bg-marine/5 hover:bg-marine/10 rounded-lg sm:rounded-xl transition-colors duration-200"
                >
                  Decline
                </button>
                <button
                  onClick={handleAccept}
                  className="flex-1 md:flex-none min-w-[100px] relative group px-4 sm:px-6 py-2 sm:py-2.5 text-xs sm:text-sm font-medium text-white bg-marine rounded-lg sm:rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-marine/20"
                >
                  <span className="relative z-10">Accept All</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-gold/20 via-gold/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Border Gradient */}
          <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-marine via-gold to-marine" />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieConsent;
