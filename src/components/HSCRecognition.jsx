"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function HSCRecognition() {
  return (
    <section
      id="hsc-recognition"
      className="bg-kenya-black text-white py-24 px-6 md:px-16"
    >
      <div className="max-w-5xl mx-auto text-center mb-16">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-kenya-gold font-semibold tracking-widest uppercase text-sm mb-4"
        >
          National Honor
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl md:text-5xl font-bold mb-6"
        >
          Head of State's Commendation
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-300 max-w-2xl mx-auto text-lg"
        >
          Awarded in recognition of distinguished service, integrity, and
          contribution to national development.
        </motion.p>
      </div>

      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Medal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex flex-col items-center"
        >
          <div className="relative w-[220px] h-[220px] md:w-[280px] md:h-[280px] rounded-full overflow-hidden border-4 border-kenya-gold shadow-2xl">
            <Image
              src="https://via.placeholder.com/600x600"
              alt="Head of State's Commendation medal"
              fill
              className="object-cover"
            />
          </div>
          <p className="mt-6 text-gray-400 text-sm">Awarded 2024</p>
        </motion.div>

        {/* Certificate */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="relative w-full aspect-[4/3] rounded-lg overflow-hidden shadow-2xl border border-gray-700"
        >
          <Image
            src="https://via.placeholder.com/1200x900"
            alt="Head of State's Commendation certificate"
            fill
            className="object-cover"
          />
        </motion.div>
      </div>

      {/* Citation */}
      <motion.blockquote
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto text-center mt-16 text-xl md:text-2xl font-light italic text-gray-200 border-l-4 border-kenya-gold pl-6 md:border-l-0 md:pl-0"
      >
        "For exceptional service to the nation and outstanding contribution
        to community development, demonstrating the highest standards of
        integrity and leadership."
      </motion.blockquote>
    </section>
  );
}