"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import {
  Snowflake,
  ShieldCheck,
  Zap,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Star,
  MessageSquare,
  Sparkles,
  Droplet,
  Flame,
  Apple,
  Fish,
  Pill,
  ShoppingCart,
  Phone,
  Settings,
  Monitor,
  Calendar,
  Wind,
  Wrench,
  Users,
  Ruler,
  Factory,
  Hammer,
  CheckSquare,
  HeartHandshake
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface ServiceCard {
  title: string;
  desc: string;
  image: string;
  slug: string;
  icon: React.ComponentType<any>;
}

interface IndustryCard {
  title: string;
  image: string;
  icon: React.ComponentType<any>;
}

interface ProcessStep {
  step: string;
  title: string;
  desc: string;
  icon: React.ComponentType<any>;
}

export default function ServicesPage() {
  // Carousel state for recent projects
  const [projectIndex, setProjectIndex] = useState(0);
  const projectImages = [
    "/images/cold_room_unit.png",
    "/images/compressors.png",
    "/images/hero_background.png",
    "/images/technician.png"
  ];

  const handleNextProject = () => {
    setProjectIndex((prev) => (prev + 1) % projectImages.length);
  };

  const handlePrevProject = () => {
    setProjectIndex((prev) => (prev - 1 + projectImages.length) % projectImages.length);
  };

  const services: ServiceCard[] = [
    {
      title: "Modular Cold Rooms",
      desc: "Custom-built cold rooms for any temperature ranges with PUF panels and precision engineering.",
      image: "/images/cold_room_unit.png",
      slug: "modular-cold-rooms",
      icon: Snowflake
    },
    {
      title: "Refrigeration Systems",
      desc: "High-performance refrigeration systems for industrial and commercial applications.",
      image: "/images/compressors.png",
      slug: "refrigeration-systems",
      icon: Settings
    },
    {
      title: "Display Cold Rooms",
      desc: "Perfect storage and display solutions for supermarkets, retailers & food businesses.",
      image: "/images/hero_background.png",
      slug: "display-cold-rooms",
      icon: Monitor
    },
    {
      title: "Fruits Ripening Chambers",
      desc: "Controlled atmosphere ripening chambers for bananas, mangoes & more.",
      image: "/images/cold_room_unit.png",
      slug: "ripening-chambers",
      icon: Calendar
    },
    {
      title: "Blast Chillers",
      desc: "Rapid cooling & freezing solutions to lock freshness and extend shelf life.",
      image: "/images/compressors.png",
      slug: "blast-chillers",
      icon: Wind
    },
    {
      title: "AMC & Maintenance",
      desc: "Annual maintenance contracts for optimal performance and longer equipment life.",
      image: "/images/technician.png",
      slug: "amc",
      icon: Wrench
    }
  ];

  const industries: IndustryCard[] = [
    { title: "Dairy & Milk Products", image: "/images/hero_background.png", icon: Droplet },
    { title: "Meat & Poultry", image: "/images/technician.png", icon: Flame },
    { title: "Fruits & Vegetables", image: "/images/cold_room_unit.png", icon: Apple },
    { title: "Seafood & Fish", image: "/images/compressors.png", icon: Fish },
    { title: "Pharmaceuticals", image: "/images/cold_room_unit.png", icon: Pill },
    { title: "Food Processing & Retail", image: "/images/hero_background.png", icon: ShoppingCart }
  ];

  const processSteps: ProcessStep[] = [
    { step: "01", title: "Consultation", desc: "We understand your requirements and site conditions.", icon: Users },
    { step: "02", title: "Planning & Design", desc: "Our experts create the best solution plan for your needs.", icon: Ruler },
    { step: "03", title: "Manufacturing", desc: "Precision manufacturing using premium quality materials.", icon: Factory },
    { step: "04", title: "Installation", desc: "Professional installation by skilled technical team.", icon: Hammer },
    { step: "05", title: "Testing & Handover", desc: "Rigorous testing and quality check before project handover.", icon: CheckSquare },
    { step: "06", title: "After Sales Support", desc: "We ensure long-term support and maintenance when you need us.", icon: HeartHandshake }
  ];

  return (
    <div className="flex flex-col flex-1 min-h-screen bg-white text-slate-800 selection:bg-blue-600 selection:text-white">
      {/* Header Navbar */}
      <Navbar />

      {/* Split Hero Banner */}
      <section className="relative grid grid-cols-1 lg:grid-cols-2 bg-[#0C2340] text-white overflow-hidden min-h-[460px] items-center">
        {/* Diagonal styling accent */}
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff02_1px,transparent_1px)] [background-size:16px_16px] opacity-40 z-0" />
        
        {/* Left Side Content */}
        <div className="relative px-6 py-16 sm:px-12 lg:px-20 z-10 space-y-6">
          <div className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-blue-400 font-mono">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Home &gt; Services</span>
          </div>
          
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl font-display leading-[1.1]">
            Our Cold Chain<br />
            <span className="text-blue-400">Solutions</span>
          </h1>
          
          <p className="max-w-md text-xs sm:text-sm text-slate-300 leading-relaxed">
            End-to-end cold storage and refrigeration solutions tailored to your industry, space, and temperature needs.
          </p>

          {/* 4 Feature Items */}
          <div className="grid grid-cols-2 gap-4 pt-4 text-[10px] font-bold text-slate-200">
            <div className="flex items-center gap-2">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-500/10 text-blue-400">
                <ShieldCheck className="h-3.5 w-3.5" />
              </div>
              <span>Custom Built Solutions</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-500/10 text-blue-400">
                <Zap className="h-3.5 w-3.5" />
              </div>
              <span>Energy Efficient</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-500/10 text-blue-400">
                <ShieldCheck className="h-3.5 w-3.5" />
              </div>
              <span>Hygienic & Safe</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-500/10 text-blue-400">
                <Wrench className="h-3.5 w-3.5" />
              </div>
              <span>Reliable Performance</span>
            </div>
          </div>
        </div>

        {/* Right Side Image */}
        <div className="relative h-64 lg:h-full min-h-[300px] w-full self-stretch lg:border-l lg:border-white/5">
          <Image
            src="/images/cold_room_unit.png"
            alt="Cold storage room installation"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority
          />
        </div>
      </section>

      {/* Complete Range of Cold Chain Solutions */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center space-y-2">
            <span className="text-[10px] font-bold uppercase tracking-wider text-blue-600 font-mono block">
              WHAT WE BUILD
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0c2340] font-display">
              Complete Range of Cold Chain Solutions
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((svc, idx) => {
              const Icon = svc.icon;
              return (
                <div
                  key={idx}
                  className="group rounded-2xl overflow-hidden border border-slate-100 bg-white shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col justify-between"
                >
                  <div>
                    {/* Top Image */}
                    <div className="relative h-44 w-full bg-slate-50">
                      <Image
                        src={svc.image}
                        alt={svc.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-103"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>
                    {/* Content Section */}
                    <div className="p-6 space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                          <Icon className="h-4.5 w-4.5" />
                        </div>
                        <h3 className="text-sm font-bold text-[#0c2340] font-display">
                          {svc.title}
                        </h3>
                      </div>
                      <p className="text-xs text-slate-500 leading-relaxed">
                        {svc.desc}
                      </p>
                    </div>
                  </div>

                  <div className="p-6 pt-0">
                    <Link
                      href={`/services/${svc.slug}`}
                      className="inline-flex items-center gap-1 text-[11px] font-bold text-blue-600 hover:text-blue-500 transition-colors"
                    >
                      <span>Learn More</span>
                      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Solutions for Every Industry */}
      <section className="py-24 bg-slate-50 border-t border-slate-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-[10px] font-bold uppercase tracking-wider text-blue-600 font-mono block">
              INDUSTRIES WE SERVE
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0c2340] font-display">
              Solutions for Every Industry
            </h2>
            <p className="text-xs text-slate-500 leading-relaxed">
              We deliver customized cold chain solutions for businesses of every size and industry.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {industries.map((ind, idx) => {
              const Icon = ind.icon;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-slate-100 bg-white p-4 shadow-sm flex flex-col items-center text-center space-y-4 hover:shadow-md transition-shadow"
                >
                  {/* Rounded image container */}
                  <div className="relative h-24 w-full rounded-xl overflow-hidden bg-slate-100">
                    <Image
                      src={ind.image}
                      alt={ind.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 50vw, 16vw"
                    />
                  </div>

                  {/* Circular Icon */}
                  <div className="-mt-9 relative z-10 flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white shadow-md border-2 border-white">
                    <Icon className="h-4 w-4" />
                  </div>

                  <span className="text-[11px] font-bold text-[#0c2340] leading-snug font-display">
                    {ind.title}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Process: How We Work */}
      <section className="py-24 bg-white border-t border-slate-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="text-center space-y-2">
            <span className="text-[10px] font-bold uppercase tracking-wider text-blue-600 font-mono block">
              OUR PROCESS
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0c2340] font-display">
              How We Work
            </h2>
          </div>

          {/* Timeline Row */}
          <div className="relative">
            {/* Connecting dashed line for desktop */}
            <div className="absolute top-8 left-12 right-12 h-0.5 border-t-2 border-dashed border-slate-200 hidden lg:block z-0" />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 relative z-10">
              {processSteps.map((step, idx) => {
                const Icon = step.icon;
                return (
                  <div key={idx} className="flex flex-col items-center text-center space-y-4">
                    {/* Circle Icon Wrapper */}
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white border-2 border-slate-200 text-slate-600 group-hover:border-blue-600 hover:text-blue-600 transition-colors bg-white shadow-sm">
                      <Icon className="h-6 w-6" />
                    </div>

                    <div className="space-y-1">
                      <div className="text-[10px] font-bold font-mono text-blue-600 uppercase">
                        Step {step.step}
                      </div>
                      <h4 className="text-xs font-bold text-[#0c2340] font-display">
                        {step.title}
                      </h4>
                      <p className="text-[10px] text-slate-500 leading-relaxed px-2">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Recent Projects & Testimonials (Side by side) */}
      <section className="py-24 bg-slate-50 border-t border-slate-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          {/* Projects Slider */}
          <div className="space-y-6 flex flex-col justify-between">
            <div className="space-y-2">
              <span className="text-[10px] font-bold uppercase tracking-wider text-blue-600 font-mono block">
                OUR RECENT PROJECTS
              </span>
              <h2 className="text-2xl font-bold text-[#0c2340] font-display">
                Built with Precision.<br />
                Delivered with Pride.
              </h2>
            </div>

            {/* Image display with navigation buttons */}
            <div className="relative h-64 sm:h-80 w-full rounded-2xl overflow-hidden border border-slate-100 shadow-sm mt-4">
              <Image
                src={projectImages[projectIndex]}
                alt="Recent Project Showcase"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

              {/* Slider controls */}
              <div className="absolute bottom-4 right-4 flex gap-2">
                <button
                  onClick={handlePrevProject}
                  className="p-2 rounded-full bg-white/90 hover:bg-white text-[#0c2340] shadow-md transition-all hover:scale-105 active:scale-95"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <button
                  onClick={handleNextProject}
                  className="p-2 rounded-full bg-white/90 hover:bg-white text-[#0c2340] shadow-md transition-all hover:scale-105 active:scale-95"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Testimonial Box */}
          <div className="rounded-2xl border border-slate-100 bg-white p-8 shadow-sm flex flex-col justify-between space-y-8">
            <div className="space-y-2">
              <span className="text-[10px] font-bold uppercase tracking-wider text-blue-600 font-mono block">
                WHAT OUR CLIENTS SAY
              </span>
              <h3 className="text-xl font-bold text-[#0c2340] font-display">
                Trusted by Businesses Across India
              </h3>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-0.5 text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-amber-500 text-transparent" />
                ))}
              </div>

              <blockquote className="text-sm text-slate-600 leading-relaxed italic">
                "ThermoVault Systems delivered a top-quality cold room for our dairy unit. Excellent build quality, on-time delivery and great after-sales support."
              </blockquote>
            </div>

            <div className="border-t border-slate-100 pt-6">
              <div className="text-xs font-bold text-[#0c2340]">Rahul Deshmukh</div>
              <div className="text-[10px] text-slate-400 font-mono mt-0.5">Dairy Farm Owner, Pune</div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Sizing CTA Intake */}
      <section className="py-12 bg-white border-t border-slate-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl bg-[#0c2340] text-white p-8 md:p-12 shadow-xl flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-3 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-2">
                <div className="h-7 w-7 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400">
                  <Phone className="h-4 w-4" />
                </div>
                <span className="text-[10px] font-bold tracking-wider text-blue-400 uppercase font-mono">
                  Ready to Build Your Cold Chain Solution?
                </span>
              </div>
              <h3 className="text-2xl font-bold font-display">
                Get Expert Consultation & Custom Quote
              </h3>
              <p className="text-xs text-slate-300 max-w-lg">
                Our thermal design engineers will calculate your project heat load requirements and guide you through the process.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 items-center justify-center">
              <a
                href="tel:+918055010620"
                className="rounded-md bg-blue-600 px-6 py-3.5 text-xs font-bold text-white transition-all hover:bg-blue-500 shadow-md active:scale-95"
              >
                Call Now: 80550 10620
              </a>

              <a
                href="https://wa.me/918055010620?text=Hi%20ThermoVault,%20I%20am%20interested%20in%20a%20cold%20room%20consultation."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-md border border-white/40 bg-white/5 px-6 py-3.5 text-xs font-bold text-white transition-all hover:bg-white/10 active:scale-95"
              >
                <MessageSquare className="h-4 w-4" />
                <span>WhatsApp Us</span>
              </a>

              <button
                onClick={() => {
                  const event = new CustomEvent("open-quote-modal");
                  window.dispatchEvent(event);
                }}
                className="rounded-md border border-white px-6 py-3.5 text-xs font-bold text-white hover:bg-white hover:text-[#0c2340] transition-all"
              >
                Get Free Quote
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Footer */}
      <Footer />
    </div>
  );
}
