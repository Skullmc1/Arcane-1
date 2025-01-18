"use client";

import { useEffect, useState } from "react";
import ContextMenuWrapper from "./components/CustomContextMenu";
import AOS from "aos";
import "aos/dist/aos.css";
import "./styles/ContextMenu.css";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import CommitteesSection from "./components/CommitteesSection";
import Footer from "./components/Footer";
import HexagonalPreloader from "./components/HexagonalPreloader"; // Import the new preloader

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true, easing: "ease-out" });

    const timer = setTimeout(() => {
      setIsLoading(false);
      setTimeout(() => AOS.refresh(), 100);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-[#0A0A0B]">
      <ContextMenuWrapper />
      {/* Preloader */}
      <HexagonalPreloader isLoading={isLoading} />

      {/* Main Content */}
      <div
        className={`min-h-screen transition-opacity duration-1000 select-none ${isLoading ? "opacity-0" : "opacity-100"}`}
      >
        <main className="relative">
          <HeroSection />
          <AboutSection />
          <CommitteesSection />
        </main>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
