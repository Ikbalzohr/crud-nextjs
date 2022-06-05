/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    MONGO_URI: "https://frontend-nextjs-v2.herokuapp.com/",
  },
};

module.exports = nextConfig;
