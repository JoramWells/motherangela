import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: `${process.env.NEXT_PUBLIC_PROTOCOL}` as 'http',
        hostname: `${process.env.NEXT_PUBLIC_HOSTNAME}`,
        port: `${process.env.NEXT_PUBLIC_PORT}`,
        pathname: '**',
      },
    ],
  },
};

export default nextConfig;
