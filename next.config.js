/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Enable static export for GitHub Pages
  basePath: '',
  reactStrictMode: true,
  images: {
    unoptimized: true, // Required for static export
  },
};

module.exports = nextConfig;
