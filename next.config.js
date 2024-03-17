/** @type {import('next').NextConfig} */
require('dotenv').config()
const webpack = require('webpack')

const nextConfig = {
  images: {
    domains: [
      "primefaces.org",
      
    ],
    remotePatterns: [
      {
        protocol: 'http',
        hostname: '**.sujit.info',
        port: '',
        pathname: '/images/**',
      },
      {
        protocol: 'https',
        hostname: '**.sujit.in',
        port: '',
        pathname: '/images/**',
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: '/api/:path',
        destination: '/',
      },
    ]
  },
  webpack: (config) => {
    config.plugins.push(
      new webpack.EnvironmentPlugin(process.env)
    )
    return config
  }
}
module.exports = nextConfig


