module.exports = {
    async redirects() {
      return [
        {
          source: '/solutions',
          destination: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
          permanent: false,
        },
        {
            source: '/subscribe',
            destination: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
            permanent: false,
        },
      ]
    },
  }