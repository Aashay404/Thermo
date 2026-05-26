"use client";

import React, { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Phone, Mail, MapPin, Calendar, Clock, Terminal, ChevronDown, CheckCircle2, Send } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface FaqItem {
  q: string;
  a: string;
}

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", phone: "", email: "", bizType: "Farmer / FPO", size: "Small (Below 10 MT)", notes: "" });
  const [formSent, setFormSent] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  const faqs: FaqItem[] = [
    { q: "What is the minimum cold room size you install?", a: "Our standard modular enclosures start from 8' x 8' x 8' (approx. 3 MT storage capacity). We can customize panel dimensions for smaller laboratory clean spaces as well." },
    { q: "How long does the installation process take?", a: "Standard walk-in chambers are assembled in 7 to 10 working days once the civil level floor is ready. Large multi-chamber cold storage warehouses take 3 to 5 weeks." },
    { q: "Do you provide AMC services outside Maharashtra?", a: "Yes, we support active installations across adjacent states with dedicated service engineers. We also provide remote telemetry diagnostics for real-time monitoring." },
    { q: "Can I apply for government subsidies on my project?", a: "Yes. ThermoVault structures are engineered to meet NHM (National Horticulture Mission) and NABARD criteria, qualifying for back-ended capital subsidies up to 35%." },
    { q: "What refrigerant gases do your condensing plants use?", a: "We design plants using eco-compliant, non-ozone depleting refrigerants such as R404A, R134a, and R448A to ensure optimal cooling performance and compliance." },
  ];

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.email) return;
    setFormSent(true);
  };

  return (
    <div className="flex flex-col flex-1 min-h-screen bg-[#0C2340] text-white selection:bg-[#0F6E56]">
      {/* Header */}
      <Navbar />

      {/* Hero Header */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#0C2340] via-[#111318] to-[#0c2340] py-16 sm:py-24 text-center">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-4">
          <span className="text-[10px] font-bold uppercase tracking-wider text-teal-light font-mono block">
            Direct Coordination
          </span>
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl font-display">
            Contact Sizing Engineers
          </h1>
          <p className="max-w-xl mx-auto text-xs sm:text-sm text-silver/80 leading-relaxed">
            Get in touch for custom heat load calculations, panel drawings, or subsidy eligibility audits.
          </p>
        </div>
      </section>

      {/* Contact Form & Office Coordinates split grid */}
      <section className="py-20 bg-[#0C2340]/40 border-t border-white/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Contact details & Map card */}
            <div className="space-y-6">
              <span className="text-[10px] font-bold uppercase tracking-wider text-teal-light font-mono block">
                Office Information
              </span>
              <h2 className="text-2xl font-bold tracking-tight text-white font-display">
                Headquarters (Pune)
              </h2>

              <div className="space-y-4 text-xs sm:text-sm">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-teal-light shrink-0 mt-0.5" />
                  <span className="text-silver/85">
                    Sector 4, Bhosari Industrial Area, MIDC, Pune, Maharashtra, India - 411026
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-teal-light shrink-0" />
                  <a href="tel:+918055010620" className="text-silver hover:text-white transition-colors">
                    +91 80550 10620
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-teal-light shrink-0" />
                  <a href="mailto:info@thermovaultsystems.com" className="text-silver hover:text-white transition-colors">
                    info@thermovaultsystems.com
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-teal-light shrink-0" />
                  <span className="text-silver/85">Mon - Sat: 9:00 AM - 7:00 PM | Sun: Closed</span>
                </div>
              </div>

              {/* Mock active coordinates Pune MIDC map grid visualizer */}
              <div className="rounded-2xl border border-white/5 bg-[#111318] p-5 relative overflow-hidden h-48 flex items-center justify-center">
                <div className="absolute inset-0 bg-[radial-gradient(#ffffff03_1px,transparent_1px)] [background-size:12px_12px] opacity-45" />
                <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(29,158,117,0.03)_1px,transparent_1px)] bg-[size:3rem_3rem]" />
                
                <div className="relative z-10 text-center space-y-2">
                  <Terminal className="h-5 w-5 text-teal-light mx-auto animate-pulse" />
                  <div className="text-[10px] font-bold text-white uppercase tracking-wider font-mono">
                    Pune Bhosari MIDC Coordinate Map
                  </div>
                  <div className="text-[9px] text-silver font-mono leading-relaxed">
                    Lat: 18.6298° N | Lon: 73.8446° E<br />
                    Pune Service Fleet Active Area
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Sizing Form */}
            <div className="rounded-2xl border border-white/5 bg-[#0C2340]/60 p-6 md:p-8 shadow-lg">
              <h3 className="text-sm font-bold text-white mb-2 font-display">Schedule Sizing Call</h3>
              <p className="text-xs text-silver/80 mb-6 leading-relaxed">
                Fill out the technical parameters below and our designer will callback.
              </p>

              {formSent ? (
                <div className="rounded-xl border border-teal-accent/20 bg-teal-accent/5 p-8 text-center space-y-3">
                  <CheckCircle2 className="h-10 w-10 text-teal-light mx-auto" />
                  <h4 className="text-xs font-bold text-white">Consulation Form Submitted</h4>
                  <p className="text-[11px] text-silver leading-relaxed">
                    Thank you. Sizing engineers will contact you at your convenience.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-[9px] text-silver font-mono block mb-1">Your Name</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Kuldeep"
                        className="w-full rounded-xl bg-[#0c2340] border border-white/5 p-3 text-xs text-white placeholder-white/20 focus:outline-none focus:border-teal-light"
                      />
                    </div>
                    <div>
                      <label className="text-[9px] text-silver font-mono block mb-1">Mobile Number</label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="e.g. +91 80550 10620"
                        className="w-full rounded-xl bg-[#0c2340] border border-white/5 p-3 text-xs text-white placeholder-white/20 focus:outline-none focus:border-teal-light"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-[9px] text-silver font-mono block mb-1">Email Address</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. info@thermovaultsystems.com"
                      className="w-full rounded-xl bg-[#0c2340] border border-white/5 p-3 text-xs text-white placeholder-white/20 focus:outline-none focus:border-teal-light"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-[9px] text-silver font-mono block mb-1">Application Sector</label>
                      <select
                        value={formData.bizType}
                        onChange={(e) => setFormData({ ...formData, bizType: e.target.value })}
                        className="w-full rounded-xl bg-[#0c2340] border border-white/5 p-3 text-xs text-white focus:outline-none"
                      >
                        <option value="Farmer / FPO">Farmer / FPO</option>
                        <option value="Dairy Processing">Dairy Processing</option>
                        <option value="Pharma Vaccine Storage">Pharma Vaccine Storage</option>
                        <option value="Cold Warehouse">Cold Warehouse</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-[9px] text-silver font-mono block mb-1">Room Capacity</label>
                      <select
                        value={formData.size}
                        onChange={(e) => setFormData({ ...formData, size: e.target.value })}
                        className="w-full rounded-xl bg-[#0c2340] border border-white/5 p-3 text-xs text-white focus:outline-none"
                      >
                        <option value="Small (Below 10 MT)">Small (Below 10 MT)</option>
                        <option value="Medium (10 - 50 MT)">Medium (10 - 50 MT)</option>
                        <option value="Large (Above 50 MT)">Large (Above 50 MT)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="text-[9px] text-silver font-mono block mb-1">Chamber Sizing Requirements</label>
                    <textarea
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      placeholder="Target temperatures, structural bounds, or subsidy assistance notes..."
                      className="w-full rounded-xl bg-[#0c2340] border border-white/5 p-3 text-xs text-white placeholder-white/20 focus:outline-none focus:border-teal-light h-16 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-1.5 rounded-xl bg-teal-accent py-3 text-xs font-semibold text-white hover:bg-teal-light transition-all active:scale-[0.98]"
                  >
                    <Send className="h-3.5 w-3.5" />
                    <span>Submit Sizing Request</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Interactive FAQ Accordion Section */}
      <section className="py-20 bg-[#111318] border-t border-white/5">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 space-y-10">
          <div className="text-center space-y-2">
            <span className="text-[10px] font-bold uppercase tracking-wider text-teal-light font-mono">
              FAQ
            </span>
            <h2 className="text-2xl font-bold text-white font-display">
              Frequently Asked Questions
            </h2>
            <p className="text-xs text-silver/85">
              Read quick engineering solutions to common cold room installation queries.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-white/5 bg-[#0C2340]/40 overflow-hidden"
                >
                  <button
                    onClick={() => setActiveFaq(isOpen ? null : idx)}
                    className="w-full flex items-center justify-between p-5 text-left text-xs font-bold text-white hover:bg-white/2 transition-colors font-display"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown className={`h-4.5 w-4.5 text-teal-light transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`} />
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: "auto" }}
                        exit={{ height: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="p-5 border-t border-white/2 text-xs text-silver/80 leading-relaxed bg-[#0c2340]/20">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
