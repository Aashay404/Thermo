"use client";

import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { ShieldCheck, Compass, UserCheck, Heart, Award, ArrowUpRight, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";

export default function AboutPage() {
  const values = [
    { title: "Quality First", desc: "No compromise on insulation panel densities (40 kg/m³) or refrigeration compressor load capacities.", icon: ShieldCheck },
    { title: "Customer-Centric", desc: "Sizing and designs are custom-tailored to suit specific product cooling requirements.", icon: UserCheck },
    { title: "Engineering Innovation", desc: "Integrated IoT sensors and automatic defrost cycles to save electricity.", icon: Compass },
    { title: "Transparency & Trust", desc: "Credit-linked specifications that strictly align with NHM and NABARD subsidy rules.", icon: Heart },
  ];

  const milestones = [
    { year: "2013", title: "Company Founded", desc: "Established in Pune with a small modular panel manufacturing unit." },
    { year: "2017", title: "First 100 Installations", desc: "Completed critical vaccine storage clean rooms for pharma majors in Maharashtra." },
    { year: "2021", title: "Agricultural Sizing Scale", desc: "Partnered with local FPOs to install multi-chamber fruit ripening rooms." },
    { year: "2025", title: "IoT & Smart Integrations", desc: "Launched real-time 3D telemetry tracking interfaces for client diagnostics." },
  ];

  return (
    <div className="flex flex-col flex-1 min-h-screen bg-[#0C2340] text-white selection:bg-[#0F6E56]">
      {/* Header */}
      <Navbar />

      {/* Hero Header */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#0C2340] via-[#111318] to-[#0c2340] py-16 sm:py-24 text-center">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-4">
          <span className="text-[10px] font-bold uppercase tracking-wider text-teal-light font-mono block">
            Our Identity
          </span>
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl font-display">
            About ThermoVault Systems
          </h1>
          <p className="max-w-xl mx-auto text-xs sm:text-sm text-silver/80 leading-relaxed">
            Securing India's cold chain ecosystem with precision-engineered storage vaults, energy-saving cooling plants, and smart IoT control systems.
          </p>
        </div>
      </section>

      {/* Company Story & Founder Message */}
      <section className="py-20 bg-[#0C2340]/40 border-t border-white/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Story */}
            <div className="space-y-6">
              <span className="text-[10px] font-bold uppercase tracking-wider text-teal-light font-mono block">
                Our Roots
              </span>
              <h2 className="text-2xl font-bold tracking-tight text-white font-display">
                A Decade of Thermal Engineering
              </h2>
              <p className="text-xs sm:text-sm text-silver/80 leading-relaxed">
                Founded in 2013 in Pune, Maharashtra, ThermoVault Systems started with a simple vision: to construct high-insulation panel enclosures that prevent post-harvest cargo loss. Over the years, we have grown into a full-scale industrial refrigeration design and manufacturing partner.
              </p>
              <p className="text-xs sm:text-sm text-silver/80 leading-relaxed">
                Our in-house project managers collaborate closely with agricultural cooperatives, dairy networks, and medical manufacturers to design walk-in rooms that operate consistently under challenging Indian tropical climates.
              </p>
            </div>

            {/* Founder message */}
            <div className="rounded-2xl border border-white/5 bg-[#0C2340]/60 p-8 space-y-4 relative">
              <div className="absolute top-4 right-6 text-teal-light/10 text-7xl font-serif select-none">
                “
              </div>
              <h3 className="text-sm font-bold text-white font-display">Message from the Founder</h3>
              <p className="text-xs text-silver/85 italic leading-relaxed">
                "Cold storage is not just a building; it is a critical safeguard. A single degrees Celsius deviation can compromise an entire harvest or spoil vital medical stock. At ThermoVault, we align engineering rigor with credit compliance to deliver thermal efficiency that clients can trust."
              </p>
              <div className="border-t border-white/5 pt-4 flex items-center justify-between">
                <div>
                  <div className="text-xs font-bold text-white">Vikram Malhotra</div>
                  <div className="text-[10px] text-silver font-mono">Founder & Managing Director</div>
                  <div className="text-[9px] text-teal-light mt-0.5 font-mono">IIT Bombay, Class of 1998</div>
                </div>
                <div className="text-right">
                  <span className="text-teal-light/50 font-serif italic text-sm">V. Malhotra</span>
                </div>
              </div>
            </div>
          </div>

          {/* Vision & Mission Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-white/5 pt-12">
            <div className="rounded-2xl border border-white/5 bg-gradient-to-br from-[#0c2340]/60 to-[#111318]/80 p-6 space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-teal-light font-mono">
                Our Vision
              </h4>
              <p className="text-xs text-silver/85 leading-relaxed">
                To be India's most trusted cold chain solutions partner, recognized for setting engineering benchmarks in energy efficiency, structural durability, and smart monitoring.
              </p>
            </div>
            <div className="rounded-2xl border border-white/5 bg-gradient-to-br from-[#0c2340]/60 to-[#111318]/80 p-6 space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-teal-light font-mono">
                Our Mission
              </h4>
              <p className="text-xs text-silver/85 leading-relaxed">
                Engineering high-efficiency, reliable, and credit-compliant storage platforms that minimize post-harvest food waste, preserve pharmaceutical integrity, and support rural farming livelihoods.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-[#111318] border-t border-white/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-[10px] font-bold uppercase tracking-wider text-teal-light font-mono">
              Core Principles
            </span>
            <h2 className="text-2xl font-bold tracking-tight text-white font-display">
              The Values That Drive Us
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, idx) => {
              const Icon = v.icon;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-white/5 bg-[#0C2340]/40 p-6 space-y-4"
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-teal-accent/15 text-teal-light">
                    <Icon className="h-4.5 w-4.5" />
                  </div>
                  <h3 className="text-xs font-bold text-white font-display">{v.title}</h3>
                  <p className="text-[11px] text-silver/70 leading-relaxed">{v.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Historical Milestones */}
      <section className="py-20 bg-[#0C2340]/40 border-t border-white/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-[10px] font-bold uppercase tracking-wider text-teal-light font-mono">
              Our Journey
            </span>
            <h2 className="text-2xl font-bold tracking-tight text-white font-display">
              Company Growth Milestones
            </h2>
          </div>

          <div className="relative pl-6 sm:pl-8 space-y-8 before:absolute before:left-2 before:top-2 before:bottom-2 before:w-0.5 before:bg-white/5">
            {milestones.map((m, idx) => (
              <div key={idx} className="relative group">
                <div className="absolute -left-6 sm:-left-8 top-1.5 h-3.5 w-3.5 rounded-full border-2 border-teal-light bg-[#0C2340]" />
                <div className="rounded-xl p-4 bg-[#0c2340]/40 border border-white/5">
                  <div className="text-xs font-bold text-teal-light font-mono mb-1">{m.year}</div>
                  <h3 className="text-xs font-bold text-white mb-2 font-display">{m.title}</h3>
                  <p className="text-[11px] text-silver/70 leading-relaxed">{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications & Associations */}
      <section className="py-16 bg-[#111318] border-t border-white/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <span className="text-[10px] font-bold uppercase tracking-wider text-teal-light font-mono">
              Accreditation
            </span>
            <h3 className="text-sm font-bold text-white font-display">Quality Certifications</h3>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="rounded-xl border border-white/5 bg-[#0C2340]/40 p-4 text-center space-y-2">
              <Award className="h-6 w-6 text-teal-light mx-auto" />
              <div className="text-xs font-bold text-white">ISO 9001:2015</div>
              <div className="text-[9px] text-silver font-mono">Quality Management</div>
            </div>
            <div className="rounded-xl border border-white/5 bg-[#0C2340]/40 p-4 text-center space-y-2">
              <Award className="h-6 w-6 text-teal-light mx-auto" />
              <div className="text-xs font-bold text-white">NABARD Approved</div>
              <div className="text-[9px] text-silver font-mono">Subsidy Compliant Sizing</div>
            </div>
            <div className="rounded-xl border border-white/5 bg-[#0C2340]/40 p-4 text-center space-y-2">
              <Award className="h-6 w-6 text-teal-light mx-auto" />
              <div className="text-xs font-bold text-white">CE Certification</div>
              <div className="text-[9px] text-silver font-mono">European Standards</div>
            </div>
            <div className="rounded-xl border border-white/5 bg-[#0C2340]/40 p-4 text-center space-y-2">
              <Award className="h-6 w-6 text-teal-light mx-auto" />
              <div className="text-xs font-bold text-white">NHM Guidelines</div>
              <div className="text-[9px] text-silver font-mono">Credit-linked Compliant</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
