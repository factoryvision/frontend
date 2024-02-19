/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = () => {
  const rewrites = () => {
    return [
      {
        source: "/api/:path*",
        destination: "http://localhost:3000/:path*",
      },
    ];
  };
  return {
    rewrites,
  };
};
