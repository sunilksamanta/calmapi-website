module.exports = {
  siteMetadata: {
    title: 'CALM API - Keep Calm and REST',
    author: 'Sunil Kr. Samanta',
    description: 'A PRODUCTION READY REST API GENERATOR USING NODEJS & MONGODB',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
  ],
}
