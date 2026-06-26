"use client";

import { motion } from "framer-motion";
import { FiFileText, FiDownload } from "react-icons/fi";
import { documents } from "@/data/documents";

export default function Documents() {
  return (
    <section id="documents" className="bg-white py-24 px-6 md:px-16">
      <div className="max-w-3xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-green-700 font-semibold tracking-widest uppercase text-sm mb-4 text-center"
        >
          Official Records
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl md:text-4xl font-bold text-gray-900 mb-16 text-center"
        >
          Documents & Certificates
        </motion.h2>

        <div className="flex flex-col gap-4">
          {documents.map((doc, index) => (
            <motion.a
              key={doc.id}
              href={doc.fileUrl}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="flex items-center justify-between gap-4 bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded-lg p-5 transition-colors focus:outline-none focus:ring-2 focus:ring-green-700"
            >
              <div className="flex items-center gap-4">
                <span className="flex items-center justify-center w-11 h-11 rounded-md bg-green-700 text-white flex-shrink-0">
                  <FiFileText size={20} aria-hidden="true" />
                </span>
                <div>
                  <p className="font-semibold text-gray-900">{doc.title}</p>
                  <p className="text-sm text-gray-500">
                    {doc.issuedBy} · {doc.year}
                  </p>
                </div>
              </div>

              <span className="text-gray-400 group-hover:text-gray-700">
                <FiDownload size={18} aria-hidden="true" />
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
