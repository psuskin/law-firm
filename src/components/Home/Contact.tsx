"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ContactInfo from "./ContactInfo";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import {
  validateForm,
  type FormData,
  type ValidationErrors,
} from "@/utils/validateForm";
import SuccessMessage from "@/components/ui/SuccessMessage";
import { useTranslations } from "next-intl";

const Contact = () => {
  const t = useTranslations("contact");
  const [userCountry, setUserCountry] = useState("de");
  const [isLoading, setIsLoading] = useState(true);
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    const detectCountry = async () => {
      try {
        const apis = [
          "https://api.ipdata.co?api-key=ec515f0e38e59524548351e58b426df4d785fe5d9ece124372b5b1dd",
          "https://api.country.is",
          "https://geolocation-db.com/json/",
        ];

        for (const api of apis) {
          try {
            const response = await fetch(api);
            const data = await response.json();
            const countryCode =
              data.country_code || data.country || data.countryCode;

            if (countryCode) {
              setUserCountry(countryCode.toLowerCase());
              break;
            }
          } catch (error) {
            continue;
          }
        }
      } catch (error) {
        console.log("Could not detect country, using default Germany");
      } finally {
        setIsLoading(false);
      }
    };

    detectCountry();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const validationErrors = validateForm(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) return;

    setIsSubmitting(true);

    try {
      console.log("Form Data:", formData);
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Show success message
      setShowSuccess(true);

      // Reset form
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
      });

      // Hide success message after 5 seconds
      setTimeout(() => {
        setShowSuccess(false);
      }, 5000);
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <section className="py-24 bg-marine-light">
      {/* Success Message */}
      <SuccessMessage
        message={t("form.success")}
        isVisible={showSuccess}
        onClose={() => setShowSuccess(false)}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-marine mb-4">
              {t("title")}
            </h2>
            <p className="text-marine/70">{t("subtitle")}</p>
          </div>

          {/* Form */}
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            {/* Left Column - Contact Info */}
            <ContactInfo />

            {/* Right Column - Form */}
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Name Fields */}
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder={t("form.firstName.placeholder")}
                    className={`w-full px-0 py-3 bg-transparent border-b-2 ${
                      errors.firstName ? "border-red-500" : "border-marine/20"
                    } focus:border-marine placeholder:text-marine/40 text-marine outline-none transition-all duration-200`}
                  />
                  {errors.firstName && (
                    <p className="mt-1 text-sm text-red-500">
                      {t("form.firstName.error")}
                    </p>
                  )}
                </div>
                <div>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder={t("form.lastName.placeholder")}
                    className={`w-full px-0 py-3 bg-transparent border-b-2 ${
                      errors.lastName ? "border-red-500" : "border-marine/20"
                    } focus:border-marine placeholder:text-marine/40 text-marine outline-none transition-all duration-200`}
                  />
                  {errors.lastName && (
                    <p className="mt-1 text-sm text-red-500">
                      {t("form.lastName.error")}
                    </p>
                  )}
                </div>
              </div>

              {/* Email Field */}
              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder={t("form.email.placeholder")}
                  className={`w-full px-0 py-3 bg-transparent border-b-2 ${
                    errors.email ? "border-red-500" : "border-marine/20"
                  } focus:border-marine placeholder:text-marine/40 text-marine outline-none transition-all duration-200`}
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-500">
                    {t("form.email.error")}
                  </p>
                )}
              </div>

              {/* Phone Field with Country Code */}
              <div>
                {!isLoading && (
                  <PhoneInput
                    country={userCountry}
                    value={formData.phone}
                    onChange={(phone) => {
                      setFormData((prev) => ({ ...prev, phone }));
                      if (errors.phone) {
                        setErrors((prev) => ({ ...prev, phone: undefined }));
                      }
                    }}
                    placeholder={t("form.phone.placeholder")}
                    containerClass="phone-input-container"
                    inputClass="phone-input"
                    buttonClass="country-dropdown"
                    searchClass="search-dropdown"
                    dropdownClass="country-list"
                    containerStyle={{
                      border: "none",
                      borderBottom: "2px solid rgba(1, 39, 74, 0.2)",
                    }}
                    inputStyle={{
                      width: "100%",
                      backgroundColor: "transparent",
                      border: "none",
                      borderRadius: "0",
                      color: "#01274a",
                      height: "48px",
                    }}
                    buttonStyle={{
                      backgroundColor: "transparent",
                      border: "none",
                      borderRadius: "0",
                    }}
                    dropdownStyle={{
                      width: "300px",
                    }}
                    searchStyle={{
                      width: "100%",
                      padding: "10px",
                      margin: "0",
                    }}
                  />
                )}
                {errors.phone && (
                  <p className="mt-1 text-sm text-red-500">
                    {t("form.phone.error")}
                  </p>
                )}
              </div>

              {/* Message Field */}
              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder={t("form.message.placeholder")}
                  rows={4}
                  className={`w-full px-0 py-3 bg-transparent border-b-2 ${
                    errors.message ? "border-red-500" : "border-marine/20"
                  } focus:border-marine placeholder:text-marine/40 text-marine outline-none transition-all duration-200 resize-none`}
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-500">
                    {t("form.message.error")}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                className="relative overflow-hidden rounded-md w-full"
                whileHover={!isSubmitting ? "hover" : undefined}
                initial="initial"
                disabled={isSubmitting}
              >
                {/* Button Background with Gradient */}
                <div className="absolute inset-0 bg-gradient-to-r from-gold via-gold to-gold opacity-90" />

                {/* Animated Background Layer */}
                <motion.div
                  className="absolute inset-0 bg-white"
                  initial={{ x: "-100%" }}
                  variants={{
                    initial: { x: "-100%", opacity: 0.1 },
                    hover: { x: "100%", opacity: 0.2 },
                  }}
                  transition={{ duration: 0.5 }}
                />

                {/* Button Content */}
                <div className="relative px-6 py-4 flex items-center justify-center">
                  {isSubmitting ? (
                    <div className="flex items-center gap-3">
                      {/* Creative Loading Animation */}
                      <div className="flex gap-1">
                        <motion.span
                          className="w-2 h-2 rounded-full bg-marine"
                          animate={{
                            y: [0, -8, 0],
                            scale: [1, 0.8, 1],
                          }}
                          transition={{
                            duration: 0.8,
                            repeat: Infinity,
                            delay: 0,
                          }}
                        />
                        <motion.span
                          className="w-2 h-2 rounded-full bg-marine"
                          animate={{
                            y: [0, -8, 0],
                            scale: [1, 0.8, 1],
                          }}
                          transition={{
                            duration: 0.8,
                            repeat: Infinity,
                            delay: 0.2,
                          }}
                        />
                        <motion.span
                          className="w-2 h-2 rounded-full bg-marine"
                          animate={{
                            y: [0, -8, 0],
                            scale: [1, 0.8, 1],
                          }}
                          transition={{
                            duration: 0.8,
                            repeat: Infinity,
                            delay: 0.4,
                          }}
                        />
                      </div>
                      <span className="font-semibold text-marine">
                        SUBMITTING
                      </span>
                    </div>
                  ) : (
                    <span className="font-semibold text-marine">
                      {t("form.submit")}
                    </span>
                  )}
                </div>

                {/* Animated Border */}
                <div className="absolute inset-0 border-2 border-gold rounded-md" />

                {/* Shine Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0"
                  variants={{
                    initial: { opacity: 0, x: "-100%" },
                    hover: { opacity: 0.2, x: "100%" },
                  }}
                  transition={{ duration: 0.5 }}
                />
              </motion.button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
