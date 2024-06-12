// next.config.mjs
import withPWA from 'next-pwa';

const nextConfig = {
  reactStrictMode: true,
  // other Next.js config options here
};

export default withPWA({
  dest: 'public',
  disable: process.env.NODE_ENV === 'development', // disable PWA in development
  register: true,
  skipWaiting: true,
  buildExcludes: [/middleware-manifest.json$/], // avoid middleware manifest in service worker
})(nextConfig);
