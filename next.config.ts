import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/ramppycomercialoficial",
  assetPrefix: "/ramppycomercialoficial/",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
