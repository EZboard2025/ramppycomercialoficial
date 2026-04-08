"use client";

import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
  pulse: number;
  pulseSpeed: number;
}

interface ShootingStar {
  x: number;
  y: number;
  length: number;
  speed: number;
  angle: number;
  opacity: number;
  life: number;
  maxLife: number;
}

export default function StarField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let particles: Particle[] = [];
    let shootingStars: ShootingStar[] = [];

    function resize() {
      canvas!.width = window.innerWidth;
      canvas!.height = document.documentElement.scrollHeight;
      initParticles();
    }

    function initParticles() {
      particles = [];
      const count = Math.floor((canvas!.width * canvas!.height) / 40000);
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * canvas!.width,
          y: Math.random() * canvas!.height,
          size: Math.random() * 2.5 + 1,
          speedX: (Math.random() - 0.5) * 0.3,
          speedY: Math.random() * 0.2 + 0.1,
          opacity: Math.random() * 0.2 + 0.05,
          pulse: Math.random() * Math.PI * 2,
          pulseSpeed: Math.random() * 0.03 + 0.01,
        });
      }
    }

    function spawnShootingStar() {
      shootingStars.push({
        x: Math.random() * canvas!.width,
        y: -10,
        length: Math.random() * 80 + 50,
        speed: Math.random() * 4 + 3,
        angle: Math.PI * 0.3 + Math.random() * 0.2,
        opacity: Math.random() * 0.35 + 0.15,
        life: 0,
        maxLife: Math.random() * 100 + 80,
      });
    }

    let nextShootingStar = Math.random() * 200 + 100;

    function draw() {
      ctx!.clearRect(0, 0, canvas!.width, canvas!.height);

      // Floating particles
      for (const p of particles) {
        p.x += p.speedX;
        p.y += p.speedY;
        p.pulse += p.pulseSpeed;

        // Wrap around
        if (p.y > canvas!.height) { p.y = -5; p.x = Math.random() * canvas!.width; }
        if (p.x < 0) p.x = canvas!.width;
        if (p.x > canvas!.width) p.x = 0;

        const alpha = p.opacity * (0.5 + Math.sin(p.pulse) * 0.5);

        ctx!.beginPath();
        ctx!.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx!.fillStyle = `rgba(34, 197, 94, ${alpha})`;
        ctx!.fill();
      }

      // Shooting stars
      nextShootingStar--;
      if (nextShootingStar <= 0) {
        spawnShootingStar();
        nextShootingStar = Math.random() * 400 + 200;
      }

      for (let i = shootingStars.length - 1; i >= 0; i--) {
        const s = shootingStars[i];
        s.x += Math.cos(s.angle) * s.speed;
        s.y += Math.sin(s.angle) * s.speed;
        s.life++;

        const fadeIn = Math.min(s.life / 10, 1);
        const fadeOut = Math.max(1 - s.life / s.maxLife, 0);
        const alpha = s.opacity * fadeIn * fadeOut;

        if (alpha <= 0) {
          shootingStars.splice(i, 1);
          continue;
        }

        const tailX = s.x - Math.cos(s.angle) * s.length;
        const tailY = s.y - Math.sin(s.angle) * s.length;

        const gradient = ctx!.createLinearGradient(s.x, s.y, tailX, tailY);
        gradient.addColorStop(0, `rgba(34, 197, 94, ${alpha})`);
        gradient.addColorStop(1, `rgba(34, 197, 94, 0)`);

        ctx!.beginPath();
        ctx!.moveTo(s.x, s.y);
        ctx!.lineTo(tailX, tailY);
        ctx!.strokeStyle = gradient;
        ctx!.lineWidth = 1.5;
        ctx!.stroke();

        // Glow at head
        ctx!.beginPath();
        ctx!.arc(s.x, s.y, 2, 0, Math.PI * 2);
        ctx!.fillStyle = `rgba(34, 197, 94, ${alpha * 0.6})`;
        ctx!.fill();
      }

      animationId = requestAnimationFrame(draw);
    }

    resize();
    draw();
    window.addEventListener("resize", resize);

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-50"
    />
  );
}
