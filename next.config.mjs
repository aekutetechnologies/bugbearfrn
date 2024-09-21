/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: '127.0.0.1',
        port: '8000', // Include the port if your backend runs on a specific port
        pathname: '/media/profile_pics/**', // Adjust the path based on where your images are served
      },
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '8000', // Adjust or remove port if not needed
        pathname: '/media/profile_pics/**',
      },
    ],
  },
};

export default nextConfig;
