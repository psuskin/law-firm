"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";
import Button from "@/components/ui/Button";
import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import LocaleSwitcher from "@/components/LocaleSwitcher";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const { scrollY } = useScroll();
  const t = useTranslations("navigation");
  const locale = useLocale();

  const headerHeight = useTransform(scrollY, [0, 100], ["6rem", "5rem"]);
  const headerBackground = useTransform(
    scrollY,
    [0, 100],
    ["rgba(255, 255, 255, 0.8)", "rgba(255, 255, 255, 0.95)"]
  );

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = document.querySelectorAll("section[id]");
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop;
        const sectionHeight = section.clientHeight;
        const sectionId = section.getAttribute("id") || "";

        if (
          scrollPosition >= sectionTop &&
          scrollPosition <= sectionTop + sectionHeight
        ) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { title: t("home"), href: "#home" },
    { title: t("services"), href: "#services" },
    { title: t("legalAreas"), href: "#legal-areas" },
    { title: t("advantages"), href: "#advantages" },
    { title: t("aboutMe"), href: "#about" },
    { title: t("contact"), href: "#contact" },
  ].map((item) => ({
    ...item,
    className: "text-[13px] lg:text-[14px] xl:text-[15px]",
  }));

  const handleScroll = async (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const targetId = href.replace("#", "");

    if (pathname !== `/${locale}`) {
      window.location.href = `/${locale}#${targetId}`;
      return;
    }

    const element = document.getElementById(targetId);
    if (element) {
      const navHeight = 96;
      const elementPosition = element.offsetTop - navHeight;

      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });

      setIsOpen(false);
      setActiveSection(targetId);
    }
  };

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (pathname !== `/${locale}`) {
      window.location.href = `/${locale}`;
    } else {
      handleScroll(e, "#home");
    }
  };

  const isLinkActive = (href: string) => {
    const sectionId = href.replace("#", "");
    return sectionId === activeSection;
  };

  return (
    <>
      <motion.nav
        style={{
          height: headerHeight,
          backgroundColor: headerBackground,
          backdropFilter: "blur(8px)",
        }}
        className={`fixed w-full z-40 border-b transition-all duration-300 ${
          isScrolled ? "border-marine/10 shadow-sm" : "border-transparent"
        }`}
      >
        <div className="max-w-[1500px] mx-auto px-4 h-full">
          <div className="flex items-center justify-between h-full gap-2 md:gap-4">
            {/* Logo Container - Add max-width to control logo size */}
            <Link
              onClick={handleLogoClick}
              href={`/${locale}`}
              className="flex items-center flex-shrink-0 w-[200px] xl:w-[300px]"
            >
              <Image
                src="/Anwaltskanzlei_Guer-trans.png"
                alt="Logo"
                width={300}
                height={80}
                className="w-auto h-[35px] sm:h-[40px] md:h-[45px] lg:h-[50px] xl:h-[55px] object-contain"
                priority
              />
            </Link>

            <div className="hidden lg:flex flex-1 items-center justify-center">
              <div className="flex items-center space-x-3 xl:space-x-6">
                {menuItems.map((item) => (
                  <Link
                    key={item.title}
                    href={item.href}
                    onClick={(e) => handleScroll(e, item.href)}
                    className={`group relative font-medium uppercase tracking-wide transition-colors duration-200 ${
                      item.className
                    } ${
                      isLinkActive(item.href)
                        ? "text-marine"
                        : "text-marine/70 hover:text-marine"
                    }`}
                  >
                    <span className="relative z-10 whitespace-nowrap">
                      {item.title}
                    </span>
                    {isLinkActive(item.href) && (
                      <motion.span
                        layoutId="activeMenu"
                        className="absolute bottom-0 left-0 w-full h-[2px] bg-gold"
                        transition={{
                          type: "spring",
                          stiffness: 380,
                          damping: 30,
                        }}
                      />
                    )}
                  </Link>
                ))}
              </div>
            </div>

            {/* Right Section: Language Switcher and Consultation Button */}
            <div className="hidden lg:flex items-center gap-4 w-[200px] xl:w-[310px] justify-end">
              <LocaleSwitcher />
              <Button
                variant="primary"
                size="sm"
                onClick={(e) => handleScroll(e as any, "#contact")}
                className="text-[13px] lg:text-[14px] whitespace-nowrap px-4 py-2.5 min-w-[140px]"
              >
                {t("freeConsultation")}
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-marine/70 hover:text-marine focus:outline-none"
              aria-label="Toggle menu"
            >
              <div className="relative w-6 h-6">
                <motion.span
                  className="absolute h-0.5 w-6 bg-current transform transition-all duration-300"
                  style={{ top: "calc(50% - 4px)" }}
                  animate={isOpen ? { rotate: 45, y: 4 } : { rotate: 0, y: 0 }}
                />
                <motion.span
                  className="absolute h-0.5 w-6 bg-current transform transition-all duration-300"
                  style={{ top: "calc(50% + 4px)" }}
                  animate={
                    isOpen ? { rotate: -45, y: -4 } : { rotate: 0, y: 0 }
                  }
                />
              </div>
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40 lg:hidden"
              onClick={() => setIsOpen(false)}
            />

            {/* Mobile Menu Panel */}
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 32, stiffness: 300 }}
              className="fixed top-0 left-0 w-[90%] sm:w-[380px] h-full bg-white shadow-xl z-50 lg:hidden overflow-y-auto"
            >
              <div className="flex flex-col h-full">
                {/* Mobile Header */}
                <div className="p-4 sm:p-6 flex items-center justify-between border-b border-marine/10">
                  <Link href="/" onClick={() => setIsOpen(false)}>
                    <Image
                      src="/Anwaltskanzlei_Guer-trans.png"
                      alt="Logo"
                      width={240}
                      height={60}
                      className="h-[40px] w-auto object-contain"
                    />
                  </Link>
                  <div className="flex items-center gap-4">
                    <LocaleSwitcher />
                    <button
                      onClick={() => setIsOpen(false)}
                      className="p-2 text-marine/60 hover:text-marine"
                      aria-label="Close menu"
                    >
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>
                </div>

                {/* Menu Items */}
                <div className="flex-1 overflow-y-auto">
                  <nav className="px-6 py-8">
                    {menuItems.map((item, i) => (
                      <motion.div
                        key={item.title}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                      >
                        <Link
                          href={item.href}
                          onClick={() => setIsOpen(false)}
                          className={`group flex items-center justify-between py-4 relative`}
                        >
                          <span
                            className={`text-lg font-medium transition-colors duration-200 ${
                              isLinkActive(item.href)
                                ? "text-marine"
                                : "text-marine/60 group-hover:text-marine"
                            }`}
                          >
                            {item.title}
                          </span>

                          {/* Arrow Icon */}
                          <motion.span
                            className={`transform transition-all duration-200 ${
                              isLinkActive(item.href)
                                ? "text-gold"
                                : "text-marine/40 group-hover:text-marine/60"
                            }`}
                          >
                            <svg
                              className="w-5 h-5"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth={1.5}
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                              />
                            </svg>
                          </motion.span>

                          {/* Bottom Border */}
                          <motion.div
                            className="absolute bottom-0 left-0 right-0 h-[1px] bg-marine/10"
                            initial={{ scaleX: 0 }}
                            whileHover={{ scaleX: 1 }}
                            transition={{ duration: 0.3 }}
                          />
                        </Link>
                      </motion.div>
                    ))}
                  </nav>
                </div>

                {/* Footer */}
                <div className="p-6 mt-auto border-t border-marine/10">
                  <Button
                    variant="primary"
                    size="lg"
                    className="w-full shadow-sm hover:shadow-md transition-shadow duration-200"
                    onClick={(e) => {
                      handleScroll(e as any, "#contact");
                      setIsOpen(false);
                    }}
                  >
                    {t("freeConsultation")}
                  </Button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
