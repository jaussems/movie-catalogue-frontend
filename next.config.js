/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: process.env.HOST_NAME,
        port: '',
        pathname: process.env.PATH_NAME,
      },
    ],
  },
}

module.exports = nextConfig
