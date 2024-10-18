/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    domains: ['cdn.builder.io'],
  },
  experimental: {
    serverActions: true,
  },
};

module.exports = nextConfig;
