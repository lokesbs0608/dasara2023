require('dotenv').config();

const nextConfig = {
  reactStrictMode: true,
};

const env = {
  AUTH_TOKEN: process.env.AUTH_TOKEN,
};

module.exports = {
  ...nextConfig, // Include nextConfig properties
  env, // Include env properties
  images: {
    domains: ['res.cloudinary.com'],
  },
};
