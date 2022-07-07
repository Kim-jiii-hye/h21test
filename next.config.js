/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
}

// module.exports = nextConfig
module.exports = {
  images: {
    domains: ['img.hani.co.kr'],
  },
  experimental: {
    images: {
        layoutRaw: true,
        allowFutureImage: true,
    }
  },
  nextConfig
}
