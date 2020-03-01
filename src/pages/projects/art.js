import React from 'react';

import { Link, useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import Layout from '../../components/layout';

import categoriesStyles from '../../components/modules/projects-categories.module.css'


export const squareImage = graphql`
  fragment squareImage on File {
    childImageSharp {
      fluid(maxWidth: 270, maxHeight: 270) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`

const ProjectsArtPage = () => {
  const data = useStaticQuery(graphql`
  query {
    fantasyexits: file(relativePath: { eq: "art/fantasy_exits_2400.png" }) {
      ...squareImage
    }
    openchannel: file(relativePath: { eq: "art/open_channel_illuminated_2400.png" }) {
      ...squareImage
    }
    spirit: file(relativePath: { eq: "art/spirit_of_the_valley_2400.png" }) {
      ...squareImage
    }
    junkyard: file(relativePath: { eq: "art/a_junkyard_dream_2400.png" }) {
      ...squareImage
    }
    alongthecoast: file(relativePath: { eq: "art/along_the_coast_2400.png" }) {
      ...squareImage
    }
    perfectday: file(relativePath: { eq: "art/perfect_day_for_sailing_2400.png" }) {
      ...squareImage
    }
    portersgate: file(relativePath: { eq: "art/porters_gate_2400.png" }) {
      ...squareImage
    }
    replica8: file(relativePath: { eq: "art/replica-container-key8.png" }) {
      ...squareImage
    }
    replica7: file(relativePath: { eq: "art/replica-container-key7.png" }) {
      ...squareImage
    }
    replica6: file(relativePath: { eq: "art/replica-container-key6.png" }) {
      ...squareImage
    }
    replica5: file(relativePath: { eq: "art/replica-container-key5.png" }) {
      ...squareImage
    }
    replica4: file(relativePath: { eq: "art/replica-container-key4.png" }) {
      ...squareImage
    }
    replica3: file(relativePath: { eq: "art/replica-container-key3.png" }) {
      ...squareImage
    }
    replica2: file(relativePath: { eq: "art/replica-container-key2.png" }) {
      ...squareImage
    }
    replica1: file(relativePath: { eq: "art/replica-container-key1.png" }) {
      ...squareImage
    }
  }
`)
  return (
    <Layout>
      <div>
        <Link to="/projects">More projects</Link>
        <p>All of these images are coded with JavaScript. I sell physical prints of my work, along with limited edition crypto-collectible copies. Clicking an image below will bring you to its location in my online shop.</p>
        <div className={categoriesStyles.artFlex_container}>
        <div className={categoriesStyles.art_container}>
            <a href="https://shop.joshkatzenmeyer.com/collections/prints/products/fantasy-exit-8-x-8-print-matte-finish">
            <Img
              fluid={data.fantasyexits.childImageSharp.fluid}
              alt="Generative art"
            />
            </a>
          </div>
        <div className={categoriesStyles.art_container}>
            <a href="https://shop.joshkatzenmeyer.com/collections/prints/products/open-channel-illuminated-8-x-8-print-matte-finish">
            <Img
              fluid={data.openchannel.childImageSharp.fluid}
              alt="Generative art"
            />
            </a>
          </div>
        <div className={categoriesStyles.art_container}>
            <a href="https://shop.joshkatzenmeyer.com/collections/prints/products/spirit-of-the-valley-8-x-8-print-matte-finish">
            <Img
              fluid={data.spirit.childImageSharp.fluid}
              alt="Generative art"
            />
            </a>
          </div>
        <div className={categoriesStyles.art_container}>
            <a href="https://shop.joshkatzenmeyer.com/collections/prints/products/junkyard-dreams-8-x-8-print-matte-finish">
            <Img
              fluid={data.junkyard.childImageSharp.fluid}
              alt="Generative art"
            />
            </a>
          </div>
        <div className={categoriesStyles.art_container}>
            <a href="https://shop.joshkatzenmeyer.com/collections/prints/products/along-the-coast-8-x-8-print-matte-finish">
            <Img
              fluid={data.alongthecoast.childImageSharp.fluid}
              alt="Generative art"
            />
            </a>
          </div>
        <div className={categoriesStyles.art_container}>
            <a href="https://shop.joshkatzenmeyer.com/collections/prints/products/a-perfect-day-for-sailing-8-x-8-print-matte-finish">
            <Img
              fluid={data.perfectday.childImageSharp.fluid}
              alt="Generative art"
            />
            </a>
          </div>
          <div className={categoriesStyles.art_container}>
            <a href="https://shop.joshkatzenmeyer.com/collections/prints/products/porters-gate-8-x-8-print-matte-finish">
            <Img
              fluid={data.portersgate.childImageSharp.fluid}
              alt="Generative art"
            />
            </a>
          </div>
          <div className={categoriesStyles.art_container}>
            <a href="https://shop.joshkatzenmeyer.com/collections/prints/products/replica-container-key-8-8-x-8-print-matte-finish">
            <Img
              fluid={data.replica8.childImageSharp.fluid}
              alt="Generative art"
            />
            </a>
          </div>
          <div className={categoriesStyles.art_container}>
            <a href="https://shop.joshkatzenmeyer.com/collections/prints/products/replica-container-key-7-8-x-8-print-matte-finish">
            <Img
              fluid={data.replica7.childImageSharp.fluid}
              alt="Generative art"
            />
            </a>
          </div>
          <div className={categoriesStyles.art_container}>
            <a href="https://shop.joshkatzenmeyer.com/collections/prints/products/replica-container-key-6-8-x-8-print-matte-finish">
            <Img
              fluid={data.replica6.childImageSharp.fluid}
              alt="Generative art"
            />
            </a>
          </div>
          <div className={categoriesStyles.art_container}>
            <a href="https://shop.joshkatzenmeyer.com/collections/prints/products/replica-container-key-5-8-x-8-print-matte-finish">
            <Img
              fluid={data.replica5.childImageSharp.fluid}
              alt="Generative art"
            />
            </a>
          </div>
          <div className={categoriesStyles.art_container}>
            <a href="https://shop.joshkatzenmeyer.com/collections/prints/products/copy-of-copy-of-replica-container-key-4-8-x-8-print-matte-finish">
            <Img
              fluid={data.replica4.childImageSharp.fluid}
              alt="Generative art"
            />
            </a>
          </div>
          <div className={categoriesStyles.art_container}>
            <a href="https://shop.joshkatzenmeyer.com/collections/prints/products/copy-of-replica-container-key-3-8-x-8-matte-finish">
            <Img
              fluid={data.replica3.childImageSharp.fluid}
              alt="Generative art"
            />
            </a>
          </div>
          <div className={categoriesStyles.art_container}>
            <a href="https://shop.joshkatzenmeyer.com/collections/prints/products/replica-container-key-2-8-x-8-matte-finish">
            <Img
              fluid={data.replica2.childImageSharp.fluid}
              alt="Generative art"
            />
            </a>
          </div>
          <div className={categoriesStyles.art_container}>
            <a href="https://shop.joshkatzenmeyer.com/collections/prints/products/replica-container-key-1-8-x-8-print-matte-finish">
            <Img
              fluid={data.replica1.childImageSharp.fluid}
              alt="Generative art"
            />
            </a>
          </div>
        </div>
        <Link to="/projects">More projects</Link>
      </div>
    </Layout>
  )
}

export default ProjectsArtPage