/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/cryptoCurrency",
        destination: "/",
        permanent: false,
      },
      {
        source: "/exchanges",
        destination: "/",
        permanent: false,
      },
      {
        source: "/news",
        destination: "/",
        permanent: false,
      },
    ];
  },
};
