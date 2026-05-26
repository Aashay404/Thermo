"use client";

import React, { use, useState } from "react";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { BookOpen, Clock, Tag, ChevronLeft, Send, CheckCircle2 } from "lucide-react";

interface PostData {
  title: string;
  keyword: string;
  type: string;
  readTime: string;
  intro: string;
  section1Title: string;
  section1Body: string;
  section2Title: string;
  section2Body: string;
}

const postDb: Record<string, PostData> = {
  "what-is-a-cold-room": {
    title: "What is a Cold Room & How Does It Work?",
    keyword: "cold room how it works India",
    type: "Beginner Guide",
    readTime: "5 min read",
    intro: "Cold rooms are walk-in insulated chambers designed to maintain specific temperature thresholds, extending the storage shelf-life of perishables. In India, tropical ambient conditions require robust thermal design parameters.",
    section1Title: "The Mechanical Refrigeration Cycle",
    section1Body: "A cold room operates by extracting heat from inside the sealed enclosure and venting it outdoors. This loop relies on four major components: the compressor, the condenser, the expansion valve, and the evaporator coil. Refrigerant gas flows continuously through these components, changing states to absorb and dissipate heat.",
    section2Title: "Importance of Panel Insulation Sizing",
    section2Body: "Without proper insulation, ambient tropical heat will leak through the walls, forcing compressors to run continuously. We utilize Cam-locked Polyurethane Foam (PUF) panels with high-density cores (40 kg/m³) to guarantee a complete vapor barrier, reducing monthly electricity consumption by up to 25%.",
  },
  "cold-room-capacity-guide": {
    title: "Cold Room Capacity Guide: How to Calculate Storage Needs",
    keyword: "cold room capacity calculator",
    type: "Intermediate Sizing",
    readTime: "8 min read",
    intro: "Sizing a cold storage room requires translating agricultural tonnage (MT) or logistics pallets into physical internal dimensions (Length x Width x Height in feet). Under-sizing leads to poor air circulation, while over-sizing wastes energy.",
    section1Title: "Volume Calculation Formulas",
    section1Body: "A general engineering rule of thumb for agricultural products is to allocate approximately 5 to 6 cubic meters of space per metric ton (MT) of inventory. This accommodates necessary spacing for pallets, ventilation corridors, and evaporator air blast ranges. For example, a 10 MT room needs roughly 50-60 cubic meters of interior space.",
    section2Title: "Air Circulation Guidelines",
    section2Body: "Never stack items directly against walls or block the evaporator fan flow. Leave at least a 6-inch gap along the perimeter panels and 12 inches of clearance below the ceiling coolers to ensure uniform temperature distribution.",
  },
  "puf-panel-thickness-guide": {
    title: "PUF Panel Thickness Guide for Temperature Requirements",
    keyword: "PUF panel specifications cold room",
    type: "Technical Sizing",
    readTime: "6 min read",
    intro: "Selecting the correct thickness of Polyurethane Foam (PUF) panels is critical to balance structural thermal resistance with equipment capital costs.",
    section1Title: "Thickness Sizing Recommendations",
    section1Body: "For standard chilling rooms (0°C to +8°C) such as fruit ripening setups, 60mm or 80mm panels are suitable. Freezer rooms (-15°C to -10°C) require 100mm thickness. Deep freeze chambers (-18°C to -25°C) like ice cream vaults must use 120mm panels to prevent thermal leakage.",
    section2Title: "Vapor Barrier & cam-lock Joints",
    section2Body: "Vapor seals are critical. Pre-fabricated cam-locks lock panels together, compressing tongue-and-groove joints to create airtight seams that prevent moisture ingress and internal frosting.",
  },
  "government-subsidy-guide-2025": {
    title: "Government Subsidy for Cold Storage in India 2025",
    keyword: "cold storage subsidy India 2025",
    type: "Informational Guidelines",
    readTime: "10 min read",
    intro: "To encourage cold chain setups, the Indian Government provides back-ended capital subsidies under the Horticulture Mission (MIDH) and National Horticulture Mission (NHM).",
    section1Title: "Subsidy Percentages and Sizing Limits",
    section1Body: "Standard eligible projects receive a 35% capital subsidy. For hilly terrains, tribal areas, and registered Farmer Producer Organizations (FPOs), the subsidy limit increases to 50% of the project's baseline cost.",
    section2Title: "DPR Sizing Requirements",
    section2Body: "Submissions require a Detailed Project Report (DPR), CAD engineering drawings, panel test certificates, and bank loan approval. Sizing details must strictly match MIDH operational guidelines to qualify.",
  },
};

export default function BlogPostDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const post = postDb[slug] || postDb["what-is-a-cold-room"];

  const [formSent, setFormSent] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const handleAskSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;
    setFormSent(true);
  };

  return (
    <div className="flex flex-col flex-1 min-h-screen bg-[#0C2340] text-white selection:bg-[#0F6E56]">
      {/* Header */}
      <Navbar />

      {/* Main Page Area */}
      <div className="mx-auto max-w-4xl w-full px-4 sm:px-6 lg:px-8 py-10 flex-1">
        {/* Back Link */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-1 text-xs text-silver hover:text-white transition-colors mb-6"
        >
          <ChevronLeft className="h-4 w-4" />
          <span>Back to Knowledge Center</span>
        </Link>

        {/* Dynamic Post Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Post Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Header info */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-[9px] font-mono text-silver border-b border-white/5 pb-2">
                <span className="flex items-center gap-1">
                  <Tag className="h-3.5 w-3.5 text-teal-light" />
                  {post.type}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Clock className="h-3.5 w-3.5" />
                  {post.readTime}
                </span>
              </div>

              <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight font-display text-white">
                {post.title}
              </h1>

              <div className="text-[10px] text-teal-light font-mono bg-white/2 p-2.5 rounded-lg border border-white/5 select-all inline-block">
                SEO Keyword: {post.keyword}
              </div>
            </div>

            {/* Article Body */}
            <div className="prose prose-invert max-w-none text-xs sm:text-sm text-silver/85 leading-relaxed space-y-6">
              <p className="text-white font-medium leading-relaxed">{post.intro}</p>

              <h2 className="text-sm font-bold text-white font-display uppercase tracking-wider text-teal-light border-b border-white/5 pb-2 pt-4">
                {post.section1Title}
              </h2>
              <p>{post.section1Body}</p>

              <h2 className="text-sm font-bold text-white font-display uppercase tracking-wider text-teal-light border-b border-white/5 pb-2 pt-4">
                {post.section2Title}
              </h2>
              <p>{post.section2Body}</p>
            </div>
          </div>

          {/* Quick Intake card */}
          <div className="rounded-2xl border border-white/5 bg-[#0C2340]/60 p-6 shadow-lg h-fit">
            <h3 className="text-sm font-bold text-white mb-2 font-display">Ask an Engineer</h3>
            <p className="text-xs text-silver/80 mb-4 leading-relaxed">
              Have questions regarding thermal sizing or subsidy document compliance? Request call.
            </p>

            {formSent ? (
              <div className="rounded-xl border border-teal-accent/20 bg-teal-accent/5 p-6 text-center space-y-2">
                <CheckCircle2 className="h-8 w-8 text-teal-light mx-auto" />
                <h4 className="text-xs font-bold text-white">Callback Request Logged</h4>
                <p className="text-[10px] text-silver leading-relaxed">
                  Our project engineer will contact you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleAskSubmit} className="space-y-3">
                <div>
                  <label className="text-[9px] text-silver font-mono block mb-1">Your Name</label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Kuldeep"
                    className="w-full rounded-xl bg-[#0c2340] border border-white/5 p-2.5 text-xs text-white placeholder-white/20 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="text-[9px] text-silver font-mono block mb-1">Mobile Number</label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="e.g. +91 80550 10620"
                    className="w-full rounded-xl bg-[#0c2340] border border-white/5 p-2.5 text-xs text-white placeholder-white/20 focus:outline-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-1.5 rounded-xl bg-teal-accent py-2.5 text-xs font-semibold text-white hover:bg-teal-light transition-all"
                >
                  <BookOpen className="h-3.5 w-3.5" />
                  <span>Request Callback</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
