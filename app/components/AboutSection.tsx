// app/components/AboutSection.tsx
"use client";

import { motion } from "framer-motion";

// Animation variants for Framer Motion
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3, // Stagger animations for children
    },
  },
};

const leftCardVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
};

const rightCardVariants = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
};

export default function AboutSection() {
  return (
    <section className="py-32 px-4 relative">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#8831ff]/5 to-transparent" />

      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl text-[#bd8cff] font-rajdhani tracking-wider mb-4">
            About RichMUN
          </h2>
          <div className="relative inline-block">
            <div className="absolute -bottom-2 left-0 w-full h-1 bg-[#ae73ff] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
            <p className="text-lg text-gray-300 font-chakra-petch">
              Empowering the Leaders of Tomorrow
            </p>
          </div>
        </motion.div>

        {/* Content Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-16"
        >
          {/* Vision Card (Slides in from the left) */}
          <motion.div
            variants={leftCardVariants}
            className="bg-black/80 p-10 rounded-2xl border border-[#8831ff]/30 hover:border-[#ae73ff]/50 transition-all duration-300"
          >
            <h3 className="text-3xl text-white mb-6 font-rajdhani">
              Our Vision
            </h3>
            <p className="text-gray-300 font-chakra-petch leading-relaxed">
              RichMUN stands as a beacon for young diplomats, fostering critical
              thinking and global awareness among the leaders of tomorrow. Our
              conference provides a platform where students can engage with
              contemporary international issues while developing essential
              skills in diplomacy and public speaking.
            </p>
          </motion.div>

          {/* Excellence Card (Slides in from the right) */}
          <motion.div
            variants={rightCardVariants}
            className="bg-black/80 p-10 rounded-2xl border border-[#8831ff]/30 hover:border-[#ae73ff]/50 transition-all duration-300"
          >
            <h3 className="text-3xl text-white mb-6 font-rajdhani">
              25 Years of Excellence
            </h3>
            <p className="text-gray-300 font-chakra-petch leading-relaxed">
              Since its inception, RichMUN has grown from a small regional
              conference to one of the most prestigious Model UN conferences in
              the region, attracting participants from across the globe and
              maintaining a tradition of excellence in debate and diplomacy.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
