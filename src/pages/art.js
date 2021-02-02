import React from "react"
import Layout from '../components/layout'
import SEO from '../components/SEO'

import { useStaticQuery, graphql, Link } from "gatsby"

export const ArtworkGallery = graphql`
fragment ArtworkGallery on ContentfulArtwork {
  
  video {
    file {
      url
    }
  }
  title
  slug
}`

const ArtPage = () => {
  const data = useStaticQuery(graphql`
  query {
  allContentfulArtwork (sort: {fields: [datePublished], order:DESC}) {
    edges {
      node {
        ...ArtworkGallery
      }
    }
  }
}
`)



  return (
    <Layout>
      <div id="main-gallery-container">
        {data.allContentfulArtwork.edges.map((edge, i) => {
          return (
            <figure id="main-gallery-item">
              <Link to={`/art/${edge.node.slug}`}>
                <video /*autoPlay loop muted*/ playsInline preload="metadata"
                  id="main-gallery-image"

                  style={
                    { height: "100%", width:"100%", objectFit: "cover" }
                  }
                >
                  <source
                    src={edge.node.video.file.url}

                  />
                </video>
              </Link>
            </figure>
          )
        })}
        <figure></figure>
      </div>
      <SEO />
    </Layout>
  )
}






export default ArtPage


//eslint disable next line
{/*
            <SRLWrapper options={options}>
                <div id="main-gallery-container">
                    {data.allContentfulArtwork.edges.map((edge, i) => {
                        return (
                            <figure id="main-gallery-item">
                                <Img
                                    id="main-gallery-image"
                                    style={
                                        { height: "100%" }

                                    }
                                    fluid={edge.node.previewImage.fluid}
                                    key={edge.node.previewImage.fluid.src}
                                    alt={edge.node.title}
                                />
                            </figure>
                        )
                    }
                    )
                    }
                    <figure></figure>
                </div>
            </SRLWrapper>
                  */}