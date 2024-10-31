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

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const { scrollY } = useScroll();

  // Transform values for scroll-based animations
  const headerHeight = useTransform(scrollY, [0, 100], ["6rem", "5rem"]);
  const headerBackground = useTransform(
    scrollY,
    [0, 100],
    ["rgba(255, 255, 255, 0.8)", "rgba(255, 255, 255, 0.95)"]
  );

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Get all sections and their positions
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
    { title: "Home", href: "#home" },
    { title: "Services", href: "#services" },
    { title: "Legal Areas", href: "#legal-areas" },
    { title: "Advantages", href: "#advantages" },
    { title: "About Me", href: "#about" },
    { title: "Contact", href: "#contact" },
  ];

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);
    
    if (element) {
      const navHeight = 96; // Height of your navbar
      const elementPosition = element.offsetTop - navHeight;

      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });

      setIsOpen(false);
      setActiveSection(targetId);
    }
  };

  // Check if link is active
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
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 h-full">
          <div className="flex justify-between items-center h-full">
            {/* Logo */}
            <Link 
              href="#home" 
              className="flex items-center"
              onClick={(e) => handleScroll(e, "#home")}
            >
              <span className="text-2xl font-bold text-marine uppercase">cerkezovic</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-12">
              {menuItems.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  onClick={(e) => handleScroll(e, item.href)}
                  className={`group relative text-[15px] font-medium uppercase tracking-wide ${
                    isLinkActive(item.href) ? "text-marine" : "text-marine/70"
                  }`}
                >
                  <span className="relative z-10 transition-colors duration-300 group-hover:text-marine">
                    {item.title}
                  </span>
                  {isLinkActive(item.href) && (
                    <motion.span
                      layoutId="activeMenu"
                      className="absolute bottom-0 left-0 w-full h-[2px] bg-gold"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              ))}
              <Button 
                variant="primary" 
                size="md"
                onClick={(e) => handleScroll(e as any, "#contact")}
              >
                FREE CONSULTATION
              </Button>
            </div>

            {/* Modern Hamburger Menu */}
            <div className="lg:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="relative w-12 h-12 text-marine/70 focus:outline-none z-50"
              >
                <span className="sr-only">Open menu</span>
                <motion.span
                  className="absolute h-0.5 w-8 bg-current transform transition-all duration-300 ease-in-out"
                  style={{ top: "calc(50% - 4px)", left: "calc(50% - 12px)" }}
                  animate={isOpen ? { rotate: 45, y: 4 } : { rotate: 0, y: 0 }}
                />
                <motion.span
                  className="absolute h-0.5 w-8 bg-current transform transition-all duration-300 ease-in-out"
                  style={{ top: "calc(50% + 4px)", left: "calc(50% - 12px)" }}
                  animate={
                    isOpen ? { rotate: -45, y: -4 } : { rotate: 0, y: 0 }
                  }
                />
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 z-40 lg:hidden"
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Mobile menu - Slide from left */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed top-0 left-0 w-[85%] h-full bg-marine z-50 lg:hidden"
          >
            <div className="flex flex-col h-full">
              <div className="p-6 flex justify-between items-center">
                <Link
                  href="/"
                  className="text-2xl font-bold text-white"
                  onClick={() => setIsOpen(false)}
                >
                  ATTORNA
                </Link>
                {/* Close Button */}
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-marine-light/70 hover:text-white transition-colors duration-200"
                >
                  <motion.div
                    whileHover={{ rotate: 90 }}
                    transition={{ duration: 0.2 }}
                  >
                    <svg
                      className="w-8 h-8"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </motion.div>
                </button>
              </div>

              <div className="px-6 py-8 space-y-6">
                {menuItems.map((item, i) => {
                  const isActive = pathname === item.href;
                  return (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <Link
                        href={item.href}
                        className={`group flex items-center text-lg font-medium ${
                          isActive
                            ? "text-gold"
                            : "text-marine-light/70 hover:text-white"
                        }`}
                        onClick={() => setIsOpen(false)}
                      >
                        {item.title}
                        <motion.span
                          className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity"
                          initial={{ x: -10 }}
                          animate={{ x: 0 }}
                        >
                          →
                        </motion.span>
                      </Link>
                    </motion.div>
                  );
                })}
              </div>

              <div className="p-6">
                <Button
                  variant="secondary"
                  size="md"
                  className="w-full"
                  onClick={() => setIsOpen(false)}
                >
                  FREE CONSULTATION
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
