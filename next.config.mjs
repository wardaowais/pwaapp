// next.config.mjs
import withPWA from 'next-pwa';

const isDev = process.env.NODE_ENV === 'development';

const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
};

export default withPWA({
  dest: 'public',
  disable: isDev, // Only disable in development
  register: true,
  skipWaiting: true,
})(nextConfig);
