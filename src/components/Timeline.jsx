"use client";

import { motion } from "framer-motion";
import { timelineEvents } from "@/data/timeline";

export default function Timeline() {
  return (
    <section id="timeline" className="bg-white py-24 px-6 md:px-16">
      <div className="max-w-3xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-kenya-green font-semibold tracking-widest uppercase text-sm mb-4 text-center"
        >
          Journey
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl md:text-4xl font-bold text-gray-900 mb-16 text-center"
        >
          Career Timeline
        </motion.h2>

        <div className="relative border-l-2 border-gray-200 ml-3 md:ml-0">
          {timelineEvents.map((event, index) => (
            <motion.div
              key={event.year}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative pl-8 pb-12 last:pb-0"
            >
              {/* Dot marker */}
              <span className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-kenya-green border-4 border-white shadow" />

              <p className="text-sm font-semibold text-kenya-gold mb-1">
                {event.year}
              </p>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {event.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {event.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}