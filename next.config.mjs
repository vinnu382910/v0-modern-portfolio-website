/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: false,
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'res.cloudinary.com' },
      { protocol: 'https', hostname: 'media-content.ccbp.in' },
      { protocol: 'https', hostname: 'img.icons8.com' },
      { protocol: 'https', hostname: 'nxtwave-website-media-files.s3.ap-south-1.amazonaws.com' },
      { protocol: 'https', hostname: 'blob.v0.app' },
      { protocol: 'https', hostname: 'blobs.vusercontent.net' },
    ],
  },
  experimental: {
    esmExternals: 'loose',
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
}

export default nextConfig
