// app/components/CommitteesSection.tsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const committees = [
  {
    id: "1",
    name: "UNSC",
    description:
      "The United Nations Security Council, responsible for maintaining international peace and security.",
    imageUrl: "/unsc.svg",
  },
  {
    id: "2",
    name: "UNHRC",
    description:
      "The United Nations Human Rights Council, promoting and protecting human rights worldwide.",
    imageUrl: "/unhrc.svg",
  },
  {
    id: "3",
    name: "ECOSOC",
    description:
      "The Economic and Social Council, coordinating economic, social, and related work of UN agencies.",
    imageUrl: "/ecosoc.svg",
  },
  {
    id: "4",
    name: "DISEC",
    description:
      "The Disarmament and International Security Committee, dealing with global security and disarmament.",
    imageUrl: "/disec.svg",
  },
  {
    id: "5",
    name: "WHO",
    description:
      "The World Health Organization, directing and coordinating international health within the UN system.",
    imageUrl: "/who.svg",
  },
];

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

export default function CommitteesSection() {
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
            Committees
          </h2>
          <div className="relative inline-block">
            <div className="absolute -bottom-2 left-0 w-full h-1 bg-[#ae73ff] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
            <p className="text-lg text-gray-300 font-chakra-petch">
              Explore Our Committees
            </p>
          </div>
        </motion.div>

        {/* Committees Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-12"
        >
          {committees.map((committee, index) => (
            <motion.div
              key={committee.id}
              variants={index % 2 === 0 ? leftCardVariants : rightCardVariants} // Alternate left and right
              className="group bg-black/80 p-8 rounded-2xl border border-[#8831ff]/30 hover:border-[#ae73ff]/50 transition-all duration-300"
            >
              {/* Committee Image */}
              <div className="relative w-full aspect-square mb-6 overflow-hidden rounded-lg">
                <Image
                  src={committee.imageUrl}
                  alt={committee.name}
                  fill
                  className="rounded-lg object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Committee Name */}
              <h3 className="text-2xl text-white mb-4 font-bold font-rajdhani tracking-wide">
                {committee.name}
              </h3>

              {/* Committee Description */}
              <p className="text-gray-200 leading-relaxed font-chakra-petch text-sm">
                {committee.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
