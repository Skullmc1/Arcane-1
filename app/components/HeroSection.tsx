// app/components/HeroSection.tsx
"use client";

import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-bg.jpg"
          alt="RichMUN Background"
          fill
          className="object-cover opacity-40"
          priority
        />
        <div className="absolute inset-0 bg-[url('/hextech-pattern.png')] opacity-10" />
      </div>

      <div className="z-10 text-center px-4 relative">
        <h1
          data-aos="fade-down"
          data-aos-delay="200"
          className="text-6xl md:text-8xl font-bold mb-6 tracking-[0.2em] font-rajdhani relative group"
        >
          <span className="bg-gradient-to-r from-[#8831ff] via-[#ae73ff] to-[#bd8cff] text-transparent bg-clip-text drop-shadow-[0_0_25px_rgba(189,140,255,0.3)] group-hover:animate-pulse">
            RICHMUN 25
          </span>
        </h1>
        <p
          data-aos="fade-up"
          data-aos-delay="400"
          className="text-xl md:text-2xl text-[#ae73ff] max-w-2xl mx-auto mb-8 leading-relaxed font-chakra-petch"
        >
          Empowering the Next Generation of Global Leaders
        </p>
        <p
          data-aos="fade-up"
          data-aos-delay="600"
          className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto font-chakra-petch"
        >
          Join us in April 2025 for an extraordinary journey of diplomacy,
          debate, and discovery.
        </p>
      </div>
    </section>
  );
}
