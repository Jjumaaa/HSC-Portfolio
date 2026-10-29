"use client";

import { motion } from "framer-motion";

// Fades content up into view once, as it scrolls onto the screen.
export default function Reveal({ as = "div", delay = 0, y = 20, className, children, ...rest }) {
  const Component = motion[as];
  return (
    <Component
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className={className}
      {...rest}
    >
      {children}
    </Component>
  );
}
