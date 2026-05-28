"use client";

import React, { useState, useEffect, useRef, useMemo } from "react";
import {
  Thermometer,
  Droplets,
  Zap,
  DoorOpen,
  Play,
  RotateCcw,
  AlertTriangle,
  Sliders,
  Activity,
  Terminal,
} from "lucide-react";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
} from "recharts";
import ColdRoom3D from "./ColdRoom3D";

// Define shape of event log item
interface LogItem {
  time: string;
  type: "info" | "warning" | "success";
  message: string;
}

// Define shape of chart data point
interface ChartData {
  time: string;
  temp: number;
  target: number;
  humidity: number;
}

export default function IotMonitor() {
  // --- Simulated State Variables ---
  const [temperature, setTemperature] = useState(-17.8);
  const [humidity, setHumidity] = useState(62);
  const [doorOpen, setDoorOpen] = useState(false);
  const [targetTemp, setTargetTemp] = useState(-18.0);
  const [compressorMode, setCompressorMode] = useState<"auto" | "off">("auto");
  const [compressorActive, setCompressorActive] = useState(true);
  const [defrostActive, setDefrostActive] = useState(false);
  const [powerLoad, setPowerLoad] = useState(4.2);

  // Lists
  const [eventLogs, setEventLogs] = useState<LogItem[]>([
    { time: "10:35:12", type: "success", message: "System initialized. Deep Freeze mode enabled." },
    { time: "10:35:15", type: "info", message: "Compressor auto-started. Core drawing: 4.2kW." },
    { time: "10:36:40", type: "info", message: "Temperature reached set-point boundary (-17.5°C)." },
  ]);

  const initialChartData = useMemo(() => {
    const data: ChartData[] = [];
    const now = new Date();
    for (let i = 9; i >= 0; i--) {
      const d = new Date(now.getTime() - i * 5000);
      const timeStr = d.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", second: "2-digit" });
      data.push({
        time: timeStr,
        temp: parseFloat((-15.0 - (9 - i) * 0.3 + Math.random() * 0.1).toFixed(1)),
        target: -18.0,
        humidity: Math.floor(60 + Math.random() * 3),
      });
    }
    return data;
  }, []);

  const [chartData, setChartData] = useState<ChartData[]>(initialChartData);

  // Ticker ref to avoid state stale closure in interval
  const logsRef = useRef<LogItem[]>([]);
  useEffect(() => {
    logsRef.current = eventLogs;
  }, [eventLogs]);

  const addLog = (message: string, type: "info" | "warning" | "success" = "info") => {
    const timeStr = new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
    setEventLogs((prev) => [{ time: timeStr, type, message }, ...prev.slice(0, 15)]);
  };

  // --- Defrost Timer Simulation ---
  useEffect(() => {
    if (!defrostActive) return;

    // Schedule logs/state updates asynchronously to avoid synchronous setState-in-effect
    const startTimer = setTimeout(() => {
      addLog("Defrost cycle active: Evaporator heater enabled.", "warning");
      setCompressorActive(false);
    }, 0);

    const endTimer = setTimeout(() => {
      setDefrostActive(false);
      addLog("Defrost cycle complete. Resuming standard compressor operations.", "success");
      setCompressorActive(true);
    }, 12000);

    return () => {
      clearTimeout(startTimer);
      clearTimeout(endTimer);
    };
  }, [defrostActive]);

  // --- Real-time Thermodynamics Simulation Engine ---
  useEffect(() => {
    const interval = setInterval(() => {
      // 1. Calculate Compressor Action (Auto Mode logic)
      let isCompRunning = compressorActive;
      if (compressorMode === "auto" && !defrostActive) {
        // Turn on if temperature is 1.5°C higher than target, turn off if it's 0.5°C lower than target
        if (temperature > targetTemp + 1.0) {
          isCompRunning = true;
        } else if (temperature < targetTemp - 0.5) {
          isCompRunning = false;
        }
      } else if (compressorMode === "off") {
        isCompRunning = false;
      }
      setCompressorActive(isCompRunning);

      // 2. Adjust temperature & humidity based on ambient heat and system cooling
      let nextTemp = temperature;
      let nextHumidity = humidity;

      // Ambient thermal leakage values
      const ambientTemp = 30.0;
      const ambientHumidity = 75.0;

      if (doorOpen) {
        // Door is open: rapid heat gain and moisture ingress
        nextTemp += (ambientTemp - nextTemp) * 0.08;
        nextHumidity += (ambientHumidity - nextHumidity) * 0.08;
      } else if (defrostActive) {
        // Defrost active: heating inside the unit (reaches a max of +3°C to melt frost)
        nextTemp += (3.0 - nextTemp) * 0.15;
        nextHumidity += (80.0 - nextHumidity) * 0.1;
      } else if (isCompRunning) {
        // Compressor running: active cooling
        nextTemp += (targetTemp - nextTemp) * 0.04;
        nextHumidity += (50.0 - nextHumidity) * 0.02;
      } else {
        // Compressor idle: slow passive thermal leakage
        nextTemp += (ambientTemp - nextTemp) * 0.005;
        nextHumidity += (ambientHumidity - nextHumidity) * 0.005;
      }

      // Add a tiny bit of random sensor noise
      nextTemp += (Math.random() - 0.5) * 0.05;
      nextHumidity += (Math.random() - 0.5) * 0.2;

      // Safe bounds
      const finalTemp = parseFloat(nextTemp.toFixed(1));
      const finalHumidity = Math.max(10, Math.min(100, Math.floor(nextHumidity)));

      setTemperature(finalTemp);
      setHumidity(finalHumidity);

      // 3. Power Load calculation
      if (defrostActive) {
        setPowerLoad(1.8); // Heater element power draw
      } else if (isCompRunning) {
        // Power scales slightly with temperature differential (efficiency loss at high ambient diff)
        const diff = Math.abs(ambientTemp - finalTemp);
        setPowerLoad(parseFloat((3.0 + diff * 0.05 + Math.random() * 0.1).toFixed(1)));
      } else {
        setPowerLoad(0.1); // Controller standby power
      }

      // 4. Trigger Warning Alerts for extreme deviations
      // Let's say safe range is anything below -12°C for Deep Freeze
      if (finalTemp > -10.0 && !defrostActive) {
        // Trigger alert only once in a while to not spam the logs
        const recentLogs = logsRef.current;
        const lastAlert = recentLogs.find((l) => l.message.includes("HIGH TEMPERATURE ALERT"));
        if (!lastAlert || new Date().getTime() - new Date().getTime() > 10000) {
          addLog(`HIGH TEMPERATURE ALERT: Cold room chamber exceeded safe threshold (${finalTemp}°C)!`, "warning");
        }
      }

      // 5. Append data to Chart
      const timeStr = new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      });
      setChartData((prev) => [
        ...prev.slice(1),
        {
          time: timeStr,
          temp: finalTemp,
          target: targetTemp,
          humidity: finalHumidity,
        },
      ]);
    }, 3000);

    return () => clearInterval(interval);
  }, [temperature, humidity, doorOpen, targetTemp, compressorMode, compressorActive, defrostActive]);

  // Handle controls from UI
  const handleToggleDoor = () => {
    const nextState = !doorOpen;
    setDoorOpen(nextState);
    addLog(`Door contact sensor toggled: ${nextState ? "OPEN" : "SEALED"}`, nextState ? "warning" : "info");
  };

  const handleToggleDefrost = () => {
    if (defrostActive) return;
    setDefrostActive(true);
  };

  const handleCompressorModeChange = (mode: "auto" | "off") => {
    setCompressorMode(mode);
    addLog(`Compressor operation mode overridden to: ${mode.toUpperCase()}`, "info");
    if (mode === "off") {
      setCompressorActive(false);
    }
  };

  return (
    <div className="space-y-6">
      {/* Alarm Warning banner */}
      {temperature > -12.0 && !defrostActive && (
        <div className="flex items-center gap-3 rounded-xl border border-red-500/20 bg-red-500/10 p-4 text-red-200 animate-pulse">
          <AlertTriangle className="h-5 w-5 shrink-0 text-red-400" />
          <div className="text-xs">
            <span className="font-bold">Temperature Threshold Exceeded:</span> The chamber temperature is currently{" "}
            {temperature}°C, which is above the safe threshold of -12.0°C. Check door seals and compressor status.
          </div>
        </div>
      )}

      {/* Grid of Stats Cards */}
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        {/* Temp Card */}
        <div className="rounded-2xl border border-white/5 bg-[#0C2340]/60 p-5 shadow-md">
          <div className="flex items-center justify-between mb-3 text-silver">
            <span className="text-xs font-semibold">Chamber Temp</span>
            <Thermometer className={`h-5 w-5 ${temperature > -12 ? "text-amber-500" : "text-sky-400"}`} />
          </div>
          <div className="flex items-baseline gap-1">
            <span className="text-2xl font-bold tracking-tight text-white font-mono">
              {temperature.toFixed(1)}
            </span>
            <span className="text-xs text-silver font-mono">°C</span>
          </div>
          <div className="text-[10px] text-silver mt-2 flex items-center gap-1 font-mono">
            Target Set: {targetTemp.toFixed(1)}°C
          </div>
        </div>

        {/* Humidity Card */}
        <div className="rounded-2xl border border-white/5 bg-[#0C2340]/60 p-5 shadow-md">
          <div className="flex items-center justify-between mb-3 text-silver">
            <span className="text-xs font-semibold">Relative Humidity</span>
            <Droplets className="h-5 w-5 text-indigo-400" />
          </div>
          <div className="flex items-baseline gap-1">
            <span className="text-2xl font-bold tracking-tight text-white font-mono">
              {humidity}
            </span>
            <span className="text-xs text-silver font-mono">%</span>
          </div>
          <div className="text-[10px] text-silver mt-2 font-mono">
            Safe range: 55% - 70%
          </div>
        </div>

        {/* Power Drawing Card */}
        <div className="rounded-2xl border border-white/5 bg-[#0C2340]/60 p-5 shadow-md">
          <div className="flex items-center justify-between mb-3 text-silver">
            <span className="text-xs font-semibold">Compressor Draw</span>
            <Zap className={`h-5 w-5 ${compressorActive ? "text-teal-light" : "text-silver"}`} />
          </div>
          <div className="flex items-baseline gap-1">
            <span className="text-2xl font-bold tracking-tight text-white font-mono">
              {powerLoad.toFixed(1)}
            </span>
            <span className="text-xs text-silver font-mono">kW</span>
          </div>
          <div className="text-[10px] text-silver mt-2 font-mono flex items-center gap-1">
            <span className={`h-1.5 w-1.5 rounded-full ${compressorActive ? "bg-teal-light animate-ping" : "bg-red-400"}`} />
            {compressorActive ? "Active Cycle" : "Idle State"}
          </div>
        </div>

        {/* Door Sensor Card */}
        <div className="rounded-2xl border border-white/5 bg-[#0C2340]/60 p-5 shadow-md">
          <div className="flex items-center justify-between mb-3 text-silver">
            <span className="text-xs font-semibold">Magnetic Sensor</span>
            <DoorOpen className={`h-5 w-5 ${doorOpen ? "text-amber-400" : "text-teal-light"}`} />
          </div>
          <div className="text-lg font-bold text-white mt-1">
            {doorOpen ? "Door Opened" : "Sealed & Insulated"}
          </div>
          <div className="text-[10px] text-silver mt-2 font-mono">
            Alarms trigger after 30s open
          </div>
        </div>
      </div>

      {/* Main Workspace: 3D Scene + Controls Side-by-Side */}
      <div className="grid grid-cols-1 gap-6 xl:grid-cols-3">
        {/* 3D Scene Container */}
        <div className="xl:col-span-2">
          <div className="rounded-2xl border border-white/5 bg-[#0C2340]/40 p-1">
            <div className="p-4 border-b border-white/5 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Activity className="h-4 w-4 text-teal-light" />
                <span className="text-sm font-bold text-white font-display">
                  3D Interactive Telemetry Model
                </span>
              </div>
              <span className="inline-flex items-center gap-1 rounded-full bg-teal-accent/20 px-2.5 py-0.5 text-[10px] font-medium text-teal-light">
                Live Rendering
              </span>
            </div>
            <ColdRoom3D
              doorOpen={doorOpen}
              compressorActive={compressorActive}
              temperature={temperature}
            />
          </div>
        </div>

        {/* System Interactive Control Box */}
        <div className="rounded-2xl border border-white/5 bg-[#0C2340]/60 p-6 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-4 border-b border-white/5 pb-3">
              <Sliders className="h-4.5 w-4.5 text-teal-light" />
              <h3 className="text-sm font-bold text-white font-display">
                IoT System Controller
              </h3>
            </div>

            {/* Target Temperature Slider */}
            <div className="space-y-2 mb-6">
              <div className="flex justify-between text-xs text-silver">
                <span>Adjust Target Temp (Set-Point)</span>
                <span className="font-bold text-white font-mono">{targetTemp.toFixed(1)}°C</span>
              </div>
              <input
                type="range"
                min="-25.0"
                max="15.0"
                step="0.5"
                value={targetTemp}
                onChange={(e) => {
                  const val = parseFloat(e.target.value);
                  setTargetTemp(val);
                  addLog(`Thermostat set-point threshold adjusted to: ${val.toFixed(1)}°C`, "info");
                }}
                className="w-full h-1 bg-navy rounded-lg appearance-none cursor-pointer accent-teal-light"
              />
              <div className="flex justify-between text-[9px] text-silver font-mono">
                <span>-25.0°C (Pharma/Meat)</span>
                <span>15.0°C (Agri/Fruits)</span>
              </div>
            </div>

            {/* Interactive State Triggers */}
            <div className="space-y-3">
              {/* Door Toggle Button */}
              <button
                onClick={handleToggleDoor}
                className={`w-full flex items-center justify-between rounded-xl px-4 py-3 text-xs font-semibold border transition-all active:scale-[0.98] ${
                  doorOpen
                    ? "bg-amber-500/10 border-amber-500/30 text-amber-400 hover:bg-amber-500/20"
                    : "bg-white/5 border-white/5 text-white hover:bg-white/10"
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <DoorOpen className="h-4 w-4" />
                  <span>{doorOpen ? "Close Chamber Door" : "Simulate Door Opening"}</span>
                </div>
                <span className="text-[10px] uppercase font-mono">{doorOpen ? "Open" : "Closed"}</span>
              </button>

              {/* Defrost Trigger Button */}
              <button
                onClick={handleToggleDefrost}
                disabled={defrostActive}
                className={`w-full flex items-center justify-between rounded-xl px-4 py-3 text-xs font-semibold border transition-all active:scale-[0.98] ${
                  defrostActive
                    ? "bg-teal-accent/20 border-teal-accent/40 text-teal-light cursor-not-allowed"
                    : "bg-white/5 border-white/5 text-white hover:bg-white/10"
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <RotateCcw className={`h-4 w-4 ${defrostActive ? "animate-spin" : ""}`} />
                  <span>{defrostActive ? "Defrost Cycle Running..." : "Trigger Defrost Cycle"}</span>
                </div>
                <span className="text-[10px] uppercase font-mono">{defrostActive ? "Active" : "Ready"}</span>
              </button>
            </div>
          </div>

          {/* Compressor Mode Select (Auto vs manual force shutoff) */}
          <div className="border-t border-white/5 pt-5 mt-6">
            <span className="text-[10px] text-silver font-mono block mb-2 uppercase">
              Compressor Overrides
            </span>
            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={() => handleCompressorModeChange("auto")}
                className={`rounded-lg py-2 text-center text-xs font-semibold transition-all border ${
                  compressorMode === "auto"
                    ? "bg-teal-accent text-white border-teal-light"
                    : "bg-[#0C2340]/40 text-silver border-white/5 hover:text-white"
                }`}
              >
                Auto thermostat
              </button>
              <button
                onClick={() => handleCompressorModeChange("off")}
                className={`rounded-lg py-2 text-center text-xs font-semibold transition-all border ${
                  compressorMode === "off"
                    ? "bg-red-950/40 text-red-400 border-red-900/30"
                    : "bg-[#0C2340]/40 text-silver border-white/5 hover:text-white"
                }`}
              >
                Force shutdown
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Historical Telemetry Chart & Event Logs Ticker */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {/* Recharts Area Graph */}
        <div className="rounded-2xl border border-white/5 bg-[#0C2340]/60 p-5 shadow-md lg:col-span-2">
          <h3 className="text-sm font-bold text-white mb-4 font-display flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-sky-400 animate-pulse" />
            Sensor Chronology & Trends
          </h3>

          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                data={chartData}
                margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
              >
                <defs>
                  <linearGradient id="tempGlow" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#38bdf8" stopOpacity={0.2} />
                    <stop offset="95%" stopColor="#38bdf8" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="humidityGlow" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#818cf8" stopOpacity={0.2} />
                    <stop offset="95%" stopColor="#818cf8" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid stroke="#1e293b" strokeDasharray="3 3" opacity={0.2} />
                <XAxis dataKey="time" stroke="#6b7e94" tick={{ fontFamily: "var(--font-mono)", fontSize: 9 }} />
                <YAxis stroke="#6b7e94" tick={{ fontFamily: "var(--font-mono)", fontSize: 9 }} domain={["dataMin - 3", "dataMax + 3"]} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "rgba(12, 35, 64, 0.9)",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    borderRadius: "12px",
                    color: "#fff",
                    fontSize: "11px",
                    fontFamily: "var(--font-mono)",
                  }}
                />
                <Legend wrapperStyle={{ fontSize: "10px", marginTop: "10px" }} />
                <Area
                  name="Interior Temperature (°C)"
                  type="monotone"
                  dataKey="temp"
                  stroke="#38bdf8"
                  strokeWidth={2}
                  fillOpacity={1}
                  fill="url(#tempGlow)"
                />
                <Area
                  name="Relative Humidity (%)"
                  type="monotone"
                  dataKey="humidity"
                  stroke="#818cf8"
                  strokeWidth={1}
                  fillOpacity={0.5}
                  fill="url(#humidityGlow)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Real-time Event Logger terminal */}
        <div className="rounded-2xl border border-white/5 bg-[#0C2340]/60 p-5 shadow-md flex flex-col h-[328px]">
          <h3 className="text-sm font-bold text-white mb-3 font-display flex items-center gap-2 border-b border-white/5 pb-3 shrink-0">
            <Terminal className="h-4 w-4 text-teal-light" />
            Live System Event Log
          </h3>

          <div className="overflow-y-auto flex-1 space-y-2.5 pr-1 font-mono text-[10px]">
            {eventLogs.map((log, index) => {
              let colorClass = "text-silver";
              if (log.type === "warning") colorClass = "text-amber-400";
              if (log.type === "success") colorClass = "text-teal-light";

              return (
                <div key={index} className="flex items-start gap-2 leading-relaxed border-b border-white/2 pb-1.5">
                  <span className="text-slate-500 select-none">[{log.time}]</span>
                  <span className={colorClass}>{log.message}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
