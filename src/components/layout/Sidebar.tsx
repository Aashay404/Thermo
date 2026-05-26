"use client";

import React from "react";
import { Gauge, Milestone, Thermometer, Calendar, Snowflake, UserCheck } from "lucide-react";
import { motion } from "framer-motion";

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function Sidebar({ activeTab, setActiveTab }: SidebarProps) {
  const menuItems = [
    {
      id: "iot",
      label: "IoT Live Monitor",
      icon: Gauge,
      description: "Real-time telemetry & 3D visualizer",
    },
    {
      id: "tracker",
      label: "Project Tracker",
      icon: Milestone,
      description: "Installation status & timelines",
    },
  ];

  return (
    <aside className="w-full shrink-0 border-b border-white/5 bg-[#0C2340]/40 p-4 md:w-80 md:border-b-0 md:border-r md:p-6">
      {/* Project Status Summary Card */}
      <div className="mb-6 rounded-2xl bg-gradient-to-br from-navy-mid/30 to-[#0C2340]/80 p-5 border border-white/5">
        <div className="flex items-center justify-between mb-3">
          <span className="text-[10px] font-bold uppercase tracking-wider text-teal-light font-mono">
            Active Project
          </span>
          <span className="inline-flex items-center gap-1 rounded-full bg-teal-accent/20 px-2 py-0.5 text-[10px] font-medium text-teal-light">
            <span className="h-1 w-1 rounded-full bg-teal-light animate-pulse" />
            Phase 1
          </span>
        </div>
        <h3 className="text-sm font-bold text-white font-display">
          Agro-Cold Room Unit 4
        </h3>
        <p className="text-xs text-silver mt-1">Pune Food Park, MIDC</p>

        <div className="mt-4 grid grid-cols-2 gap-3 border-t border-white/5 pt-4">
          <div className="flex items-center gap-2">
            <Thermometer className="h-4 w-4 text-sky-400" />
            <div>
              <div className="text-[10px] text-silver font-mono">Set Point</div>
              <div className="text-xs font-bold text-white font-mono">-18.0°C</div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Snowflake className="h-4 w-4 text-teal-light" />
            <div>
              <div className="text-[10px] text-silver font-mono">Type</div>
              <div className="text-xs font-bold text-white font-mono">Deep Freeze</div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Menu */}
      <nav className="space-y-1.5">
        <div className="text-[10px] font-bold uppercase tracking-wider text-silver px-3 mb-2 font-mono">
          Dashboard Views
        </div>
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;

          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className="relative w-full text-left rounded-xl p-3 flex items-start gap-3 transition-colors duration-200 group hover:bg-white/5"
            >
              {/* Active state background slide animation */}
              {isActive && (
                <motion.div
                  layoutId="active-nav-bg"
                  className="absolute inset-0 rounded-xl bg-teal-accent/15 border border-teal-accent/30"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}

              <Icon
                className={`h-5 w-5 shrink-0 mt-0.5 transition-colors z-10 ${
                  isActive ? "text-teal-light" : "text-silver group-hover:text-white"
                }`}
              />

              <div className="z-10">
                <div
                  className={`text-sm font-semibold transition-colors ${
                    isActive ? "text-white" : "text-silver group-hover:text-white"
                  }`}
                >
                  {item.label}
                </div>
                <div className="text-[10px] text-silver/60 group-hover:text-silver transition-colors">
                  {item.description}
                </div>
              </div>
            </button>
          );
        })}
      </nav>

      {/* Quick Team Reference Card */}
      <div className="mt-8 border-t border-white/5 pt-6 hidden md:block">
        <div className="flex items-center gap-3 p-3 rounded-xl bg-white/2">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-teal-accent text-xs font-bold text-white">
            KV
          </div>
          <div>
            <div className="text-xs font-semibold text-white">Karan Varma</div>
            <div className="text-[10px] text-silver flex items-center gap-1">
              <UserCheck className="h-3 w-3 text-teal-light" />
              Project Engineer
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
