"use client";

import { useRef, useState, useEffect } from "react";
import DashboardInteractive from "./DashboardInteractive";

const DASH_W = 1360;
const DASH_H = 820;

export default function DashboardPreview() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(0.42);

  useEffect(() => {
    function calc() {
      if (!containerRef.current) return;
      const w = containerRef.current.offsetWidth;
      setScale(w / DASH_W);
    }
    calc();
    window.addEventListener("resize", calc);
    return () => window.removeEventListener("resize", calc);
  }, []);

  return (
    <div className="relative w-full">
      {/* Browser Chrome */}
      <div className="bg-[#e0e0e0] rounded-t-xl px-3 py-1.5 flex items-center gap-2">
        <div className="flex gap-1">
          <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
        </div>
        <div className="flex-1 h-5 bg-white rounded-md max-w-[200px] flex items-center px-2 mx-auto border border-gray-300/40">
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#999" strokeWidth="2" className="mr-1.5 shrink-0">
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
            <path d="M7 11V7a5 5 0 0110 0v4" />
          </svg>
          <span className="text-[10px] text-gray-500">app.ramppy.com</span>
        </div>
      </div>

      {/* Dashboard - scaled to fit container */}
      <div
        ref={containerRef}
        className="relative w-full overflow-hidden bg-white rounded-b-xl shadow-2xl border border-t-0 border-gray-200"
        style={{ height: Math.round(DASH_H * scale) }}
      >
        <div
          style={{
            width: DASH_W,
            height: DASH_H,
            transform: `scale(${scale})`,
            transformOrigin: "top left",
          }}
        >
          <DashboardInteractive />
        </div>
      </div>
    </div>
  );
}
