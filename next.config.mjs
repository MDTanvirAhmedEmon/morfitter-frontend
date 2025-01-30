/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["10.0.60.166"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "10.0.60.166",
        port: "5000",
        pathname: "**",
      },
    ],
  },
};

export default nextConfig;
