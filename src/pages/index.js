import React from "react"
import Layout from '../components/layout'
import SEO from '../components/SEO'

import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"

const IndexPage = () => {
    const data = useStaticQuery(graphql`
  query {
  allContentfulArtwork (sort: {fields: [datePublished], order:DESC}) {
    edges {
      node {
        previewImage {
        	fixed (height: 300) {
            ...GatsbyContentfulFixed
          }
        }
        title
        slug
      }
    }
  }
}
`)
    return (
        <Layout>
            <h1>I'm Josh Katzenmeyer.</h1>
            
            <div className="gallery">
            {data.allContentfulArtwork.edges.map((edge, i) => (
                <Link to={`/art/${data.allContentfulArtwork.edges[i].node.slug}`}>
                    <Img
                        fixed={data.allContentfulArtwork.edges[i].node.previewImage.fixed}
                        key={data.allContentfulArtwork.edges[i].node.previewImage.fixed.src} 
                        alt={data.allContentfulArtwork.edges[i].node.title} 
                    />
                </Link>
            ))}
            </div>
            <p>But most people online know me as <a href="https://www.twitter.com/luxpris/" target="_blank" rel="noopener noreferrer" rel="noopener noreferrer">@luxpris</a>. I am a creative technologist who assembles <a href="https://www.superrare.co/luxpris" target="_blank" rel="noopener noreferrer">abstracted landscapes and
            collages with code.</a> I work primarily with p5.js and use generative processes while designing. The result is
            extraterrestrial, angular, and heavily geometric.</p>
             <p>Conceptually I'm drawn to the limitless creative and philosophical questions unearthed when collaborating with
            machines. What does it mean for an artist to act primarily as a curator of a computer's procedural outputs? What
            does it mean for these outputs to be received by and disseminated through algorithmic social media channels? Where does the user end and the machine begin?</p>
            <p>I make a living by selling <a href="https://www.superrare.co/luxpris" target="_blank" rel="noopener noreferrer">single edition digital copies (NFTs)</a> of my work. I also
            offer web development services. If you're interested in hiring me for a commission or a custom web project, <a href="mailto:joshkatzenmeyer@gmail.com" target="_blank" rel="noopener noreferrer">email</a> me your idea and I'd love to discuss it with you.</p>
            <h2>Exhibitions</h2>
            <ul>
                <li><b>Art in Quarantine</b>, <i>Wreading Digits</i>, Online, 2020</li>
                <li><b>$1M Art Show</b>, <i>SuperRare Museum</i>, Virtual Reality, 2020</li>
                <li><b>A Dissolution of Corrupted Arrangements</b>, <i>Museum of CryptoArt</i>, Virtual Reality, 2020 (Solo)</li>
                <li><b>Generative & AI Art Exhibit</b>, <i>SuperRare Museum</i>, Virtual Reality, 2020</li>
                <li><b>"Audiovisual" Album Release & Gallery</b>, <i>Studio Nouveau</i>, Virtual Reality, 2020</li>
            </ul>
            <h2>Press</h2>
            <ul>
                <li><a href="https://editorial.superrare.co/2020/09/06/an-interview-with-josh-katzenmeyer-the-artist-that-walks-in-an-abstract-landscape/" target="_blank" rel="noopener noreferrer">An Interview with Josh Katzenmeyer</a></li>
            </ul>
            <h2>Links</h2>
            <ul>
                <li><a href="https://www.superrare.co/luxpris" target="_blank" rel="noopener noreferrer">Art (NFTs)</a></li>
                <li><a href="https://www.luxuryprison.com" target="_blank" rel="noopener noreferrer">Music</a></li>
                <li><a href="https://twitter.com/luxpris" target="_blank" rel="noopener noreferrer">Twitter</a></li>
                <li><a href="https://www.instagram.com/luxpris/" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                <li><a href="mailto:joshkatzenmeyer@gmail.com" target="_blank" rel="noopener noreferrer">Email</a></li>
            </ul>
            <SEO />
        </Layout>
    )
}


export default IndexPage