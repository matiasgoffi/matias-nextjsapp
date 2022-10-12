/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ['en', 'es'],
    defaultLocale: "en",
    domains: [
      {
        domain: 'example.com',
        defaultLocale: 'en-US',
      },
      {
        domain: 'example.ar',
        defaultLocale: 'es',
      },
      {
        // an optional http field can also be used to test
        // locale domains locally with http instead of https
        http: true,
      },
    ],
  
  
  },

}



module.exports = nextConfig 

