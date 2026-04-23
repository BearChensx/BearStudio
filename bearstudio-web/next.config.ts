import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  // Smaller production deploy: copy `.next/static` + `public` into standalone on the server/CI (see deploy-web workflow).
  output: "standalone",
  turbopack: {
    root: path.resolve(process.cwd()),
  },
};

export default nextConfig;
