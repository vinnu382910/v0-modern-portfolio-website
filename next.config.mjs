/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: [
      'res.cloudinary.com',
      'media-content.ccbp.in',
      'img.icons8.com',
      'nxtwave-website-media-files.s3.ap-south-1.amazonaws.com'
    ],
  },
}

export default nextConfig
