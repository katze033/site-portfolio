import React from 'react';

import { Link, useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import Layout from '../../components/layout';

import categoriesStyles from '../../components/modules/projects-categories.module.css'


export const squareImage = graphql`
  fragment squareImage on File {
    childImageSharp {
      fluid(maxWidth: 280, maxHeight: 280) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`

const ProjectsArtPage = () => {
  const data = useStaticQuery(graphql`
  query {
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
        <p>All of these images are coded with JavaScript. Tokenized single edition digital copies are available for purchase with Ethereum through <a href="https://superrare.co/luxpris">SuperRare.co</a>. Soon I will be making physical prints. If you are interested in a copy, feel free to <Link to="/contact" className={categoriesStyles.projects_link}>contact</Link> me and I will let you know as soon as they're available.</p>
        <div className={categoriesStyles.artFlex_container}>
        <div className={categoriesStyles.art_container}>
            <a href="https://superrare.co/artwork-v2/a-perfect-day-for-sailing-7935">
            <Img
              fluid={data.perfectday.childImageSharp.fluid}
              alt="Generative art"
            />
            </a>
          </div>
          <div className={categoriesStyles.art_container}>
            <a href="https://superrare.co/artwork-v2/porter's-gate-7852">
            <Img
              fluid={data.portersgate.childImageSharp.fluid}
              alt="Generative art"
            />
            </a>
          </div>
          <div className={categoriesStyles.art_container}>
            <a href="https://superrare.co/artwork-v2/replica-container-key-8-7824">
            <Img
              fluid={data.replica8.childImageSharp.fluid}
              alt="Generative art"
            />
            </a>
          </div>
          <div className={categoriesStyles.art_container}>
            <a href="https://superrare.co/artwork-v2/replica-container-key-7-7802">
            <Img
              fluid={data.replica7.childImageSharp.fluid}
              alt="Generative art"
            />
            </a>
          </div>
          <div className={categoriesStyles.art_container}>
            <a href="https://superrare.co/artwork-v2/replica-container-key-6-7709">
            <Img
              fluid={data.replica6.childImageSharp.fluid}
              alt="Generative art"
            />
            </a>
          </div>
          <div className={categoriesStyles.art_container}>
            <a href="https://superrare.co/artwork-v2/replica-container-key-5-7675">
            <Img
              fluid={data.replica5.childImageSharp.fluid}
              alt="Generative art"
            />
            </a>
          </div>
          <div className={categoriesStyles.art_container}>
            <a href="https://superrare.co/artwork-v2/replica-container-key-4-7624">
            <Img
              fluid={data.replica4.childImageSharp.fluid}
              alt="Generative art"
            />
            </a>
          </div>
          <div className={categoriesStyles.art_container}>
            <a href="https://superrare.co/artwork-v2/replica-container-key-3-7583">
            <Img
              fluid={data.replica3.childImageSharp.fluid}
              alt="Generative art"
            />
            </a>
          </div>
          <div className={categoriesStyles.art_container}>
            <a href="https://superrare.co/artwork-v2/replica-container-key-2-7503">
            <Img
              fluid={data.replica2.childImageSharp.fluid}
              alt="Generative art"
            />
            </a>
          </div>
          <div className={categoriesStyles.art_container}>
            <a href="https://superrare.co/artwork-v2/replica-container-key-1-7450">
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