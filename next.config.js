module.exports = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'fakestoreapi.com',
          port: '',
          pathname: '/img/**',
        },
        {
          protocol: 'https',
          hostname: 'cdn.dummyjson.com',
          port: '',
          pathname: '/products/images/**',
        }
      ],
    },
  }