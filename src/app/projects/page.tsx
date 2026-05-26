"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Milestone, CheckCircle2, Compass, Move, Calendar, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface ProjectItem {
  title: string;
  location: string;
  category: "dairy" | "pharma" | "agri" | "industrial";
  size: string;
  spec: string;
  client: string;
}

export default function ProjectsPage() {
  const [filter, setFilter] = useState<"all" | "dairy" | "pharma" | "agri" | "industrial">("all");
  const [sliderPos, setSliderPos] = useState(50);
  const sliderRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const projects: ProjectItem[] = [
    { title: "Sahyadri Farms FPO Hub", location: "Nashik, Maharashtra", category: "agri", size: "50 MT Ripening Chamber", spec: "120mm panels | Automated Ethylene Dosing", client: "Sahyadri Farms Producer Co." },
    { title: "Serum Vaccine Storage Room 4", location: "Hadapsar, Pune", category: "pharma", size: "15 MT Sterile Clean Room", spec: "ISO Class 7 | Carel Modbus Alarm Gateway", client: "Serum Institute of India" },
    { title: "Katraj Dairy Cooler Unit 2", location: "Katraj, Pune", category: "dairy", size: "30 MT Milk Chilling Chamber", spec: "Copeland 10 TR Condensing Plant | R404A", client: "Katraj District Milk Cooperative" },
    { title: "Cold Logistics Center A", location: "Bhiwandi, Mumbai", category: "industrial", size: "120 MT Multi-Chamber Depot", spec: "150mm PUF panels | Bitzer Semi-Hermetic Unit", client: "Stellar Cold Chain Logistics" },
    { title: "Pharma Core Vaccine Vault", location: "Baddi, Himachal Pradesh", category: "pharma", size: "25 MT Deep Freeze Room", spec: "Dual Redundant Compressors | -25°C Sizing", client: "Abbott Pharma India" },
    { title: "Mango Ripening Chamber B", location: "Ratnagiri, Maharashtra", category: "agri", size: "20 MT Mango Ripening Chamber", spec: "Auto Humidity Controls | Humidifier 95% RH", client: "Ratnagiri Mango Growers Association" },
  ];

  const filteredProjects = filter === "all" ? projects : projects.filter((p) => p.category === filter);

  // Mouse/Touch Drag Handlers for Before/After Slider
  const handleMove = (clientX: number) => {
    if (!sliderRef.current) return;
    const rect = sliderRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPos(percentage);
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (!isDragging.current) return;
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging.current) return;
    handleMove(e.clientX);
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("touchmove", handleTouchMove);
    window.addEventListener("touchend", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleMouseUp);
    };
  }, []);

  return (
    <div className="flex flex-col flex-1 min-h-screen bg-[#0C2340] text-white selection:bg-[#0F6E56]">
      {/* Header */}
      <Navbar />

      {/* Hero Header */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#0C2340] via-[#111318] to-[#0c2340] py-16 sm:py-24 text-center">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-4">
          <span className="text-[10px] font-bold uppercase tracking-wider text-teal-light font-mono block">
            Completed Projects
          </span>
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl font-display">
            ThermoVault Installation Gallery
          </h1>
          <p className="max-w-xl mx-auto text-xs sm:text-sm text-silver/80 leading-relaxed">
            Browse our engineering portfolio showcasing completed cold chambers, and interact with the site before/after slider.
          </p>
        </div>
      </section>

      {/* Interactive Before/After Comparison Slider (CSS Drawing) */}
      <section className="py-16 bg-[#0C2340]/40 border-t border-white/5">
        <div className="mx-auto max-w-3xl px-4 space-y-8">
          <div className="text-center space-y-2">
            <span className="text-[10px] font-bold uppercase tracking-wider text-teal-light font-mono">
              Site Visualizer
            </span>
            <h2 className="text-xl font-bold text-white font-display">
              Before / After Sizing Comparison
            </h2>
            <p className="text-xs text-silver/85 max-w-md mx-auto">
              Drag the center bar to witness the physical transformation of a raw concrete civil depot (Left) to a fully rigged ThermoVault clean insulated storage chamber (Right).
            </p>
          </div>

          {/* Slider Container */}
          <div
            ref={sliderRef}
            className="relative h-[320px] w-full rounded-2xl overflow-hidden border border-white/10 select-none cursor-ew-resize bg-[#111318]"
            onMouseDown={() => {
              isDragging.current = true;
            }}
            onTouchStart={() => {
              isDragging.current = true;
            }}
          >
            {/* Slide 1 (BEFORE) - Concrete empty room */}
            <div className="absolute inset-0 bg-neutral-900 flex flex-col items-center justify-center p-8 text-center bg-[radial-gradient(#ffffff03_1px,transparent_1px)] [background-size:16px_16px]">
              <div className="max-w-xs space-y-3 opacity-30">
                <div className="h-24 w-40 border-2 border-dashed border-silver/50 rounded-lg mx-auto flex items-center justify-center text-xs text-silver">
                  Empty Civil Space
                </div>
                <div className="text-xs text-silver font-mono">
                  Raw brick masonry structure with concrete floor, exposed electrical lines, and thermal leakage boundaries.
                </div>
              </div>
              <div className="absolute bottom-4 left-4 rounded-lg bg-black/50 px-2 py-1 text-[10px] uppercase font-mono tracking-wider text-silver">
                Before Installation
              </div>
            </div>

            {/* Slide 2 (AFTER) - Clipped clean room with panels */}
            <div
              className="absolute inset-0 bg-[#0C2340] flex flex-col items-center justify-center p-8 text-center"
              style={{
                clipPath: `polygon(${sliderPos}% 0, 100% 0, 100% 100%, ${sliderPos}% 100%)`,
              }}
            >
              {/* Overlay graphics */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:2rem_2rem]" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-48 w-48 rounded-full bg-teal-accent/15 blur-[50px]" />

              <div className="relative max-w-xs space-y-3 z-10 text-teal-light">
                <div className="h-24 w-40 rounded-lg bg-gradient-to-br from-navy-mid/60 to-teal-accent/30 border border-teal-light/40 mx-auto flex flex-col items-center justify-center p-3 shadow-lg">
                  <span className="text-[10px] uppercase tracking-wider font-bold font-mono">ThermoVault Vault</span>
                  <span className="text-[8px] text-white/80 font-mono mt-1">120mm PUF Panels Sealed</span>
                </div>
                <div className="text-xs text-white/80 font-mono">
                  Rigged cam-locked panels, wall joints, double-sealed door entry, and indoor air evaporator blowers.
                </div>
              </div>

              <div className="absolute bottom-4 right-4 rounded-lg bg-teal-accent/80 px-2 py-1 text-[10px] uppercase font-mono tracking-wider text-white">
                After Installation
              </div>
            </div>

            {/* Drag Handle Bar */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-teal-light hover:bg-white transition-colors flex items-center justify-center cursor-col-resize z-20 shadow-lg"
              style={{ left: `${sliderPos}%` }}
            >
              <div className="h-8 w-8 rounded-full bg-teal-light text-white flex items-center justify-center shadow-lg shadow-teal-accent/30 active:scale-90 select-none">
                <Move className="h-4 w-4" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Gallery grid list */}
      <section className="py-20 bg-[#111318] border-t border-white/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-2 border-b border-white/5 pb-6">
            {[
              { id: "all", label: "All Sectors" },
              { id: "dairy", label: "Dairy & Milk" },
              { id: "pharma", label: "Pharmaceuticals" },
              { id: "agri", label: "Agriculture FPOs" },
              { id: "industrial", label: "Industrial Cold Stores" },
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

          {/* Cards Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((p, idx) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  key={p.title}
                  className="group rounded-2xl border border-white/5 bg-[#0C2340]/40 p-6 flex flex-col justify-between hover:border-teal-light/20 transition-all duration-300"
                >
                  <div className="space-y-4">
                    <span className="inline-flex items-center gap-1.5 rounded-lg bg-teal-accent/15 px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider text-teal-light font-mono">
                      {p.category}
                    </span>
                    <h3 className="text-sm font-bold text-white group-hover:text-teal-light transition-colors font-display">
                      {p.title}
                    </h3>
                    <p className="text-xs text-silver mt-1">{p.location}</p>
                    
                    <div className="border-t border-white/5 pt-3 mt-4 space-y-2 text-[10px] font-mono text-silver/80">
                      <div><span className="text-teal-light">Scale:</span> {p.size}</div>
                      <div><span className="text-teal-light">Specs:</span> {p.spec}</div>
                      <div><span className="text-teal-light">Client:</span> {p.client}</div>
                    </div>
                  </div>
                  <div className="pt-6 mt-6 border-t border-white/5 flex items-center justify-between">
                    <span className="text-[10px] text-teal-light font-bold flex items-center gap-1">
                      <CheckCircle2 className="h-3.5 w-3.5" /> Checked & Verified
                    </span>
                    <Link
                      href="/dashboard"
                      className="inline-flex items-center gap-1 text-[10px] font-bold text-silver hover:text-white transition-colors"
                    >
                      <span>Interactive Live telemetry</span>
                      <ArrowUpRight className="h-3.5 w-3.5" />
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
