/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
const path = require('path')

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
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // replace "UA-XXXXXXXXX-X" with your own Tracking ID
        trackingId: "UA-157967254-1",
      },
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
    {
      resolve: `gatsby-source-filesystem`,
      options:
      {
        name: `images`,
        path: path.join(__dirname, `src`, `components`, `images`),
      },
    },
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
    },
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                url
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allContentfulBlogPost } }) => {
              return allContentfulBlogPost.edges.map(edge => {
                return Object.assign({}, edge.node, {
                  date: edge.node.publishedDate,
                  url: site.siteMetadata.url + "/blog/" + edge.node.slug,
                  guid: site.siteMetadata.url + "/blog/" + edge.node.slug,
                })
              })
            },
            query: `
              {
                allContentfulBlogPost (sort: {order: DESC, fields: publishedDate}) {
                  edges {
                    node {
                      title
                      publishedDate(formatString: "MMMM DD, YYYY")
                      slug
                      childContentfulBlogPostBodyRichTextNode {
                        json
                        }
                      }
                    }
                  }
                }
              `,
            output: "/rss.xml",
            title: "Josh Katzenmeyer's Blog RSS Feed",
            // optional configuration to insert feed reference in pages:
            // if `string` is used, it will be used to create RegExp and then test if pathname of
            // current page satisfied this regular expression;
            // if not provided or `undefined`, all pages will have feed reference inserted
            match: "^/blog/",
            // optional configuration to specify external rss feed, such as feedburner
            link: "https://feeds.feedburner.com/gatsby/blog",
          },
        ],
      },
    },
    `gatsby-plugin-sitemap`,
  ],

  siteMetadata: {
    title: "Josh Katzenmeyer",
    description:
      "Creative technologist, digital artist, and musician: offers web development services, UI/UX design, limited edition generative artworks, and more.",
    url: "https://www.joshkatzenmeyer.com", // No trailing slash allowed!
    image: "/static/favicon.ico", // Path to your image you placed in the 'static' folder
    twitterUsername: "@luxpris",
  },
}
