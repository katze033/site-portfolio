/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  plugins: [
      {
        resolve: 'gatsby-plugin-web-font-loader',
        options: {
          google: {
            families: ['Lato', 'sans-serif']
          }
        }
      },
      `gatsby-plugin-react-helmet`,
      {
        resolve: `gatsby-source-contentful`,
        options: {
          spaceId: process.env.CONTENTFUL_SPACE_ID,
          // Learn about environment variables: https://gatsby.dev/env-vars
          accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        },
      },
    ],
    
    siteMetadata: {
      title: "Josh Katzenmeyer",
      description:
        "Freelance web developer, artist, and musician.",
      url: "https://www.joshkatzenmeyer.com", // No trailing slash allowed!
      image: "/images/snape.jpg", // Path to your image you placed in the 'static' folder
      twitterUsername: "@luxpris",
    },
}
