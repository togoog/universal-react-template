module.exports = {
  title: 'Universal React Template',
  description: 'Universal React Boilerplate',
  head: {
    meta: [
      { charset: 'utf-8' },
      { httpEquiv: 'X-UA-Compatible', content: 'IE=edge' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
      {
        name: 'description',
        content: 'Webpack 4 + React + Emotion.'
      },
      { name: 'theme-color', content: '#ffffff' }
    ],
    link: [
      { rel: 'apple-touch-icon', href: 'apple-icon.png' },
      {
        rel: 'icon',
        type: 'image/png',
        href: 'favicon-16x16.png',
        sizes: '32x32'
      },
      {
        rel: 'icon',
        type: 'image/png',
        href: 'favicon-32x32.png',
        sizes: '16x16'
      },
      { rel: 'manifest', href: 'manifest.json' },
      { rel: 'mask-icon', href: 'msapplication-TileColor', content: '#000000' },
      {
        rel: 'mask-icon',
        href: 'msapplication-TileImage',
        content: 'ms-icon-144x144.png'
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Roboto'
      }
    ],
    htmlAttributes: {
      lang: 'en'
    }
  }
}
