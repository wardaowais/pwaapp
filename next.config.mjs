// next.config.mjs

import withPWA from 'next-pwa';

const isDev = process.env.NODE_ENV === 'development';

const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  // Add more Next.js config here if needed
};

// Wrap and export using withPWA only if NOT in dev
export default withPWA({
  dest: 'public',
  disable: isDev, // This disables service worker in dev mode
  register: true,
  skipWaiting: true,
})(nextConfig);
