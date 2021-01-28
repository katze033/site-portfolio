import React from "react"
import Layout from '../components/layout'
import SEO from '../components/SEO'

import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"

import video from "../assets/movie.mp4"
import srLogo from "../assets/sr_wordmark.svg"
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

export const ArtworkIndex = graphql`
fragment ArtworkIndex on ContentfulArtwork {
  previewImage {
    fluid {
      ...GatsbyContentfulFluid
    }
  }
  title
  slug
}`

const IndexPage = () => {
  const data = useStaticQuery(graphql`
  query {
  allContentfulArtwork (sort: {fields: [datePublished], order:DESC}) {
    edges {
      node {
        ...ArtworkIndex
      }
    }
  }
}
`)



  return (
    <Layout> 
      
      <video autoPlay playsInline muted loop id="video">
        <source src={video} type="video/mp4"></source>
      </video>
      
      <section id="introduction">

        <div>
          <h1>I'm Josh Katzenmeyer.</h1>
          <p>But most people online know me as <a href="https://www.twitter.com/luxpris/" target="_blank" rel="noopener noreferrer">@luxpris</a>. I am a creative technologist who assembles abstracted landscapes and
            collages with code. I work primarily with JavaScript and Blender, and use generative processes while designing. The result is
            extraterrestrial, angular, and heavily geometric.</p>
          <p>Conceptually I'm drawn to the questions unearthed when collaborating with
          machines. What does it mean for an artist to act primarily as a curator of a computer's procedural outputs? What
            does it mean for these outputs to be received by and disseminated through algorithmic social media channels? Where does the user end and the machine begin?</p>
          <p>I make a living by selling <a href="https://www.superrare.co/luxpris" target="_blank" rel="noopener noreferrer">single edition digital copies (NFTs)</a> of my work. I also
            offer web development services. If you're interested in hiring me for a commission or a custom web project, <a href="mailto:joshkatzenmeyer@gmail.com" target="_blank" rel="noopener noreferrer">email</a> me your idea and I'd love to discuss it with you.</p>

        </div>
      </section>
      <section id="index-gallery">
        <SRLWrapper options={options}>

          <div className="index-gallery-container">
          {// eslint-disable-next-line
          }{data.allContentfulArtwork.edges.map((edge, i) => {
              if (i < 6) {
                return (
                  <figure className={`index-gallery_item-${i}`}>
                    <Img
                      className='index-gallery_img'
                      fluid={edge.node.previewImage.fluid}
                      key={edge.node.previewImage.fluid.src}
                      alt={edge.node.title}
                    />
                  </figure>
                )

              }
            }
            )
            }

          </div>
        </SRLWrapper>

      </section>
      <section id="work">
        <div>
          <h2>Exhibitions</h2>
          <ul>
            <li><b>Art in Quarantine</b>, <i>Wreading Digits</i>, Online, 2020</li>
            <li><b>$1M Art Show</b>, <i>SuperRare Museum</i>, Virtual Reality, 2020</li>
            <li><b>A Dissolution of Corrupted Arrangements</b>, <i>Museum of CryptoArt</i>, Virtual Reality, 2020 (Solo)</li>
            <li><b>Generative & AI Art Exhibit</b>, <i>SuperRare Museum</i>, Virtual Reality, 2020</li>
            <li><b>"Audiovisual" Album Release & Gallery</b>, <i>Studio Nouveau</i>, Virtual Reality, 2020</li>
            <li><b>Foot in the Door 5: The Virtual Exhibition</b>, <i>Minneapolis Institute of Art</i>, Minneapolis, MN, 2020</li>
          </ul>
          <h2>Projects</h2>
          <ul>
            <li><Link to="/territories-of-elimination">Territories of Elimination</Link></li>
          </ul>
          <h2>Press</h2>
          <ul>
            <li><a href="https://editorial.superrare.co/2020/09/06/an-interview-with-josh-katzenmeyer-the-artist-that-walks-in-an-abstract-landscape/" target="_blank" rel="noopener noreferrer">An Interview with Josh Katzenmeyer</a></li>
          </ul>
          <h2>Writings</h2>
          <ul>
            <li><a href="https://editorial.superrare.co/2020/10/21/james-fox-beautifying-an-unavoidable-darkness/" target="_blank" rel="noopener noreferrer">James Fox: Beautifying an Unavoidable Darkness</a></li>
            <li><a href="https://editorial.superrare.co/2020/10/05/an-exploration-of-high-weirdness-interviewing-sarah-zucker/" target="_blank" rel="noopener noreferrer">An Exploration of High Weirdness: Interviewing Sarah Zucker</a></li>
            <li><a href="https://editorial.superrare.co/2020/09/03/an-interview-with-k0ch-the-algorithmic-artist-lost-in-a-recursive-loop/" target="_blank" rel="noopener noreferrer">An Interview with k0ch: The Algorithmic Artist Lost in a Recursive Loop</a></li>

          </ul>
        </div>
      </section>
      <section id="contact">
        <div>
          <a href="https://www.twitter.com/luxpris" target="_blank" rel="noopener noreferrer">
            <img src={srLogo} id="icon" alt="SuperRare"/>
          </a>
          <a href="https://www.twitter.com/luxpris" target="_blank" rel="noopener noreferrer">
            <span class="fab fa-twitter" id="icon"></span>
          </a>
          <a href="https://www.instagram.com/luxpris" target="_blank" rel="noopener noreferrer">
            <span class="fab fa-instagram" id="icon"></span>
          </a>
          <a href="https://www.github.com/katze033" target="_blank" rel="noopener noreferrer">
            <span class="fab fa-github" id="icon"></span>
          </a>

          <a href="mailto:joshkatzenmeyer@gmail.com" target="_blank" rel="noopener noreferrer">
            <span class="fas fa-envelope-square" id="icon"></span>
          </a>
        </div>
      </section>

      <SEO />
    </Layout>
  )


}






export default IndexPage
/*
<div className="gallery" id="gallery">
        {data.allContentfulArtwork.edges.map((edge, i) => {
          return (
                <Link to={`/art/${edge.node.slug}`}>
                  <Img
                    fixed={edge.node.previewImage.fixed}
                    key={edge.node.previewImage.fixed.src}
                    alt={edge.node.title}
                  />
                </Link>
              )
            }
          )
        }
      </div>
      */