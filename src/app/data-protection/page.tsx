"use client";

import React from "react";
import { motion } from "framer-motion";

const DataProtectionPage = () => {
  return (
    <section className="py-32 bg-marine-light">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-marine mb-8">
            Data Protection
          </h1>
          
          <div className="prose prose-lg text-marine/70">
            {/* Add your data protection content here */}
            <h2 className="text-2xl font-semibold text-marine mt-8 mb-4">
              Privacy Policy
            </h2>
            <p>
              We take the protection of your personal data very seriously. This privacy policy informs you about how we handle your personal data when you visit our website.
            </p>

            <h2 className="text-2xl font-semibold text-marine mt-8 mb-4">
              Data Collection
            </h2>
            <p>
              When you visit our website, we collect certain data automatically for technical reasons. This includes:
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>IP address</li>
              <li>Date and time of access</li>
              <li>Browser type and version</li>
              <li>Operating system</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DataProtectionPage; 