import React from "react"
import Layout from '../components/layout'
import SEO from '../components/SEO'

import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import { SRLWrapper } from "simple-react-lightbox";

const options = {
    settings: {
        autoplaySpeed: 3000,
        boxShadow: 'none',
        disableKeyboardControls: false,
        disablePanzoom: false,
        disableWheelControls: false,
        hideControlsAfter: 3000,
        lightboxTransitionSpeed: 0.3,
        lightboxTransitionTimingFunction: 'linear',
        overlayColor: 'rgba(30, 30, 30, 0.9)',
        slideAnimationType: 'fade',
        slideSpringValues: [300, 50],
        slideTransitionSpeed: 0.6,
        slideTransitionTimingFunction: 'linear',
        usingPreact: false
    }
}

export const ArtworkGallery = graphql`
fragment ArtworkGallery on ContentfulArtwork {
  previewImage {
    fluid {
      ...GatsbyContentfulFluid
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
            <SEO />
        </Layout>
    )
}






export default ArtPage