"use client";

import { MotionConfig } from "framer-motion";

// Honours the visitor's "reduce motion" OS setting for every animation.
export default function MotionProvider({ children }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
