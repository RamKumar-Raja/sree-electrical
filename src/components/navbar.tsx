"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Products", href: "/products" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ];

  const isTransparent = !isScrolled && pathname === "/";

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${
      isTransparent
        ? "bg-transparent py-6 border-transparent"
        : "bg-white/95 backdrop-blur-md shadow-sm border-gray-100 py-4"
    }`}>
      <div className="container mx-auto px-4 md:px-8 xl:px-12 max-w-[1400px]">
        <div className="flex justify-between items-center">

          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="SRES Electric Logo"
              width={48}
              height={48}
              priority
              className="object-contain"
            />
            <span className={`text-2xl font-black tracking-tighter transition-colors ${
              isTransparent ? "text-white" : "text-brand-dark"
            }`}>
              SRES <span className="text-brand-primary">Electric</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8 xl:gap-12">
            <div className="flex items-center gap-8">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`text-[15px] font-semibold transition-all relative group ${
                      isTransparent
                        ? isActive ? "text-white" : "text-white/80 hover:text-white"
                        : isActive ? "text-brand-primary" : "text-gray-600 hover:text-brand-primary"
                    }`}
                  >
                    {link.name}
                    <span className={`absolute -bottom-1 left-0 w-full h-0.5 bg-brand-primary transition-transform origin-left ${
                      isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                    }`} />
                  </Link>
                );
              })}
            </div>

            <Link
              href="/contact"
              className={`px-6 py-2.5 rounded-full font-bold text-sm transition-all ${
                isTransparent
                  ? "bg-brand-primary text-black hover:bg-brand-secondary shadow-lg shadow-brand-primary/30"
                  : "bg-brand-primary text-black hover:bg-brand-dark hover:text-white shadow-lg shadow-brand-primary/20 hover:-translate-y-0.5"
              }`}
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className={`lg:hidden p-2 rounded-md transition-colors ${
              isTransparent ? "text-white" : "text-gray-900"
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={isMobileMenuOpen ? "close" : "open"}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.15 }}
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </motion.div>
            </AnimatePresence>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden overflow-hidden"
          >
            <div className="bg-white border-t border-gray-100 shadow-xl py-6 flex flex-col items-center gap-5">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04, duration: 0.2 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`text-lg font-bold transition-colors ${
                      pathname === link.href ? "text-brand-primary" : "text-gray-800 hover:text-brand-primary"
                    }`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <Link
                href="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="mt-2 bg-brand-primary text-black font-bold px-8 py-3 rounded-full text-base hover:bg-brand-dark hover:text-white transition-colors"
              >
                Get Started
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
