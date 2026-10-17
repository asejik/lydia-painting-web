import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Role was renamed; keep previously shared links working
      {
        source: "/careers/social-media-communications-manager",
        destination: "/careers/social-media-assistant",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
