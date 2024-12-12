/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '1337',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'sole-moral-snipe.ngrok-free.com',
        // port: '1337',
        pathname: '/**',
      },
    ],
  }
};

export default nextConfig;
