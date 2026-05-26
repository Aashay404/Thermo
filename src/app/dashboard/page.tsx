"use client";

import React, { useState, useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Sidebar from "@/components/layout/Sidebar";
import IotMonitor from "@/components/dashboard/IotMonitor";
import ProjectTracker from "@/components/dashboard/ProjectTracker";
import { X, CheckCircle2, ChevronRight, Sliders, Shield, Calculator } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("iot");
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  // Quote form state
  const [quoteStep, setQuoteStep] = useState(1);
  const [quoteForm, setQuoteForm] = useState({
    appType: "Food Storage",
    length: "10",
    width: "10",
    height: "10",
    tempReq: "Chilling (0°C to 8°C)",
    name: "",
    phone: "",
    email: "",
    company: "",
  });
  const [isSubmittingQuote, setIsSubmittingQuote] = useState(false);
  const [quotePrice, setQuotePrice] = useState("");

  // Listen to Navbar "Get Free Quote" clicks
  useEffect(() => {
    const handleOpenQuote = () => {
      setQuoteStep(1);
      setIsQuoteOpen(true);
    };
    window.addEventListener("open-quote-modal", handleOpenQuote);
    return () => window.removeEventListener("open-quote-modal", handleOpenQuote);
  }, []);

  const handleNextQuoteStep = () => {
    if (quoteStep < 4) {
      setQuoteStep((prev) => prev + 1);
    } else {
      // Final submission
      setIsSubmittingQuote(true);
      setTimeout(() => {
        const l = parseFloat(quoteForm.length) || 10;
        const w = parseFloat(quoteForm.width) || 10;
        const h = parseFloat(quoteForm.height) || 10;
        const volume = l * w * h;
        const basePrice = volume * 180;
        const modifier = quoteForm.tempReq.includes("Deep Freeze") ? 1.3 : 1.0;
        const finalEst = Math.round(basePrice * modifier);
        
        const formattedMin = new Intl.NumberFormat("en-IN", {
          style: "currency",
          currency: "INR",
          maximumFractionDigits: 0,
        }).format(finalEst);

        const formattedMax = new Intl.NumberFormat("en-IN", {
          style: "currency",
          currency: "INR",
          maximumFractionDigits: 0,
        }).format(finalEst * 1.15);

        setQuotePrice(`${formattedMin} - ${formattedMax}`);
        setIsSubmittingQuote(false);
        setQuoteStep(5); // Success step
      }, 1500);
    }
  };

  return (
    <div className="flex flex-col flex-1 h-full min-h-screen bg-[#0C2340] text-white">
      {/* Global Header */}
      <Navbar />

      {/* Main Container */}
      <div className="flex flex-col flex-1 md:flex-row max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-6 gap-6">
        {/* Navigation Sidebar */}
        <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

        {/* Dashboard Area */}
        <main className="flex-1 min-w-0 bg-[#0C2340]/25 rounded-2xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
            >
              {activeTab === "iot" ? <IotMonitor /> : <ProjectTracker />}
            </motion.div>
          </AnimatePresence>
        </main>
      </div>

      {/* Quote Generator Dialog Modal */}
      <AnimatePresence>
        {isQuoteOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsQuoteOpen(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-lg overflow-hidden rounded-2xl border border-white/10 bg-[#0c2340] shadow-2xl p-6 md:p-8"
            >
              <button
                onClick={() => setIsQuoteOpen(false)}
                className="absolute top-4 right-4 text-silver hover:text-white transition-colors"
              >
                <X className="h-5 w-5" />
              </button>

              {quoteStep <= 4 && (
                <div className="flex items-center gap-1.5 mb-6">
                  {[1, 2, 3, 4].map((s) => (
                    <div
                      key={s}
                      className={`h-1.5 flex-1 rounded-full transition-all duration-300 ${
                        s <= quoteStep ? "bg-teal-light" : "bg-white/10"
                      }`}
                    />
                  ))}
                </div>
              )}

              {quoteStep === 1 && (
                <div>
                  <h3 className="text-base font-bold text-white mb-2 font-display flex items-center gap-2">
                    <Calculator className="h-5 w-5 text-teal-light" />
                    Step 1: Application Sizing
                  </h3>
                  <p className="text-xs text-silver mb-4 leading-relaxed">
                    Select the primary utility and target items for the cold storage room.
                  </p>

                  <div className="space-y-3">
                    {["Food Storage (Agri/Dairy)", "Pharmaceutical / Lab", "Retail / Glass Display", "Industrial Blast Chilling"].map((opt) => (
                      <button
                        key={opt}
                        onClick={() => setQuoteForm({ ...quoteForm, appType: opt })}
                        className={`w-full text-left rounded-xl p-3 text-xs border font-medium transition-all ${
                          quoteForm.appType === opt
                            ? "bg-teal-accent/15 border-teal-light text-white"
                            : "bg-[#0C2340] border-white/5 text-silver hover:bg-white/5"
                        }`}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {quoteStep === 2 && (
                <div>
                  <h3 className="text-base font-bold text-white mb-2 font-display flex items-center gap-2">
                    <Sliders className="h-5 w-5 text-teal-light" />
                    Step 2: Room Sizing Dimensions
                  </h3>
                  <p className="text-xs text-silver mb-4 leading-relaxed">
                    Provide internal dimensions of the space in feet (Length x Width x Height).
                  </p>

                  <div className="grid grid-cols-3 gap-3 mb-4">
                    <div>
                      <label className="text-[10px] text-silver font-mono block mb-1">Length (ft)</label>
                      <input
                        type="number"
                        value={quoteForm.length}
                        onChange={(e) => setQuoteForm({ ...quoteForm, length: e.target.value })}
                        className="w-full rounded-xl bg-[#0c2340]/60 border border-white/5 p-2.5 text-xs text-white placeholder-silver/30 focus:outline-none focus:border-teal-light"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] text-silver font-mono block mb-1">Width (ft)</label>
                      <input
                        type="number"
                        value={quoteForm.width}
                        onChange={(e) => setQuoteForm({ ...quoteForm, width: e.target.value })}
                        className="w-full rounded-xl bg-[#0c2340]/60 border border-white/5 p-2.5 text-xs text-white placeholder-silver/30 focus:outline-none focus:border-teal-light"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] text-silver font-mono block mb-1">Height (ft)</label>
                      <input
                        type="number"
                        value={quoteForm.height}
                        onChange={(e) => setQuoteForm({ ...quoteForm, height: e.target.value })}
                        className="w-full rounded-xl bg-[#0c2340]/60 border border-white/5 p-2.5 text-xs text-white placeholder-silver/30 focus:outline-none focus:border-teal-light"
                      />
                    </div>
                  </div>
                </div>
              )}

              {quoteStep === 3 && (
                <div>
                  <h3 className="text-base font-bold text-white mb-2 font-display flex items-center gap-2">
                    <Shield className="h-5 w-5 text-teal-light" />
                    Step 3: Thermal Ranges
                  </h3>
                  <p className="text-xs text-silver mb-4 leading-relaxed">
                    Choose the refrigeration cooling parameters.
                  </p>

                  <div className="space-y-3">
                    {[
                      "Chilling (0°C to 8°C) - Fruits, Veggies, Dairy",
                      "Deep Freeze (-18°C to -25°C) - Frozen Meat, Ice Cream",
                      "Controlled Atmosphere (Custom) - Long term ripening",
                    ].map((opt) => (
                      <button
                        key={opt}
                        onClick={() => setQuoteForm({ ...quoteForm, tempReq: opt })}
                        className={`w-full text-left rounded-xl p-3 text-xs border font-medium transition-all ${
                          quoteForm.tempReq === opt
                            ? "bg-teal-accent/15 border-teal-light text-white"
                            : "bg-[#0C2340] border-white/5 text-silver hover:bg-white/5"
                        }`}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {quoteStep === 4 && (
                <div>
                  <h3 className="text-base font-bold text-white mb-2 font-display">Step 4: Contact Information</h3>
                  <p className="text-xs text-silver mb-4 leading-relaxed">
                    Provide credentials to log estimation reports in Zoho CRM & send PDF breakdowns.
                  </p>

                  <div className="space-y-3">
                    <input
                      type="text"
                      placeholder="Contact Name"
                      value={quoteForm.name}
                      onChange={(e) => setQuoteForm({ ...quoteForm, name: e.target.value })}
                      className="w-full rounded-xl bg-[#0c2340]/60 border border-white/5 p-3 text-xs text-white placeholder-silver/40 focus:outline-none focus:border-teal-light"
                    />
                    <input
                      type="tel"
                      placeholder="Mobile Number"
                      value={quoteForm.phone}
                      onChange={(e) => setQuoteForm({ ...quoteForm, phone: e.target.value })}
                      className="w-full rounded-xl bg-[#0c2340]/60 border border-white/5 p-3 text-xs text-white placeholder-silver/40 focus:outline-none focus:border-teal-light"
                    />
                    <input
                      type="email"
                      placeholder="Email Address"
                      value={quoteForm.email}
                      onChange={(e) => setQuoteForm({ ...quoteForm, email: e.target.value })}
                      className="w-full rounded-xl bg-[#0c2340]/60 border border-white/5 p-3 text-xs text-white placeholder-silver/40 focus:outline-none focus:border-teal-light"
                    />
                    <input
                      type="text"
                      placeholder="Company Name"
                      value={quoteForm.company}
                      onChange={(e) => setQuoteForm({ ...quoteForm, company: e.target.value })}
                      className="w-full rounded-xl bg-[#0c2340]/60 border border-white/5 p-3 text-xs text-white placeholder-silver/40 focus:outline-none focus:border-teal-light"
                    />
                  </div>
                </div>
              )}

              {quoteStep === 5 && (
                <div className="text-center py-4">
                  <CheckCircle2 className="h-12 w-12 text-teal-light mx-auto mb-4 animate-bounce" />
                  <h3 className="text-lg font-bold text-white mb-2 font-display">Estimation Ready!</h3>
                  <p className="text-xs text-silver leading-relaxed mb-6">
                    A copy of this estimation and mock visual drawing is dispatched to{" "}
                    <span className="text-white font-semibold">{quoteForm.email || "your email"}</span>.
                  </p>

                  <div className="rounded-2xl border border-teal-light/20 bg-teal-accent/10 p-5 mb-6 text-center">
                    <span className="text-[10px] text-silver font-mono uppercase block mb-1">
                      Estimated Cost (Excluding Civil Work)
                    </span>
                    <span className="text-xl font-bold text-teal-light font-mono">{quotePrice}</span>
                  </div>

                  <button
                    onClick={() => setIsQuoteOpen(false)}
                    className="rounded-xl bg-teal-accent px-6 py-2.5 text-xs font-semibold text-white hover:bg-teal-light transition-all active:scale-95"
                  >
                    Close Quote Engine
                  </button>
                </div>
              )}

              <div className="flex justify-end gap-3 mt-6 border-t border-white/5 pt-4">
                {quoteStep > 1 && quoteStep <= 4 && (
                  <button
                    onClick={() => setQuoteStep((prev) => prev - 1)}
                    className="rounded-xl border border-white/5 bg-white/2 px-4 py-2.5 text-xs font-semibold text-silver hover:text-white transition-colors"
                  >
                    Back
                  </button>
                )}
                {quoteStep <= 4 && (
                  <button
                    onClick={handleNextQuoteStep}
                    disabled={
                      (quoteStep === 4 && (!quoteForm.name || !quoteForm.phone || !quoteForm.email)) ||
                      isSubmittingQuote
                    }
                    className="flex items-center gap-1.5 rounded-xl bg-teal-accent px-5 py-2.5 text-xs font-semibold text-white hover:bg-teal-light disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                  >
                    {isSubmittingQuote ? (
                      "Calculating Sizing..."
                    ) : (
                      <>
                        <span>{quoteStep === 4 ? "Submit Request" : "Continue"}</span>
                        <ChevronRight className="h-4 w-4" />
                      </>
                    )}
                  </button>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
