import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from "gatsby-image"



const Gallery = () => {  
    
    const data = useStaticQuery(graphql`
  query {
  allContentfulArtwork (sort: {fields: [datePublished], order:DESC}) {
    edges {
      node {
        previewImage {
        	fixed(width: 800) {
            ...GatsbyContentfulFixed
          }
        }
        title
      }
    }
  }
}
`)

    return (
        
        <Img
            fixed={data.allContentfulArtwork.edges[0].node.previewImage.fixed}
            key={data.allContentfulArtwork.edges[0].node.previewImage.fixed.src} 
            alt={data.allContentfulArtwork.edges[0].node.title}
        />
        
        //<p>Test</p>
    )
}

export default Gallery