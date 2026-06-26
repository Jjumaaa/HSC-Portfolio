"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col md:flex-row items-center justify-center gap-10 px-6 md:px-16 pt-20 py-20 bg-white">
      
      {/* Text content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center md:text-left max-w-xl"
      >
        <p className="text-kenya-gold font-semibold tracking-widest uppercase text-sm mb-3">
          Head of State's Commendation Recipient
        </p>

        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight mb-4">
          [Full Name]
        </h1>

        <p className="text-lg text-gray-600 mb-8">
          A profile of leadership, integrity, and national service.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <a
            href="#hsc-recognition"
            className="bg-kenya-green text-white px-6 py-3 rounded-md font-medium hover:opacity-90 transition-opacity"
          >
            View Commendation
          </a>
          <a
            href="#contact"
            className="border border-gray-900 text-gray-900 px-6 py-3 rounded-md font-medium hover:bg-gray-900 hover:text-white transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </motion.div>

      {/* Profile image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative w-[280px] h-[350px] md:w-[320px] md:h-[400px] rounded-lg overflow-hidden shadow-xl"
      >
        <Image
          src="https://via.placeholder.com/800x1000"
          alt="Portrait of [Full Name], Head of State's Commendation recipient"
          fill
          className="object-cover"
          priority
        />
      </motion.div>
    </section>
  );
}