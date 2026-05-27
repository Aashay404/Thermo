"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Phone, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "HOME", href: "/" },
    { label: "ABOUT US", href: "/about" },
    { label: "SERVICES", href: "/services" },
    { label: "PRODUCTS", href: "/products" },
    { label: "PROJECTS", href: "/projects" },
    { label: "SUBSIDY ASSISTANCE", href: "/subsidy" },
    { label: "BLOG", href: "/blog" },
    { label: "CONTACT", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-200 bg-white shadow-sm">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand Logo - Left */}
        <Link href="/" className="flex items-center shrink-0">
          <Image
            src="/images/logo.png"
            alt="ThermoVault Systems Logo"
            width={240}
            height={60}
            className="h-14 w-auto object-contain"
            priority
          />
        </Link>

        {/* Centered Navigation Links (Desktop) */}
        <nav className="hidden lg:flex items-center gap-5 xl:gap-7">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-[10px] xl:text-[11px] font-bold tracking-wider transition-all duration-200 relative pb-1 border-b-2 hover:text-blue-600 ${
                  isActive
                    ? "text-blue-600 border-blue-600 font-extrabold"
                    : "text-[#0c2340] border-transparent"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Right Action buttons */}
        <div className="flex items-center gap-2 sm:gap-4 shrink-0">
          <button
            onClick={() => {
              const event = new CustomEvent("open-quote-modal");
              window.dispatchEvent(event);
            }}
            className="hidden sm:inline-block rounded-md bg-[#0c2340] px-5 py-2 text-xs font-bold text-white transition-all hover:bg-[#183960] shadow-md hover:shadow-lg active:scale-95"
          >
            Get Free Consultation
          </button>

          <a
            href="tel:+918055010620"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-slate-50 text-[#0c2340] hover:bg-slate-100 hover:text-blue-600 transition-colors"
            title="Call Support"
          >
            <Phone className="h-4 w-4" />
          </a>

          {/* Mobile Hamburger Toggle Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-slate-50 text-[#0c2340] hover:bg-slate-100 hover:text-blue-600 transition-colors lg:hidden"
            title="Toggle Menu"
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Panel (Slide down dropdown) */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="lg:hidden border-b border-slate-200 bg-white overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block py-2.5 px-3 text-xs font-bold rounded-lg transition-colors ${
                      isActive
                        ? "bg-blue-50 text-blue-600 font-extrabold"
                        : "text-[#0c2340] hover:bg-slate-50"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}

              {/* Consultation button in mobile menu */}
              <div className="pt-4 border-t border-slate-100 sm:hidden">
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    const event = new CustomEvent("open-quote-modal");
                    window.dispatchEvent(event);
                  }}
                  className="w-full text-center rounded-lg bg-[#0c2340] py-3 text-xs font-bold text-white transition-all hover:bg-[#183960] active:scale-95"
                >
                  Get Free Consultation
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
