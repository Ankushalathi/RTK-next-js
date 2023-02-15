/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images:{
    domains:[
      'cdn.pixabay.com',
      'cdn1.smartprix.com',
      'www.holidify.com',
      'i.dummyjson.com'
    ]
  }
}

module.exports = nextConfig
