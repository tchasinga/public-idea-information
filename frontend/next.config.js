/** @type {import('next').NextConfig} */
const nextConfig = {
    distDir: 'build', // Change 'build' to your preferred directory name
  reactStrictMode: true, // Enable React strict mode
  poweredByHeader: false, // Disable the X-Powered-By header for security reasons
  images: {
    domains: ['imgs.search.brave.com'],
  },
  }
  
  module.exports = nextConfig