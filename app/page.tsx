'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image'
import Link from 'next/link'
import AOS from 'aos';
import 'aos/dist/aos.css';
import CursorWeb from './components/CursorWeb';

// Add static committee data
const committees = [
  {
    id: "1",
    name: "UNSC",
    description: "The United Nations Security Council, responsible for maintaining international peace and security.",
    imageUrl: "/unsc.jpg"
  },
  {
    id: "2",
    name: "UNHRC",
    description: "The United Nations Human Rights Council, promoting and protecting human rights worldwide.",
    imageUrl: "/unhrc.jpg"
  },
  {
    id: "3",
    name: "ECOSOC",
    description: "The Economic and Social Council, coordinating economic, social, and related work of UN agencies.",
    imageUrl: "/ecosoc.jpg"
  },
  {
    id: "4",
    name: "DISEC",
    description: "The Disarmament and International Security Committee, dealing with global security and disarmament.",
    imageUrl: "/disec.jpg"
  },
  {
    id: "5",
    name: "WHO",
    description: "The World Health Organization, directing and coordinating international health within the UN system.",
    imageUrl: "/who.jpg"
  }
];

export default function Home() {
  const [isClient, setIsClient] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsClient(true);
    
    // Initialize AOS
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out'
    });

    // Add a slight delay to ensure smooth transition
    const timer = setTimeout(() => {
      setIsLoading(false);
      // Refresh AOS after content is visible
      setTimeout(() => {
        AOS.refresh();
      }, 100);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  // Pre-calculate particle positions
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    top: `${(i * 5) % 100}%`,
    left: `${(i * 7) % 100}%`,
    delay: `${(i * 0.25) % 5}s`
  }));

  // Pre-calculate hextech circles
  const hextechCircles = Array.from({ length: 6 }, (_, i) => ({
    id: i,
    top: `${Math.round(Math.sin((i * Math.PI) / 3) * 100)}px`,
    left: `${Math.round(Math.cos((i * Math.PI) / 3) * 100)}px`
  }));

  return (
    <div className="bg-[#0A0A0B]">
      <CursorWeb />
      {/* Preloader */}
      <div 
        className={`fixed inset-0 flex items-center justify-center bg-black z-50 transition-all duration-1000 ${
          isLoading ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="relative">
          <h1 className="text-7xl md:text-9xl font-bold tracking-[0.2em] font-rajdhani select-none">
            <span className="bg-gradient-to-r from-[#8831ff] via-[#ae73ff] to-[#bd8cff] text-transparent bg-clip-text animate-pulse">
              ARCANE
            </span>
          </h1>
          {/* Hextech-inspired animated circles */}
          <div className="absolute -inset-8 opacity-75">
            <div className="absolute inset-0 rotate-45 animate-spin-slow">
              {isClient && hextechCircles.map(circle => (
                <div
                  key={circle.id}
                  className="absolute w-4 h-4 border border-[#ae73ff] rounded-full"
                  style={{
                    top: circle.top,
                    left: circle.left
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div 
        className={`min-h-screen transition-opacity duration-1000 select-none ${
          isLoading ? 'opacity-0' : 'opacity-100'
        }`}
      >
        <main className="relative">
          {/* Animated Hextech particles background */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute inset-0 opacity-20">
              {isClient && particles.map(particle => (
                <div
                  key={particle.id}
                  className="absolute w-2 h-2 bg-[#ae73ff] rounded-full animate-float"
                  style={{
                    top: particle.top,
                    left: particle.left,
                    animationDelay: particle.delay
                  }}
                />
              ))}
            </div>
          </div>

          {/* Hero Section */}
          <section className="relative h-screen flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 z-0">
              <Image
                src="/hero-bg.jpg"
                alt="Arcane Background"
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
                  ARCANE
                </span>
              </h1>
              <p 
                data-aos="fade-up" 
                data-aos-delay="400"
                className="text-xl md:text-2xl text-[#ae73ff] max-w-2xl mx-auto mb-8 leading-relaxed font-chakra-petch"
              >
                Welcome to the world of Piltover and Zaun, where magic, science, and survival collide.
              </p>
              <Link 
                href="/watch"
                data-aos="fade-up"
                data-aos-delay="600"
                className="group relative inline-flex items-center px-8 py-3 overflow-hidden"
              >
                <span className="absolute inset-0 border-2 border-[#ae73ff] rounded-lg" />
                <span className="absolute inset-0 bg-[#ae73ff] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-200" />
                <span className="relative text-[#ae73ff] group-hover:text-black text-lg font-semibold transition-colors duration-200 ease-in-out font-chakra-petch">
                  Watch Now
                </span>
                <div className="absolute -inset-1 opacity-70 group-hover:opacity-100 transition-opacity duration-200">
                  <div className="absolute inset-0 rotate-45">
                    {[...Array(4)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute w-2 h-2 border border-[#ae73ff] rounded-full"
                        style={{
                          top: `${Math.sin((i * Math.PI) / 2) * 30}px`,
                          left: `${Math.cos((i * Math.PI) / 2) * 30}px`,
                        }}
                      />
                    ))}
                  </div>
                </div>
              </Link>
            </div>
          </section>

          {/* Committees Section */}
          <section className="py-20 px-4 relative">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#8831ff]/5 to-transparent" />
            <h2 
              data-aos="fade-down"
              className="text-4xl text-center text-[#bd8cff] mb-12 relative inline-block w-full font-rajdhani tracking-wider"
            >
              <span className="relative z-10">Committees</span>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-1 bg-[#ae73ff]" />
            </h2>
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
              {committees.map((committee) => (
                <div 
                  key={committee.id} 
                  data-aos="fade-up"
                  data-aos-delay={200}
                  className="group bg-black/80 p-6 rounded-lg transform hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-[#bd8cff]/20 border border-[#8831ff]/30"
                >
                  <div className="relative w-full aspect-square mb-4 overflow-hidden rounded-lg">
                    <Image
                      src={committee.imageUrl}
                      alt={committee.name}
                      fill
                      className="rounded-lg object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <h3 className="text-2xl text-white mb-2 font-bold font-rajdhani tracking-wide">
                    {committee.name}
                  </h3>
                  <p className="text-gray-200 leading-relaxed font-chakra-petch text-sm">
                    {committee.description}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}
