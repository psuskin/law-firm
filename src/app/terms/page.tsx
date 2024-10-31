"use client";

import React from "react";
import { motion } from "framer-motion";

const TermsPage = () => {
  return (
    <section className="py-32 bg-marine-light">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-marine mb-8">
            Terms of Service
          </h1>
          
          <div className="prose prose-lg text-marine/70">
            {/* Add your terms of service content here */}
            <h2 className="text-2xl font-semibold text-marine mt-8 mb-4">
              General Terms
            </h2>
            <p>
              These terms of service outline the rules and regulations for the use of Čerkezović Law Firm&apos;s website and services.
            </p>

            <h2 className="text-2xl font-semibold text-marine mt-8 mb-4">
              Intellectual Property
            </h2>
            <p>
              All content on this website, including but not limited to text, graphics, logos, images, and software, is the property of Čerkezović Law Firm and is protected by intellectual property laws.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TermsPage; 