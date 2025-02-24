import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compiler: {
    styledComponents: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '/hiwtbwecx/image/upload/c_limit,h_1024,q_auto,w_1024/v1/store/**',
      },
    ],
  },
};

export default nextConfig;
