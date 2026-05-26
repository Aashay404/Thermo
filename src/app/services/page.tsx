"use client";

import React, { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Snowflake, ShieldCheck, Compass, ArrowRight, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface ServiceItem {
  title: string;
  desc: string;
  category: "room" | "system" | "lifecycle";
  slug: string;
  detail: string;
}

export default function ServicesHubPage() {
  const [filter, setFilter] = useState<"all" | "room" | "system" | "lifecycle">("all");

  const services: ServiceItem[] = [
    { title: "Modular Cold Rooms", desc: "Walk-in cold storages built with 120mm PUF panels, reaching temp ranges from -25°C to +15°C.", category: "room", slug: "modular-cold-rooms", detail: "Designed for agricultural depots, dairy cooperatives, and cold storage warehouses. Cam-locked panels simplify rigging." },
    { title: "Refrigeration Systems", desc: "Industrial cooling plant systems featuring Copeland or Bitzer compressors and evaporators.", category: "system", slug: "refrigeration-systems", detail: "Outdoor condensing units coupled with indoor cooling coils. Optimized for high tropical ambient tolerances." },
    { title: "Display Cold Rooms", desc: "Glass-front refrigeration cases optimized for retail outlets, supermarkets, and hotels.", category: "room", slug: "display-cold-rooms", detail: "Combines storage utility with clear display capabilities. Double-pane insulated glass doors reduce thermal leakage." },
    { title: "Clean Rooms", desc: "ISO standard humidity and particle controlled environments for laboratories & pharmaceutical plants.", category: "room", slug: "clean-rooms", detail: "Fully sealed environments matching FDA standards. Positive pressure and HEPA filters handle airborne particles." },
    { title: "Fruits Ripening Chambers", desc: "Ethylene gas automated dosing systems for banana, mango, and agricultural ripening.", category: "room", slug: "ripening-chambers", detail: "Forced-air ripening setups with automatic temperature and humidity profiling to ensure uniform coloring." },
    { title: "Blast Chillers", desc: "Ultra-fast high capacity pull-down units reducing core temperature to -18°C in 90 minutes.", category: "room", slug: "blast-chillers", detail: "Prevents bacteria growth in cooked foods. Pull-down speed preserves cell structures of fish and poultry." },
    { title: "AMC & Maintenance", desc: "Annual Preventative Maintenance Contracts offering 24/7 technical breakdown support.", category: "lifecycle", slug: "amc", detail: "Preventative check-ups, coil cleaning, and compressor load analysis by certified engineers." },
    { title: "Consultation Services", desc: "Engineering sizing calculations, layout designs, and government subsidy audits.", category: "lifecycle", slug: "consultation", detail: "Heat load computations, CAD blueprint drafting, and compliance reports matching NABARD criteria." },
  ];

  const filteredServices = filter === "all" ? services : services.filter((s) => s.category === filter);

  return (
    <div className="flex flex-col flex-1 min-h-screen bg-[#0C2340] text-white selection:bg-[#0F6E56]">
      {/* Header */}
      <Navbar />

      {/* Hero Header */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#0C2340] via-[#111318] to-[#0c2340] py-16 sm:py-24 text-center">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-4">
          <span className="text-[10px] font-bold uppercase tracking-wider text-teal-light font-mono block">
            Refrigeration Services
          </span>
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl font-display">
            Preservation Services Hub
          </h1>
          <p className="max-w-xl mx-auto text-xs sm:text-sm text-silver/80 leading-relaxed">
            We provide end-to-end design, manufacturing, and lifecycle support for tropicalized refrigeration plants.
          </p>
        </div>
      </section>

      {/* Interactive Category Filter Menu */}
      <section className="py-8 bg-[#0C2340]/40 border-t border-white/5">
        <div className="mx-auto max-w-lg px-4 flex flex-wrap justify-center gap-2">
          {[
            { id: "all", label: "All Offerings" },
            { id: "room", label: "Cold Chambers" },
            { id: "system", label: "Cooling Plants" },
            { id: "lifecycle", label: "Lifecycle Support" },
          ].map((btn) => (
            <button
              key={btn.id}
              onClick={() => setFilter(btn.id as any)}
              className={`rounded-lg px-4 py-2 text-xs font-semibold transition-all ${
                filter === btn.id
                  ? "bg-teal-accent text-white"
                  : "text-silver hover:text-white hover:bg-white/3"
              }`}
            >
              {btn.label}
            </button>
          ))}
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-[#111318] border-t border-white/5 flex-1">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filteredServices.map((svc) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.2 }}
                  key={svc.slug}
                  className="group rounded-2xl border border-white/5 bg-[#0C2340]/40 p-6 flex flex-col justify-between hover:border-teal-light/20 transition-all duration-300"
                >
                  <div className="space-y-4">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-teal-accent/15 text-teal-light">
                      <Snowflake className="h-4.5 w-4.5 animate-pulse-slow" />
                    </div>
                    <h3 className="text-sm font-bold text-white group-hover:text-teal-light transition-colors font-display">
                      {svc.title}
                    </h3>
                    <p className="text-xs text-silver/85 leading-relaxed">{svc.desc}</p>
                    <p className="text-[11px] text-silver/60 leading-relaxed border-t border-white/5 pt-3">
                      {svc.detail}
                    </p>
                  </div>
                  
                  <div className="pt-6 mt-6 border-t border-white/5">
                    <Link
                      href={`/services/${svc.slug}`}
                      className="w-full flex items-center justify-between rounded-xl bg-white/2 border border-white/5 py-2.5 px-4 text-xs font-semibold text-silver hover:text-white hover:bg-white/5 transition-all group-hover:border-teal-light/35"
                    >
                      <span>Specifications Blueprint</span>
                      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
