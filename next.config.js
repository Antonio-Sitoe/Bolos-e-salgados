/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
    images: {
    domains: ['media.graphassets.com', 'res.cloudinary.com'],
  },
}

module.exports = nextConfig
