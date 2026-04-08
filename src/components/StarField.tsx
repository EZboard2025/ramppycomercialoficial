"use client";

import { useEffect, useRef } from "react";

export default function StarField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    function draw() {
      const w = window.innerWidth;
      const h = window.innerHeight;
      canvas!.width = w;
      canvas!.height = h;

      ctx!.clearRect(0, 0, w, h);

      // Vanishing point
      const vx = w / 2;
      const vy = h * 0.35;

      const gridColor = "rgba(180, 180, 180, 0.25)";
      const lineWidth = 0.5;

      // --- Left wall ---
      const leftWallRight = w * 0.35;
      const verticalLines = 14;
      const horizontalLines = 16;

      for (let i = 0; i <= verticalLines; i++) {
        const t = i / verticalLines;
        // Bottom edge x
        const bx = leftWallRight * t;
        // Top converges to vanishing point
        const tx = vx + (bx - vx) * 0.15;
        const ty = vy + (0 - vy) * 0.15;

        const alpha = 0.12 + t * 0.18;
        ctx!.beginPath();
        ctx!.moveTo(bx, h);
        ctx!.lineTo(tx, ty);
        ctx!.strokeStyle = `rgba(160, 160, 160, ${alpha})`;
        ctx!.lineWidth = lineWidth;
        ctx!.stroke();
      }

      for (let i = 0; i <= horizontalLines; i++) {
        const t = i / horizontalLines;
        // Ease - lines get closer together near vanishing point
        const eased = Math.pow(t, 1.8);

        const y = vy + (h - vy) * eased;
        const xLeft = 0;
        const xRight = leftWallRight * eased + vx * (1 - eased);

        const alpha = 0.05 + eased * 0.2;
        ctx!.beginPath();
        ctx!.moveTo(xLeft, y);
        ctx!.lineTo(xRight, y);
        ctx!.strokeStyle = `rgba(160, 160, 160, ${alpha})`;
        ctx!.lineWidth = lineWidth;
        ctx!.stroke();
      }

      // --- Right wall ---
      const rightWallLeft = w * 0.65;

      for (let i = 0; i <= verticalLines; i++) {
        const t = i / verticalLines;
        const bx = rightWallLeft + (w - rightWallLeft) * t;
        const tx = vx + (bx - vx) * 0.15;
        const ty = vy + (0 - vy) * 0.15;

        const alpha = 0.12 + (1 - t) * 0.18;
        ctx!.beginPath();
        ctx!.moveTo(bx, h);
        ctx!.lineTo(tx, ty);
        ctx!.strokeStyle = `rgba(160, 160, 160, ${alpha})`;
        ctx!.lineWidth = lineWidth;
        ctx!.stroke();
      }

      for (let i = 0; i <= horizontalLines; i++) {
        const t = i / horizontalLines;
        const eased = Math.pow(t, 1.8);

        const y = vy + (h - vy) * eased;
        const xLeft = rightWallLeft * eased + vx * (1 - eased);
        const xRight = w;

        const alpha = 0.05 + eased * 0.2;
        ctx!.beginPath();
        ctx!.moveTo(xLeft, y);
        ctx!.lineTo(xRight, y);
        ctx!.strokeStyle = `rgba(160, 160, 160, ${alpha})`;
        ctx!.lineWidth = lineWidth;
        ctx!.stroke();
      }

    }

    draw();
    window.addEventListener("resize", draw);

    return () => {
      window.removeEventListener("resize", draw);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-50"
    />
  );
}
