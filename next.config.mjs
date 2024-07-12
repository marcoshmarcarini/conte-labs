/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'platform-lookaside.fbsbx.com'
      },
      {
        protocol: 'https',
        hostname: 'scontent.fvix18-1.fna.fbcdn.net'
      }
    ]
  }
};

export default nextConfig;
