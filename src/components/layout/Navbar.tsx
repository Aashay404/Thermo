"use client";

import React from "react";
import { Phone, MessageSquare, ShieldCheck, Mail } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-white/5 bg-[#0C2340]/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand Identity */}
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-teal-accent text-white shadow-lg shadow-teal-accent/20">
            <ShieldCheck className="h-6 w-6" />
          </div>
          <div>
            <div className="text-lg font-bold tracking-tight text-white font-display">
              THERMOVAULT <span className="text-teal-light">SYSTEMS</span>
            </div>
            <div className="hidden text-[10px] text-silver sm:block font-mono">
              Securing the Cold Chain Ecosystem
            </div>
          </div>
        </div>

        {/* Sticky CTAs / Contact Bar */}
        <div className="flex items-center gap-3">
          <a
            href="tel:+918055010620"
            className="hidden items-center gap-2 rounded-lg px-3 py-1.5 text-xs font-medium text-silver transition-colors hover:text-white md:flex"
          >
            <Phone className="h-3.5 w-3.5 text-teal-light" />
            <span>+91 80550 10620</span>
          </a>

          <a
            href="mailto:info@thermovaultsystems.com"
            className="hidden items-center gap-2 rounded-lg px-3 py-1.5 text-xs font-medium text-silver transition-colors hover:text-white lg:flex"
          >
            <Mail className="h-3.5 w-3.5 text-teal-light" />
            <span>info@thermovaultsystems.com</span>
          </a>

          <a
            href="https://wa.me/918055010620?text=Hi%20ThermoVault,%20I%20need%20a%20cold%20room%20solution."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 rounded-lg bg-emerald-600/90 px-3.5 py-1.5 text-xs font-medium text-white transition-all hover:bg-emerald-500 hover:shadow-lg hover:shadow-emerald-600/20 active:scale-95"
          >
            <MessageSquare className="h-3.5 w-3.5 fill-white/10" />
            <span>WhatsApp Us</span>
          </a>

          <button
            onClick={() => {
              const event = new CustomEvent("open-quote-modal");
              window.dispatchEvent(event);
            }}
            className="rounded-lg bg-teal-accent px-4 py-1.5 text-xs font-medium text-white transition-all hover:bg-teal-light hover:shadow-lg hover:shadow-teal-accent/30 active:scale-95"
          >
            Get Free Quote
          </button>
        </div>
      </div>
    </header>
  );
}
