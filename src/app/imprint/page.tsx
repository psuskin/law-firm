"use client";

import React from "react";
import { motion } from "framer-motion";

const ImprintPage = () => {
  return (
    <section className="py-32 bg-marine-light">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-marine mb-8">
            Imprint
          </h1>

          <div className="prose prose-lg text-marine/70">
            {/* Add your imprint content here */}
            <h2 className="text-2xl font-semibold text-marine mt-8 mb-4">
              Information according to § 5 TMG
            </h2>
            <p>
              Anwaltskanzlei Gür Law Firm
              <br />
              Bei den Mühren 70
              <br />
              20457 Hamburg
            </p>

            <h2 className="text-2xl font-semibold text-marine mt-8 mb-4">
              Contact
            </h2>
            <p>
              Phone: (040) 638 622 39
              <br />
              Email: info@kanzlei-cerkezovic.de
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ImprintPage;
