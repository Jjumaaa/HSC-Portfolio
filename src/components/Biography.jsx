"use client";

import { motion } from "framer-motion";

export default function Biography() {
  return (
    <section
      id="biography"
      className="bg-white py-24 px-6 md:px-16"
    >
      <div className="max-w-4xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-green-700 font-semibold tracking-widest uppercase text-sm mb-4 text-center"
        >
          Biography
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center"
        >
          A Life of Service
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Career story */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Career Story
            </h3>
            <p className="text-gray-600 leading-relaxed">
              [Career narrative goes here — early background, key roles held,
              turning points, and the path that led to national recognition.
              This should read as a coherent story, not a list of job titles.]
            </p>
          </motion.div>

          {/* Values & philosophy */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Leadership Philosophy
            </h3>
            <p className="text-gray-600 leading-relaxed">
              [Core values and leadership approach — e.g. integrity-first
              decision making, servant leadership, community-centered impact.
              This section should reflect personal voice and conviction.]
            </p>
          </motion.div>
        </div>

        {/* Values list */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mt-14"
        >
          {["Integrity", "Leadership", "Public Service", "Excellence"].map(
            (value) => (
              <span
                key={value}
                className="bg-gray-100 text-gray-800 px-5 py-2 rounded-full text-sm font-medium border border-gray-200"
              >
                {value}
              </span>
            )
          )}
        </motion.div>
      </div>
    </section>
  );
}