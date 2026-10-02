import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    // Autorise les affiches hébergées sur Wikimedia Commons
    remotePatterns: [{ protocol: 'https', hostname: 'upload.wikimedia.org' }],
  },
};

export default nextConfig;