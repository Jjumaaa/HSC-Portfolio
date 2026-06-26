"use client";

import { motion } from "framer-motion";
import { achievements } from "@/data/achievements";

export default function Achievements() {
  return (
    <section
      id="achievements"
      className="bg-gray-50 py-24 px-6 md:px-16"
    >
      <div className="max-w-6xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-kenya-green font-semibold tracking-widest uppercase text-sm mb-4 text-center"
        >
          Impact
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl md:text-4xl font-bold text-gray-900 mb-16 text-center"
        >
          Achievements
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {achievements.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <p className="text-4xl font-bold text-kenya-green mb-1">
                {item.stat}
              </p>
              <p className="text-sm text-gray-500 mb-6">{item.statLabel}</p>

              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}