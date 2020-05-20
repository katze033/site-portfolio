import React from 'react';

import { Link, useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import Layout from '../../components/layout';

import categoriesStyles from '../../components/modules/projects-categories.module.css'


export const squareImage = graphql`
  fragment squareImage on File {
    childImageSharp {
      fluid(maxHeight: 270) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`

const ProjectsArtPage = () => {
  const data = useStaticQuery(graphql`
  query {
    subliminal: file(relativePath: { eq: "art/subliminal_shatter_plot.png" }) {
      ...squareImage
    }
    shadow: file(relativePath: { eq: "art/shadow_transit_by_moonlight.png" }) {
      ...squareImage
    }
    pavlovian: file(relativePath: { eq: "art/pavlovian_fortress.png" }) {
      ...squareImage
    }
    material: file(relativePath: { eq: "art/material_daydream.png" }) {
      ...squareImage
    }
    infinite: file(relativePath: { eq: "art/infinite_crossroads.png" }) {
      ...squareImage
    }
    liminal: file(relativePath: { eq: "art/liminal_enclosure.png" }) {
      ...squareImage
    }
    travels: file(relativePath: { eq: "art/new_travels.png" }) {
      ...squareImage
    }
    spectral: file(relativePath: { eq: "art/spectral_exigency.png" }) {
      ...squareImage
    }
    stillness: file(relativePath: { eq: "art/stillness_delays_1600.png" }) {
      ...squareImage
    }
    nobody: file(relativePath: { eq: "art/nobody_knows_2400.png" }) {
      ...squareImage
    }
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
        <p>All of these images are coded using JavaScript and generative processes. You can click the links to below to purchase single edition cryptocollectible copies and physical reproductions of my work.</p>

        <div className={categoriesStyles.artFlex_container}>
        <div className={categoriesStyles.art_container}>
            <Img className={categoriesStyles.image}
              fluid={data.subliminal.childImageSharp.fluid}
              alt="Generative art"
            />
            <p>"Subliminal Shatter Plot"</p>
            <p><a href="https://www.inprnt.com/gallery/luxpris/shadow-transit-by-moonlight/">Print</a></p>
            <p><a href="https://superrare.co/artwork-v2/subliminal-shatter-plot-10307">NFT</a></p>

          </div>
        <div className={categoriesStyles.art_container}>
            <Img className={categoriesStyles.image}
              fluid={data.shadow.childImageSharp.fluid}
              alt="Generative art"
            />
            <p>"Shadow Transit by Moonlight"</p>
            <p><a href="https://www.inprnt.com/gallery/luxpris/shadow-transit-by-moonlight/">Print</a></p>
            <p><a href="https://superrare.co/artwork-v2/shadow-transit-by-moonlight-9930">NFT</a></p>

          </div>
        <div className={categoriesStyles.art_container}>
            <Img className={categoriesStyles.image}
              fluid={data.pavlovian.childImageSharp.fluid}
              alt="Generative art"
            />
            <p>"Pavlovian Fortress"</p>
            <p><a href="">Print</a></p>
            <p><a href="">NFT</a></p>
          </div>
          <div className={categoriesStyles.art_container}>
            <Img className={categoriesStyles.image}
              fluid={data.spectral.childImageSharp.fluid}
              alt="Generative art"
            />
            <p>"Spectral Exigency"</p>
            <p><a href="">Print</a></p>
            <p><a href="">NFT</a></p>
          </div>
          <div className={categoriesStyles.art_container}>
            <Img className={categoriesStyles.image}
              fluid={data.material.childImageSharp.fluid}
              alt="Generative art"
            />
            <p>"Material Daydream"</p>
            <p><a href="https://www.inprnt.com/gallery/luxpris/material-daydream/">Print</a></p>
            <p><a href="">NFT</a></p>
          </div>
          <div className={categoriesStyles.art_container}>
            <Img className={categoriesStyles.image}
              fluid={data.infinite.childImageSharp.fluid}
              alt="Generative art"
            />
            <p>"Infinite Crossroads"</p>
            <p><a href="https://www.inprnt.com/gallery/luxpris/infinite-crossroads/">Print</a></p>
            <p><a href="">NFT</a></p>
          </div>
          <div className={categoriesStyles.art_container}>
            <Img className={categoriesStyles.image}
              fluid={data.liminal.childImageSharp.fluid}
              alt="Generative art"
            />
            <p>"Liminal Enclosure"</p>
            <p><a href="https://www.inprnt.com/gallery/luxpris/liminal-enclosure/">Print</a></p>
            <p><a href="">NFT</a></p>
          </div>
          <div className={categoriesStyles.art_container}>
            <Img className={categoriesStyles.image}
              fluid={data.travels.childImageSharp.fluid}
              alt="Generative art"
            />
            <p>"New Travels"</p>
            <p><a href="https://www.inprnt.com/gallery/luxpris/new-travels/">Print</a></p>
            <p><a href="">NFT</a></p>
          </div>
        <div className={categoriesStyles.art_container}>
            <Img className={categoriesStyles.image}
              fluid={data.stillness.childImageSharp.fluid}
              alt="Generative art"
            />
            <p>"Stillness Delays"</p>
            <p><a href="">Print</a></p>
            <p><a href="">NFT</a></p>
          </div>
        <div className={categoriesStyles.art_container}>
            <Img className={categoriesStyles.image}
              fluid={data.nobody.childImageSharp.fluid}
              alt="Generative art"
            />
            <p>"Nobody Knows"</p>
            <p><a href="">Print</a></p>
            <p><a href="">NFT</a></p>
          </div>
        <div className={categoriesStyles.art_container}>
            <Img className={categoriesStyles.image}
              fluid={data.fantasyexits.childImageSharp.fluid}
              alt="Generative art"
            />
            <p>"Fantasy Exits"</p>
            <p><a href="">Print</a></p>
            <p><a href="">NFT</a></p>
          </div>
        <div className={categoriesStyles.art_container}>
            <Img className={categoriesStyles.image}
              fluid={data.openchannel.childImageSharp.fluid}
              alt="Generative art"
            />
            <p>"Open Channel Illuminated"</p>
            <p><a href="">Print</a></p>
            <p><a href="">NFT</a></p>
          </div>
        <div className={categoriesStyles.art_container}>
            <Img className={categoriesStyles.image}
              fluid={data.spirit.childImageSharp.fluid}
              alt="Generative art"
            />
            <p>"Spirit of the Valley"</p>
            <p><a href="https://www.inprnt.com/gallery/luxpris/spirit-of-the-valley/">Print</a></p>
            <p><a href="">NFT</a></p>
          </div>
        <div className={categoriesStyles.art_container}>
            <Img className={categoriesStyles.image}
              fluid={data.junkyard.childImageSharp.fluid}
              alt="Generative art"
            />
            <p>"Junkyard Dreams"</p>
            <p><a href="">Print</a></p>
            <p><a href="">NFT</a></p>
          </div>
        <div className={categoriesStyles.art_container}>
            <Img className={categoriesStyles.image}
              fluid={data.alongthecoast.childImageSharp.fluid}
              alt="Generative art"
            />
            <p>"Along the Coast"</p>
            <p><a href="">Print</a></p>
            <p><a href="">NFT</a></p>
          </div>
        <div className={categoriesStyles.art_container}>
            <Img className={categoriesStyles.image}
              fluid={data.perfectday.childImageSharp.fluid}
              alt="Generative art"
            />
            <p>"A Perfect Day for Sailing"</p>
            <p><a href="">Print</a></p>
            <p><a href="">NFT</a></p>
          </div>
          <div className={categoriesStyles.art_container}>
            <Img className={categoriesStyles.image}
              fluid={data.portersgate.childImageSharp.fluid}
              alt="Generative art"
            />
            <p>"Porter's Gate"</p>
            <p><a href="">Print</a></p>
            <p><a href="">NFT</a></p>
          </div>
          <div className={categoriesStyles.art_container}>
            <Img className={categoriesStyles.image}
              fluid={data.replica8.childImageSharp.fluid}
              alt="Generative art"
            />
            <p>"Replica Container Key #8"</p>
            <p><a href="">Print</a></p>
            <p><a href="">NFT</a></p>
          </div>
          <div className={categoriesStyles.art_container}>
            <Img className={categoriesStyles.image}
              fluid={data.replica7.childImageSharp.fluid}
              alt="Generative art"
            />
            <p>"Replica Container Key #7"</p>
            <p><a href="">Print</a></p>
            <p><a href="">NFT</a></p>
          </div>
          <div className={categoriesStyles.art_container}>
            <Img className={categoriesStyles.image}
              fluid={data.replica6.childImageSharp.fluid}
              alt="Generative art"
            />
            <p>"Replica Container Key #6"</p>
            <p><a href="">Print</a></p>
            <p><a href="">NFT</a></p>
          </div>
          <div className={categoriesStyles.art_container}>
            <Img className={categoriesStyles.image}
              fluid={data.replica5.childImageSharp.fluid}
              alt="Generative art"
            />
            <p>"Replica Container Key #5"</p>
            <p><a href="">Print</a></p>
            <p><a href="">NFT</a></p>
          </div>
          <div className={categoriesStyles.art_container}>
            <Img className={categoriesStyles.image}
              fluid={data.replica4.childImageSharp.fluid}
              alt="Generative art"
            />
            <p>"Replica Container Key #4"</p>
            <p><a href="">Print</a></p>
            <p><a href="">NFT</a></p>
          </div>
          <div className={categoriesStyles.art_container}>
            <Img className={categoriesStyles.image}
              fluid={data.replica3.childImageSharp.fluid}
              alt="Generative art"
            />
            <p>"Replica Container Key #3"</p>
            <p><a href="">Print</a></p>
            <p><a href="">NFT</a></p>
          </div>
          <div className={categoriesStyles.art_container}>
            <Img className={categoriesStyles.image}
              fluid={data.replica2.childImageSharp.fluid}
              alt="Generative art"
            />
            <p>"Replica Container Key #2"</p>
            <p><a href="">Print</a></p>
            <p><a href="">NFT</a></p>
          </div>
          <div className={categoriesStyles.art_container}>
            <Img className={categoriesStyles.image}
              fluid={data.replica1.childImageSharp.fluid}
              alt="Generative art"
            />
            <p>"Replica Container Key #1"</p>
            <p><a href="">Print</a></p>
            <p><a href="">NFT</a></p>
          </div>
        </div>
        <Link to="/projects">More projects</Link>
      </div>
    </Layout>
  )
}

export default ProjectsArtPage