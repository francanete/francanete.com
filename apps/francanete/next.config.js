/** @type {import('next').NextConfig} */
const nextConfig = {
  siteUrl: process.env.SITE_URL || "https://francanete.com",
  reactStrictMode: true,
};

module.exports = nextConfig;
