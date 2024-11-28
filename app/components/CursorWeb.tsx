'use client';

import { useEffect, useRef } from 'react';

const CursorWeb = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const pointsRef = useRef<Array<{ x: number; y: number; vx: number; vy: number }>>([]);
  const requestRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const updateCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    updateCanvasSize();
    window.addEventListener('resize', updateCanvasSize);

    // Initialize points
    const initPoints = () => {
      pointsRef.current = Array.from({ length: 50 }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5
      }));
    };
    initPoints();

    // Mouse move handler
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = {
        x: e.clientX,
        y: e.clientY
      };
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Animation
    const animate = () => {
      if (!ctx || !canvas) return;

      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update points
      pointsRef.current.forEach(point => {
        // Move points
        point.x += point.vx;
        point.y += point.vy;

        // Bounce off edges
        if (point.x < 0 || point.x > canvas.width) point.vx *= -1;
        if (point.y < 0 || point.y > canvas.height) point.vy *= -1;

        // Attract to mouse
        const dx = mouseRef.current.x - point.x;
        const dy = mouseRef.current.y - point.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 200) {
          point.vx += (dx / dist) * 0.1;
          point.vy += (dy / dist) * 0.1;
        }

        // Limit velocity
        const speed = Math.sqrt(point.vx * point.vx + point.vy * point.vy);
        if (speed > 2) {
          point.vx = (point.vx / speed) * 2;
          point.vy = (point.vy / speed) * 2;
        }
      });

      // Draw connections
      ctx.beginPath();
      ctx.strokeStyle = '#ae73ff20';
      pointsRef.current.forEach((point, i) => {
        pointsRef.current.forEach((otherPoint, j) => {
          if (i === j) return;
          const dx = point.x - otherPoint.x;
          const dy = point.y - otherPoint.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 100) {
            ctx.moveTo(point.x, point.y);
            ctx.lineTo(otherPoint.x, otherPoint.y);
          }
        });
      });
      ctx.stroke();

      // Draw points
      ctx.fillStyle = '#ae73ff40';
      pointsRef.current.forEach(point => {
        ctx.beginPath();
        ctx.arc(point.x, point.y, 2, 0, Math.PI * 2);
        ctx.fill();
      });

      requestRef.current = requestAnimationFrame(animate);
    };

    animate();

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', updateCanvasSize);
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-50"
      style={{ opacity: 0.6 }}
    />
  );
};

export default CursorWeb; 