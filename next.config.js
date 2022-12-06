/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["ssl.nexon.com", "fo4.dn.nexoncdn.co.kr"],
  },
  i18n: {
    locales: ["kr"],
    defaultLocale: "kr",
  },
};

module.exports = nextConfig;
