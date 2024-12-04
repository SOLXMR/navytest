/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
    domains: ['localhost']
  },
  trailingSlash: true,
  basePath: '',
  distDir: '.next'
}

module.exports = nextConfig; 