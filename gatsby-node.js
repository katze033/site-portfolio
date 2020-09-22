const path = require('path')

module.exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const artTemplate = path.resolve('./src/templates/art.js')
    const res = await graphql(`
      query {
        allContentfulArtwork {
          edges {
            node {
              slug
            }
          }
        }
      }
    `)

    res.data.allContentfulArtwork.edges.forEach((edge) => {
        createPage({
          component: artTemplate,
          path: `/art/${edge.node.slug}`,
          context: {
            slug: edge.node.slug,
          }
        })
      }
    
      )
    }