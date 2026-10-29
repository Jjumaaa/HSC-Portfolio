import path from "node:path";
import { fileURLToPath } from "node:url";

// Absolute path to this project folder. A stray package-lock.json in a parent
// folder (e.g. /home/juma) makes Next.js guess the wrong workspace root and
// print a warning; pinning the root here makes the choice explicit.
const projectRoot = path.dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: {
    root: projectRoot,
  },
  outputFileTracingRoot: projectRoot,
  images: {
    qualities: [75, 90],
  },
};

export default nextConfig;
