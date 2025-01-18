"use client";
import { useEffect, useState } from "react";

interface HexagonalPreloaderProps {
  isLoading: boolean;
}

const HexagonalPreloader = ({ isLoading }: HexagonalPreloaderProps) => {
  const [showPreloader, setShowPreloader] = useState(true);

  useEffect(() => {
    if (!isLoading) {
      const timer = setTimeout(() => setShowPreloader(false), 1000);
      return () => clearTimeout(timer);
    }
  }, [isLoading]);

  const Hexagon = ({ className = "", style = {} }) => (
    <svg
      className={className}
      style={style}
      viewBox="0 0 512 512"
      xmlns="http://www.w3.org/2000/svg"
    >
      <polygon
        points="25.04,128 256,0 486.96,128 486.96,384 256,512 25.04,384"
        fill="#9609f4"
      />
      <polygon
        points="165.824,206.024 256,156.048 346.176,206.024 346.176,305.976 256,355.952 165.824,305.976"
        fill="black"
      />
    </svg>
  );

  if (!showPreloader) return null;

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center bg-black z-50 transition-opacity duration-1000 ${
        isLoading ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="relative">
        <div className="relative w-96 h-96">
          {/* Center Hexagon */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <Hexagon className="w-20 h-20 animate-pulse" />
          </div>

          {/* Surrounding Hexagons */}
          {Array.from({ length: 6 }).map((_, i) => {
            const angle = (i * Math.PI) / 3;
            const radius = 80;

            return (
              <div
                key={i}
                className="absolute w-20 h-20"
                style={{
                  top: `calc(50% + ${Math.sin(angle) * radius}px)`,
                  left: `calc(50% + ${Math.cos(angle) * radius}px)`,
                  transform: `translate(-50%, -50%)`,
                }}
              >
                <Hexagon
                  className="w-full h-full opacity-50"
                  style={{
                    animation: `spin 2s ease-in-out infinite ${i * 0.3}s`,
                  }}
                />
              </div>
            );
          })}
        </div>

        <h1 className="text-4xl font-bold text-center mt-8 font-rajdhani">
          <span className="bg-gradient-to-r from-[#8831ff] via-[#ae73ff] to-[#bd8cff] text-transparent bg-clip-text">
            RICHMUN
          </span>
        </h1>
      </div>
    </div>
  );
};

export default HexagonalPreloader;
