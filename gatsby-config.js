const config = require('./src/data/config');

module.exports = {
  siteMetadata: {
    title: config.defaultTitle,
    description: config.defaultDescription,
    author: config.author,
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-transformer-yaml',
    {
    resolve: 'gatsby-source-filesystem',
    options: {
      path: `${__dirname}/content`,
      name: 'posts',
    },
  },
  {
resolve: 'gatsby-source-filesystem',
options: {
  name: 'images',
  path: `${__dirname}/src/assets/`,
},
},
'gatsby-transformer-sharp',
  'gatsby-plugin-sharp',
  {
    resolve: 'gatsby-transformer-remark',
    options: {
      plugins: [
        {
          resolve: 'gatsby-remark-images',
          options: {
            maxWidth: 1080,
            linkImagesToOriginal: true,
          },
        },
        {
          resolve: 'gatsby-remark-responsive-iframe',
          options: {
            wrapperStyle: 'margin-bottom: 1.0725rem',
          },
        },
        'gatsby-remark-prismjs',
        'gatsby-remark-copy-linked-files',
        'gatsby-remark-smartypants',
        'gatsby-remark-autolink-headers',
      ],
    },
  },
    {
      resolve: 'gatsby-plugin-nprogress',
      options: {
        color: config.themeColor,
        showSpinner: true,
      },
    },
    {
      resolve: 'gatsby-plugin-favicon',
      options: {
        logo: './static/favicon/favicon-512.png',
        injectHTML: true,
        icons: {
          android: true,
          appleIcon: true,
          appleStartup: true,
          coast: false,
          favicons: true,
          firefox: true,
          twitter: false,
          yandex: false,
          windows: false,
        },
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: config.defaultTitle,
        short_name: 'Portfolio',
        start_url: '/',
        background_color: config.backgroundColor,
        theme_color: config.themeColor,
        display: 'standalone',
        icon: './static/favicon/favicon-512.png',
      },
    },
    'gatsby-plugin-offline',
  ],
};
