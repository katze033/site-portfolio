const path = require('path')
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
});

module.exports = {
  siteMetadata: {
    title: "Josh Katzenmeyer",
    titleTemplate: "Josh Katzenmeyer",
    description:
      "Minneapolis-based creative technologist offering limited edition generative artworks, commissions, and web development services.",
    url: "https://www.joshkatzenmeyer.com", // No trailing slash allowed!
    image: "/static/favicon.ico", // Path to your image you placed in the 'static' folder
    twitterUsername: "@luxpris",
  },
  
  plugins: [
    `gatsby-plugin-react-helmet`,
    
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    /*
    {
      resolve: `gatsby-source-filesystem`,
      options:
      {
        name: `images`,
        path: path.join(__dirname, `src`, `components`, `images`),
      },
    },
    */
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images-contentful`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 600,
            },
          },
        ],
      },
    }
    
  ],

  
}
