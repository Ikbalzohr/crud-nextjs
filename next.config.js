/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    MONGO_URI: "https://backend-nodejs-lilac.vercel.app/users",
  },
};

module.exports = nextConfig;
