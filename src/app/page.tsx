"use client";

import React, { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import {
  ArrowRight,
  TrendingUp,
  Snowflake,
  ShieldAlert,
  HelpCircle,
  FileSpreadsheet,
  CheckCircle2,
  Users,
  Compass,
  ArrowUpRight,
  Settings,
  PhoneCall,
  Mail,
  MapPin,
  MessageSquare,
  Sparkles,
  ChevronRight,
} from "lucide-react";
import { motion } from "framer-motion";

export default function LandingPage() {
  const [contactFormSent, setContactFormSent] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    bizType: "Farmer / FPO",
    roomSize: "Small (Below 10 MT)",
    msg: "",
  });

  const services = [
    { title: "Modular Cold Rooms", desc: "Walk-in cold storages built with 120mm PUF panels, reaching temp ranges from -25°C to +15°C.", slug: "modular-cold-rooms" },
    { title: "Refrigeration Systems", desc: "Industrial cooling plant systems featuring Copeland or Bitzer compressors and evaporators.", slug: "refrigeration-systems" },
    { title: "Display Cold Rooms", desc: "Glass-front refrigeration cases optimized for retail outlets, supermarkets, and hotels.", slug: "display-cold-rooms" },
    { title: "Clean Rooms", desc: "ISO standard humidity and particle controlled environments for laboratories & pharmaceutical plants.", slug: "clean-rooms" },
    { title: "Ripening Chambers", desc: "Ethylene gas automated dosing systems for banana, mango, and agricultural ripening.", slug: "ripening-chambers" },
    { title: "Blast Chillers", desc: "Ultra-fast high capacity pull-down units reducing core temperature to -18°C in 90 minutes.", slug: "blast-chillers" },
    { title: "AMC & Maintenance", desc: "Annual Preventative Maintenance Contracts offering 24/7 technical breakdown support.", slug: "amc" },
    { title: "Consultation Services", desc: "Engineering sizing calculations, layout designs, and government subsidy audits.", slug: "consultation" },
  ];

  const usps = [
    { title: "Premium Components", desc: "We utilize industrial compressors (Copeland, Bitzer) and high-density panels to guarantee maximum structural integrity." },
    { title: "Expert Engineering Team", desc: "In-house design team providing precise thermal heat load analysis and customized layouts." },
    { title: "Energy Efficient Sizing", desc: "Defrost automation and scroll compressors that reduce monthly power consumption by up to 25%." },
    { title: "24/7 Reliable Support", desc: "Dedicated service fleet on standby in Pune and Maharashtra for emergency breakdown audits." },
    { title: "Custom Sized Layouts", desc: "From modular retail cases to multi-chamber agricultural warehouses customized to fit civil spaces." },
    { title: "Subsidy Support Guides", desc: "We provide complete documentation matching NHM, MIDH, and NABARD criteria for capital grants." },
  ];

  const workflow = [
    { step: "01", title: "Free Consultation", desc: "We audit your storage volume, product type, and location to calculate required TR refrigeration load." },
    { step: "02", title: "CAD Layout Design", desc: "Our draftsmen design layout blueprints mapping evaporator placement and panel joints." },
    { step: "03", title: "Manufacturing & Rigging", desc: "High-density panels and units are manufactured and assembled by certified project engineers." },
    { step: "04", title: "Testing & Handover", desc: "We conduct pull-down tests, load tests, and configure IoT alarm triggers before sign-off." },
  ];

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.email) return;
    setContactFormSent(true);
    setFormData({ name: "", phone: "", email: "", bizType: "Farmer / FPO", roomSize: "Small (Below 10 MT)", msg: "" });
  };

  return (
    <div className="flex flex-col flex-1 min-h-screen bg-[#0C2340] text-white selection:bg-[#0F6E56]">
      {/* Header */}
      <Navbar />

      {/* Hero Banner */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#0C2340] via-[#111318] to-[#0c2340] py-24 sm:py-32">
        {/* Subtle grid lines background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        
        {/* Glowing aura shapes */}
        <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-teal-accent/10 blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 h-96 w-96 rounded-full bg-blue-950/20 blur-[120px]" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-1.5 rounded-full bg-teal-accent/10 px-3.5 py-1 text-xs font-semibold text-teal-light border border-teal-accent/20"
          >
            <Sparkles className="h-3.5 w-3.5" />
            <span>Securing the Cold Chain Ecosystem</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl font-display leading-[1.1] max-w-4xl mx-auto"
          >
            Advanced Cold Storage & <span className="text-teal-light">Refrigeration Solutions</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-xl mx-auto text-sm sm:text-base text-silver/95 leading-relaxed"
          >
            Engineered for performance. Built for reliability. We design and install smart, IoT-enabled walk-in cold rooms tailored for agri-business, pharma, and dairy.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-4 pt-4"
          >
            <Link
              href="/dashboard"
              className="flex items-center gap-2 rounded-xl bg-teal-accent px-6 py-3.5 text-xs font-bold text-white transition-all hover:bg-teal-light hover:shadow-lg hover:shadow-teal-accent/25 active:scale-95 group"
            >
              <span>Explore 3D IoT Demo</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>

            <Link
              href="/services"
              className="rounded-xl border border-white/10 bg-white/3 px-6 py-3.5 text-xs font-bold text-white transition-all hover:bg-white/5 hover:border-white/20 active:scale-95"
            >
              Our Services
            </Link>

            <a
              href="https://wa.me/918055010620?text=Hi%20ThermoVault,%20I%20am%20interested%20in%20a%20cold%20room%20consultation."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-xl bg-emerald-600/90 px-6 py-3.5 text-xs font-bold text-white transition-all hover:bg-emerald-500 hover:shadow-lg hover:shadow-emerald-600/20 active:scale-95"
            >
              <MessageSquare className="h-4 w-4" />
              <span>WhatsApp Chat</span>
            </a>
          </motion.div>
        </div>
      </section>

      {/* About & Stats Counter Section */}
      <section className="py-20 border-t border-white/5 bg-[#0C2340]/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Context Text */}
            <div className="space-y-6">
              <span className="text-[10px] font-bold uppercase tracking-wider text-teal-light font-mono block">
                Who We Are
              </span>
              <h2 className="text-3xl font-bold tracking-tight text-white font-display">
                Engineering-Grade Thermal Solutions
              </h2>
              <p className="text-xs sm:text-sm text-silver/80 leading-relaxed">
                ThermoVault Systems manufactures high-insulation panels and integrates smart refrigeration systems for the food preservation, logistics, and healthcare industries. Headquartered in Pune, Maharashtra, we support companies nationwide in minimizing post-harvest losses and safeguarding critical medical inventory.
              </p>
              <p className="text-xs sm:text-sm text-silver/80 leading-relaxed">
                Our designs are fully compliant with NABARD capital subsidy schemes, making energy-saving cold room units accessible to small farmer groups (FPOs) and growing food startups.
              </p>
              <div className="pt-2">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-teal-light hover:text-white transition-colors"
                >
                  <span>Read Company Story</span>
                  <ChevronRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Stats Counter Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="rounded-2xl border border-white/5 bg-[#0C2340]/60 p-6 text-center">
                <div className="text-3xl font-extrabold text-teal-light font-mono mb-1">12+</div>
                <div className="text-[10px] font-bold uppercase tracking-wider text-silver font-mono">
                  Years Sizing Experience
                </div>
              </div>
              <div className="rounded-2xl border border-white/5 bg-[#0C2340]/60 p-6 text-center">
                <div className="text-3xl font-extrabold text-teal-light font-mono mb-1">500+</div>
                <div className="text-[10px] font-bold uppercase tracking-wider text-silver font-mono">
                  Installed Cold Rooms
                </div>
              </div>
              <div className="rounded-2xl border border-white/5 bg-[#0C2340]/60 p-6 text-center">
                <div className="text-3xl font-extrabold text-teal-light font-mono mb-1">15+</div>
                <div className="text-[10px] font-bold uppercase tracking-wider text-silver font-mono">
                  Indian States Covered
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-[#0C2340]/20 border-t border-white/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-[10px] font-bold uppercase tracking-wider text-teal-light font-mono">
              Preservation Solutions
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-white font-display">
              Our Professional Sizing Offerings
            </h2>
            <p className="text-xs sm:text-sm text-silver/80 leading-relaxed">
              We design thermal refrigeration plants from scratch. Explore our primary cold chain service lines.
            </p>
          </div>

          {/* Grid of 8 Services */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((svc, idx) => (
              <div
                key={idx}
                className="group relative rounded-2xl border border-white/5 bg-[#0C2340]/60 p-6 flex flex-col justify-between hover:border-teal-accent/30 transition-all duration-300 hover:shadow-lg hover:shadow-teal-accent/5"
              >
                <div className="space-y-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-accent/10 text-teal-light group-hover:bg-teal-accent group-hover:text-white transition-all">
                    <Snowflake className="h-5 w-5" />
                  </div>
                  <h3 className="text-sm font-bold text-white group-hover:text-teal-light transition-colors font-display">
                    {svc.title}
                  </h3>
                  <p className="text-xs text-silver/75 leading-relaxed">{svc.desc}</p>
                </div>
                <div className="pt-6 mt-auto">
                  <Link
                    href={`/services/${svc.slug}`}
                    className="inline-flex items-center gap-1 text-[11px] font-bold text-silver hover:text-white transition-colors group-hover:gap-1.5"
                  >
                    <span>Learn Specifications</span>
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-[#111318] border-t border-white/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-[10px] font-bold uppercase tracking-wider text-teal-light font-mono">
              Brand Quality USPs
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-white font-display">
              Why Engineers Choose ThermoVault
            </h2>
            <p className="text-xs sm:text-sm text-silver/80 leading-relaxed">
              We focus on premium materials, automated assembly procedures, and strict thermal compliance.
            </p>
          </div>

          {/* Grid of 6 USPs */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {usps.map((usp, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-white/5 bg-[#0C2340]/40 p-6 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-teal-accent/15 text-teal-light">
                    <CheckCircle2 className="h-4.5 w-4.5" />
                  </div>
                  <h3 className="text-xs font-bold text-white font-display">{usp.title}</h3>
                  <p className="text-[11px] text-silver/70 leading-relaxed">{usp.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Subsidy Banner Call-To-Action */}
      <section className="py-12 bg-teal-accent">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-lg sm:text-xl font-bold text-white font-display">
              Get Government Capital Subsidy for Your Cold Storage Sizing
            </h3>
            <p className="text-xs text-white/80 max-w-2xl leading-relaxed">
              NHM, MIDH, and NABARD provide credit-linked capital back-ended subsidies (up to 35% of total project costs). We provide the documentation required for compliance.
            </p>
          </div>
          <Link
            href="/subsidy"
            className="shrink-0 rounded-xl bg-white px-5 py-3 text-xs font-bold text-teal-accent hover:bg-[#F4F7FA] transition-all hover:shadow-lg active:scale-95"
          >
            Check Subsidy Eligibility
          </Link>
        </div>
      </section>

      {/* Process Workflow Timeline */}
      <section className="py-24 bg-[#0C2340]/40 border-t border-white/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-[10px] font-bold uppercase tracking-wider text-teal-light font-mono">
              Assembly Workflow
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-white font-display">
              Our 4-Step Project Delivery Path
            </h2>
            <p className="text-xs sm:text-sm text-silver/80 leading-relaxed">
              We manage structural fabrication from layout concepts up to physical handover diagnostics.
            </p>
          </div>

          {/* Steps Timeline Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
            {workflow.map((item, idx) => (
              <div key={idx} className="space-y-4 p-5 rounded-2xl bg-[#0c2340]/60 border border-white/5 hover:border-teal-light/20 transition-all duration-300">
                <div className="text-2xl font-extrabold text-teal-light/20 font-mono">
                  {item.step}
                </div>
                <h3 className="text-xs font-bold text-white font-display">{item.title}</h3>
                <p className="text-[11px] text-silver/70 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-[#111318] border-t border-white/5">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 text-center space-y-6">
          <span className="text-[10px] font-bold uppercase tracking-wider text-teal-light font-mono">
            Client Success
          </span>
          <h2 className="text-2xl font-bold tracking-tight text-white font-display">
            Trusted by Indian Agricultural Leaders
          </h2>
          
          <div className="rounded-2xl bg-[#0C2340]/60 border border-white/5 p-8 max-w-2xl mx-auto">
            <div className="text-sm italic text-silver leading-relaxed">
              "The custom display cold room units installed at our retail organic chain in Pune have cut daily shrinkage by 90%. Being able to monitor real-time temperature fluctuations via the 3D dashboard keeps our operations team on alert."
            </div>
            <div className="mt-4 font-semibold text-white text-xs">
              - Rajendra Deshmukh, Director at Sahyadri Farms FPO
            </div>
            <div className="text-[10px] text-silver font-mono mt-1">
              Agri-Cold Room Unit 2 | Pune, Maharashtra
            </div>
          </div>
        </div>
      </section>

      {/* Quick Contact Form */}
      <section className="py-24 bg-[#0C2340]/40 border-t border-white/5">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <div className="rounded-2xl border border-white/5 bg-[#0C2340]/60 p-8 shadow-xl">
            <div className="text-center max-w-xl mx-auto mb-8 space-y-3">
              <h2 className="text-2xl font-bold tracking-tight text-white font-display">
                Need a Cold Room Solution?
              </h2>
              <p className="text-xs text-silver leading-relaxed">
                Submit details below to schedule a free sizing assessment or layout audit.
              </p>
            </div>

            {contactFormSent ? (
              <div className="rounded-xl border border-teal-accent/20 bg-teal-accent/5 p-8 text-center space-y-3">
                <CheckCircle2 className="h-10 w-10 text-teal-light mx-auto animate-bounce" />
                <h3 className="text-sm font-bold text-white">Callback Request Submitted!</h3>
                <p className="text-xs text-silver leading-relaxed">
                  Thank you. Our design engineers will contact you at your convenience.
                </p>
              </div>
            ) : (
              <form onSubmit={handleContactSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[10px] text-silver font-mono block mb-1">Your Name</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Kuldeep Lakhera"
                      className="w-full rounded-xl bg-[#0c2340] border border-white/5 p-3 text-xs text-white placeholder-white/20 focus:outline-none focus:border-teal-light"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] text-silver font-mono block mb-1">Mobile Number</label>
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
                  <label className="text-[10px] text-silver font-mono block mb-1">Email Address</label>
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
                    <label className="text-[10px] text-silver font-mono block mb-1">Business Sizing</label>
                    <select
                      value={formData.bizType}
                      onChange={(e) => setFormData({ ...formData, bizType: e.target.value })}
                      className="w-full rounded-xl bg-[#0c2340] border border-white/5 p-3 text-xs text-white focus:outline-none focus:border-teal-light"
                    >
                      <option value="Farmer / FPO">Farmer / FPO</option>
                      <option value="Dairy Processing Unit">Dairy Processing Unit</option>
                      <option value="Pharmaceuticals Lab">Pharmaceuticals Lab</option>
                      <option value="Warehouse / Cold Storage">Warehouse / Cold Storage</option>
                      <option value="Hotel / Restaurant">Hotel / Restaurant</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-[10px] text-silver font-mono block mb-1">Room Capacity</label>
                    <select
                      value={formData.roomSize}
                      onChange={(e) => setFormData({ ...formData, roomSize: e.target.value })}
                      className="w-full rounded-xl bg-[#0c2340] border border-white/5 p-3 text-xs text-white focus:outline-none focus:border-teal-light"
                    >
                      <option value="Small (Below 10 MT)">Small (Below 10 MT)</option>
                      <option value="Medium (10 - 50 MT)">Medium (10 - 50 MT)</option>
                      <option value="Large (Above 50 MT)">Large (Above 50 MT)</option>
                      <option value="Multi-Chamber Facility">Multi-Chamber Facility</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-[10px] text-silver font-mono block mb-1">Requirements Description</label>
                  <textarea
                    value={formData.msg}
                    onChange={(e) => setFormData({ ...formData, msg: e.target.value })}
                    placeholder="Describe target temperature range, civil space dimensions, and site location..."
                    className="w-full rounded-xl bg-[#0c2340] border border-white/5 p-3 text-xs text-white placeholder-white/20 focus:outline-none focus:border-teal-light h-20 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-xl bg-teal-accent py-3.5 text-xs font-bold text-white hover:bg-teal-light transition-all active:scale-[0.98] hover:shadow-lg hover:shadow-teal-accent/20"
                >
                  Submit Sizing Request
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
