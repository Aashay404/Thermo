"use client";

import React, { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Sliders, Snowflake, ShieldCheck, Thermometer, Radio, ArrowRight } from "lucide-react";

interface ProductItem {
  name: string;
  desc: string;
  specs: { label: string; value: string }[];
}

export default function ProductsPage() {
  const [selectedRange, setSelectedRange] = useState("deep-freeze");

  const pufThicknessGuide = {
    chilling: { thickness: "60mm - 80mm", temp: "0°C to +8°C", utility: "Fruits, Vegetables, Dairy, and Floriculture", efficiency: "Recommended for standard refrigeration load ratios." },
    freezing: { thickness: "100mm", temp: "-10°C to -15°C", utility: "Frozen Foods, Meat Chaffs, and Bakery Dough", efficiency: "Balances insulation thickness with storage volume." },
    "deep-freeze": { thickness: "120mm", temp: "-18°C to -25°C", utility: "Ice Cream, Specialized Pharma Vaccines, and Sea Foods", efficiency: "Maximizes thermal resistance; zero icing leakage cam-locks." },
  };

  const products: ProductItem[] = [
    {
      name: "Polyurethane Foam (PUF) Panels",
      desc: "Our structural building block of high-efficiency cold storage vaults.",
      specs: [
        { label: "Thickness Options", value: "40mm / 60mm / 80mm / 100mm / 120mm / 150mm" },
        { label: "Density Parameters", value: "38 - 42 kg/m³ (High Density Core)" },
        { label: "Thermal Conductivity", value: "0.022 W/mK (Ultra Low Loss)" },
        { label: "Joint Mechanics", value: "Prefabricated Cam-Lock joints with tongue-and-groove alignment" },
      ],
    },
    {
      name: "Scroll & Semi-Hermetic Compressors",
      desc: "High-reliability compression plants providing steady cooling loads.",
      specs: [
        { label: "Partner Brands", value: "Copeland (Emerson), Bitzer, Carlyle" },
        { label: "Capacity Scale", value: "0.5 TR to 30 TR (Tons of Refrigeration)" },
        { label: "Refrigerants Used", value: "Eco-compliant R404A, R134a, R448A, R22" },
        { label: "Condenser Type", value: "Air-cooled (coaxial/fin-tube) & Water-cooled options" },
      ],
    },
    {
      name: "Evaporator & Air Cooler Units",
      desc: "Uniform temperature distributing evaporators matching the cooling plant.",
      specs: [
        { label: "Coil Materials", value: "Dehydrated inner grooved copper tubes with aluminum fins" },
        { label: "Defrost Configuration", value: "Integrated electrical heating element or hot gas bypass" },
        { label: "Fan Motor Spec", value: "Low noise axial fans with thermal overload protection" },
        { label: "Fin Spacing Scale", value: "4.5mm (Chilling) to 9.0mm (Deep Freeze)" },
      ],
    },
    {
      name: "Automated Control Panels",
      desc: "Digital controllers keeping temperature and defrost loops in check.",
      specs: [
        { label: "Digital Controllers", value: "Carel, Dixell Microprocessor units" },
        { label: "Safety Alarm Loggers", value: "High/Low temperature thresholds, Phase failure, Door open alarms" },
        { label: "IoT Connectivity", value: "RS485 modbus cards linking directly to cloud telemetry gateways" },
        { label: "Enclosure Class", value: "IP65 weatherproof electrical dust-proof cabinet panels" },
      ],
    },
    {
      name: "Insulated Storage Access Doors",
      desc: "Heavy-duty doors maintaining insulation integrity at room access boundaries.",
      specs: [
        { label: "Door Style Options", value: "Pivot swing doors, Insulated sliding doors" },
        { label: "Insulation Core", value: "PUF core injection matching wall panel thickness (80mm/120mm)" },
        { label: "Anti-Frost Protection", value: "Integrated door frame heating strip elements (24V safe)" },
        { label: "Gasket Seal", value: "Multi-lip magnetic compression gasket strips" },
      ],
    },
    {
      name: "Refrigeration-Grade Copper Piping",
      desc: "Precision interconnecting fluid pipes linking outdoor condenser units to indoor coolers.",
      specs: [
        { label: "Material Grade", value: "Dehydrated and sealed soft/hard copper tubing" },
        { label: "Insulation Sleeve", value: "Closed-cell elastomeric Armaflex tubing insulation" },
        { label: "Piping Joints", value: "Silver brazed leak-tested copper fittings and isolation valves" },
      ],
    },
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
            Technical Components
          </span>
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl font-display">
            Cold Room Products & Specs
          </h1>
          <p className="max-w-xl mx-auto text-xs sm:text-sm text-silver/80 leading-relaxed">
            Engineering details of our certified structural panels, compression refrigeration plants, and digital control sensors.
          </p>
        </div>
      </section>

      {/* Thickness Sizing Guide Tool (Interactive) */}
      <section className="py-16 bg-[#0C2340]/40 border-t border-white/5">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 space-y-8">
          <div className="text-center space-y-2">
            <span className="text-[10px] font-bold uppercase tracking-wider text-teal-light font-mono">
              Interactive Sizer
            </span>
            <h2 className="text-xl font-bold text-white font-display">
              Insulation Panel Sizing Selector
            </h2>
            <p className="text-xs text-silver/80 max-w-md mx-auto">
              Select your required chamber storage temperature range to view recommended PUF panel thickness parameters.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-2 p-1.5 rounded-xl bg-white/2 border border-white/5 max-w-md mx-auto">
            {Object.keys(pufThicknessGuide).map((k) => (
              <button
                key={k}
                onClick={() => setSelectedRange(k)}
                className={`rounded-lg py-2.5 text-center text-xs font-semibold capitalize transition-all ${
                  selectedRange === k
                    ? "bg-teal-accent text-white shadow-lg"
                    : "text-silver hover:text-white hover:bg-white/2"
                }`}
              >
                {k.replace("-", " ")}
              </button>
            ))}
          </div>

          {/* Sizing display card */}
          {/* @ts-ignore */}
          {pufThicknessGuide[selectedRange] && (
            <div className="rounded-2xl border border-teal-light/20 bg-teal-accent/5 p-6 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              <div>
                <span className="text-[9px] font-mono text-silver uppercase block mb-1">
                  Suggested PUF Panel Thickness
                </span>
                <div className="text-2xl font-extrabold text-teal-light font-display">
                  {/* @ts-ignore */}
                  {pufThicknessGuide[selectedRange].thickness}
                </div>
                <div className="text-[10px] text-silver font-mono mt-1 flex items-center gap-1">
                  <Thermometer className="h-3.5 w-3.5" />
                  Chamber Target: {/* @ts-ignore */}
                  {pufThicknessGuide[selectedRange].temp}
                </div>
              </div>
              <div className="border-t border-white/5 pt-4 md:border-t-0 md:pt-0 md:pl-6 md:border-l space-y-2">
                <div className="text-xs font-semibold text-white">Application Suitability:</div>
                {/* @ts-ignore */}
                <p className="text-xs text-silver leading-relaxed">{pufThicknessGuide[selectedRange].utility}</p>
                {/* @ts-ignore */}
                <p className="text-[10px] text-teal-light font-mono mt-1">{pufThicknessGuide[selectedRange].efficiency}</p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Technical Components Detail Listing */}
      <section className="py-20 bg-[#111318] border-t border-white/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((p, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-white/5 bg-[#0C2340]/40 p-6 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <h3 className="text-sm font-bold text-white font-display border-b border-white/5 pb-3">
                    {p.name}
                  </h3>
                  <p className="text-xs text-silver/80 leading-relaxed mb-4">{p.desc}</p>
                  
                  <div className="space-y-2">
                    {p.specs.map((s, sIdx) => (
                      <div key={sIdx} className="text-[10px] font-mono leading-relaxed border-b border-white/2 pb-1.5 flex flex-col">
                        <span className="text-teal-light font-semibold uppercase text-[8px] tracking-wider mb-0.5">
                          {s.label}
                        </span>
                        <span className="text-white/95">
                          {s.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
