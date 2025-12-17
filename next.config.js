const isProd = process.env.NODE_ENV === 'production';
const repo = 'facilite-hub';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  swcMinify: true,
  distDir: 'docs',

  basePath: isProd ? `/${repo}` : '',
  assetPrefix: isProd ? `/${repo}/` : '',

  images: {
    unoptimized: true,
  },

  compiler: {
    removeConsole: isProd,
  },
};

module.exports = nextConfig;
