// app/components/Footer.tsx
"use client";

import { motion } from "framer-motion";

// Animation variants for Framer Motion
const titleVariants = {
  initial: { opacity: 0.8, y: 0 },
  animate: {
    opacity: 1,
    y: -2,
    transition: {
      duration: 1,
      repeat: Infinity,
      repeatType: "reverse" as const,
    }, // Fix: Use 'as const' for repeatType
  },
};

const separatorVariants = {
  initial: { scaleX: 0.8 },
  animate: {
    scaleX: 1,
    transition: {
      duration: 1,
      repeat: Infinity,
      repeatType: "reverse" as const,
    }, // Fix: Use 'as const' for repeatType
  },
};

export default function Footer() {
  return (
    <footer className="bg-black/90 border-t border-[#8831ff]/30 py-12 mt-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <motion.h3
              initial="initial"
              animate="animate"
              variants={titleVariants}
              className="text-xl text-[#bd8cff] font-rajdhani mb-4"
            >
              About RichMUN
            </motion.h3>
            <p className="text-gray-300 font-chakra-petch text-sm">
              RichMUN is a premier Model United Nations conference for juniors,
              organized by Richmond College, Galle, Sri Lanka. We aim to empower
              the next generation of global leaders through diplomacy, debate,
              and collaboration.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <motion.h3
              initial="initial"
              animate="animate"
              variants={titleVariants}
              className="text-xl text-[#bd8cff] font-rajdhani mb-4"
            >
              Quick Links
            </motion.h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#about"
                  className="text-gray-300 hover:text-[#ae73ff] font-chakra-petch text-sm"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#committees"
                  className="text-gray-300 hover:text-[#ae73ff] font-chakra-petch text-sm"
                >
                  Committees
                </a>
              </li>
              <li>
                <a
                  href="#impact"
                  className="text-gray-300 hover:text-[#ae73ff] font-chakra-petch text-sm"
                >
                  Our Impact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <motion.h3
              initial="initial"
              animate="animate"
              variants={titleVariants}
              className="text-xl text-[#bd8cff] font-rajdhani mb-4"
            >
              Contact Us
            </motion.h3>
            <p className="text-gray-300 font-chakra-petch text-sm">
              Richmond College, Galle, Sri Lanka
            </p>
            <p className="text-gray-300 font-chakra-petch text-sm">
              Email: info@richmun.org
            </p>
            <p className="text-gray-300 font-chakra-petch text-sm">
              Phone: +94 91 223 4567
            </p>
          </div>
        </div>

        {/* Copyright */}
        <motion.div
          initial="initial"
          animate="animate"
          variants={separatorVariants}
          className="mt-8 border-t border-[#8831ff]/30 pt-8 text-center"
        >
          <p className="text-gray-300 font-chakra-petch text-sm">
            © 2025 RichMUN. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
