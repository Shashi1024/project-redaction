import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "2960-34-83-30-202.ngrok-free.app",
        port: "", 
        pathname: "/output/**", 
      },
      {
        protocol:"http",
        hostname: "127.0.0.1",
        port: "5000", 
        pathname: "/static/output/**", 
      },
    ],
  },
};

export default nextConfig;
