"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Products", href: "/products" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 border-b border-transparent ${
        isScrolled || pathname !== "/" 
          ? "bg-white/95 backdrop-blur-md shadow-sm border-gray-100 py-4" 
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 xl:px-12 max-w-[1400px]">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link
            href="/"
            className={`text-2xl font-black tracking-tighter ${
              isScrolled || pathname !== "/" ? "text-blue-950" : "text-white"
            }`}
          >
            SRES <span className="text-blue-600 font-bold">Electric</span>
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
                      isScrolled || pathname !== "/"
                        ? isActive ? "text-blue-600" : "text-gray-600 hover:text-blue-600"
                        : isActive ? "text-white" : "text-white/80 hover:text-white"
                    }`}
                  >
                    {link.name}
                    <span 
                      className={`absolute -bottom-1 left-0 w-full h-0.5 bg-blue-600 transition-transform origin-left ${
                        isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                      }`}
                    />
                  </Link>
                );
              })}
            </div>
            
            <Link
              href="/contact"
              className={`px-6 py-2.5 rounded-full font-bold text-sm transition-all flex items-center gap-2 ${
                isScrolled || pathname !== "/"
                  ? "bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-600/20 hover:shadow-blue-600/40 hover:-translate-y-0.5"
                  : "bg-white text-blue-900 hover:bg-gray-100"
              }`}
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`lg:hidden p-2 rounded-md ${
              isScrolled || pathname !== "/" ? "text-gray-900" : "text-white"
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-xl py-6 flex flex-col items-center gap-6 border-t border-gray-100">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`text-lg font-bold ${
                pathname === link.href ? "text-blue-600" : "text-gray-800"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
