"use client";

import { useEffect } from "react";
import ContextMenuWrapper from "../components/CustomContextMenu";
import AOS from "aos";
import "aos/dist/aos.css";
import CursorWeb from "../components/CursorWeb";
import Navigation from "../components/Navigation";

export default function Contact() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-out",
    });

    // Refresh AOS after content is visible
    setTimeout(() => {
      AOS.refresh();
    }, 100);
  }, []);

  return (
    <div className="bg-[#0A0A0B] min-h-screen">
      <Navigation />
      <CursorWeb />
      <ContextMenuWrapper />

      <main className="relative pt-20">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-[url('/hextech-pattern.png')] opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#8831ff]/5 to-transparent" />

        {/* Contact Section */}
        <section className="relative py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h1
              data-aos="fade-down"
              className="text-4xl md:text-6xl text-center text-[#bd8cff] mb-12 font-rajdhani tracking-wider"
            >
              <span className="relative z-10">Contact Us</span>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-1 bg-[#ae73ff]" />
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16">
              {/* Contact Form */}
              <div
                data-aos="fade-right"
                className="bg-black/80 p-8 rounded-lg border border-[#8831ff]/30"
              >
                <h2 className="text-2xl text-white mb-6 font-rajdhani">
                  Send us a Message
                </h2>
                <form className="space-y-6">
                  <div>
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full bg-[#1a1a1a] border border-[#8831ff]/30 rounded-lg p-3 text-white focus:outline-none focus:border-[#ae73ff] transition-colors font-chakra-petch"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Your Email"
                      className="w-full bg-[#1a1a1a] border border-[#8831ff]/30 rounded-lg p-3 text-white focus:outline-none focus:border-[#ae73ff] transition-colors font-chakra-petch"
                    />
                  </div>
                  <div>
                    <textarea
                      placeholder="Your Message"
                      rows={5}
                      className="w-full bg-[#1a1a1a] border border-[#8831ff]/30 rounded-lg p-3 text-white focus:outline-none focus:border-[#ae73ff] transition-colors font-chakra-petch"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-[#8831ff] to-[#bd8cff] text-white py-3 px-6 rounded-lg font-bold hover:opacity-90 transition-opacity font-rajdhani tracking-wider"
                  >
                    Send Message
                  </button>
                </form>
              </div>

              {/* Contact Information */}
              <div data-aos="fade-left" className="space-y-8">
                <div className="bg-black/80 p-8 rounded-lg border border-[#8831ff]/30">
                  <h2 className="text-2xl text-white mb-6 font-rajdhani">
                    Contact Information
                  </h2>
                  <div className="space-y-4 font-chakra-petch">
                    <div className="flex items-center space-x-4">
                      <div className="text-[#ae73ff]">
                        <svg
                          className="w-6 h-6"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>
                      </div>
                      <span className="text-gray-300">contact@richmun.com</span>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="text-[#ae73ff]">
                        <svg
                          className="w-6 h-6"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                          />
                        </svg>
                      </div>
                      <span className="text-gray-300">+1 (555) 123-4567</span>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="text-[#ae73ff]">
                        <svg
                          className="w-6 h-6"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                      </div>
                      <span className="text-gray-300">
                        123 Conference Drive, Richmond, VA 23219
                      </span>
                    </div>
                  </div>
                </div>

                {/* Social Media Links */}
                <div className="bg-black/80 p-8 rounded-lg border border-[#8831ff]/30">
                  <h2 className="text-2xl text-white mb-6 font-rajdhani">
                    Follow Us
                  </h2>
                  <div className="flex space-x-4">
                    <a
                      href="#"
                      className="text-[#ae73ff] hover:text-[#bd8cff] transition-colors"
                    >
                      Twitter
                    </a>
                    <a
                      href="#"
                      className="text-[#ae73ff] hover:text-[#bd8cff] transition-colors"
                    >
                      Facebook
                    </a>
                    <a
                      href="#"
                      className="text-[#ae73ff] hover:text-[#bd8cff] transition-colors"
                    >
                      Instagram
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
