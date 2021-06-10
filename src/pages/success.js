import React from 'react';
import Layout from '../components/layout'
import SEO from '../components/SEO'

const IndexPage = () => {
  return (
    <Layout>
      <body>
        <h1>My name's Josh Katzenmeyer.</h1>
        <p>But most people in the metaverse know me as <a href="https://www.twitter.com/luxpris/" target="_blank" rel="noopener noreferrer">@luxpris</a>. I'm a creative technologist using
        code-based generative means to produce extraterrestrial results. My visual output has been steadiest since early 2020 and since then I've enjoyed producing art that makes
        use of minimalistic geometry to craft immersive, abstracted landscapes. I cut my teeth exhibiting in virtual reality, but more recently my work has made its
         physical debut on the international stage in Sotheby's <a href="https://www.sothebys.com/en/digital-catalogues/natively-digital-a-curated-nft-sale" target="_blank" rel="noopener noreferrer">Natively Digital</a> auction.</p>
        <p>Conceptually I'm drawn to the questions unearthed when collaborating with machines. I'm interested in exploring the way technology encourages or reduces
        human autonomy; the way algorithms inspire not only the creation, marketing, and monetization of artworks, but how they affect the perception and attention of
        audiences and what this might mean for the future of cultural production and consumption.</p>
        <p>I make a living by selling NFTs. I also offer consultations and trainings on NFTs alongside web development services. If you're interested in hiring me for a commission,
         consultation, or a custom web project, <a href="mailto:joshkatzenmeyer@gmail.com" target="_blank" rel="noopener noreferrer">email</a> me your idea
         and I'd love to discuss it with you.</p>
        <h2>Art</h2>
        <ul>
          <li><a href="https://www.cryptovoxels.com/play?coords=W@197E,78N" target="_blank" rel="noopener noreferrer">VR Gallery (CryptoVoxels)</a></li>
          <li><a href="https://superrare.co/luxpris" target="_blank" rel="noopener noreferrer">SuperRare</a></li>
          <li><a href="https://artblocks.io/project/7" target="_blank" rel="noopener noreferrer">Elevated Deconstructions</a></li>
          <li><a href="https://artblocks.io/project/25" target="_blank" rel="noopener noreferrer">Pathfinders</a></li>
        </ul>
        <h2>Exhibitions</h2>
        <ul>
          <li><b>Art in Quarantine</b>, <i>Wreading Digits</i>, Online, 2020</li>
          <li><b>$1M Art Show</b>, <i>SuperRare Museum</i>, Virtual Reality, 2020</li>
          <li><b>A Dissolution of Corrupted Arrangements</b>, <i>Museum of CryptoArt</i>, Virtual Reality, 2020 (Solo)</li>
          <li><b>Generative & AI Art Exhibit</b>, <i>SuperRare Museum</i>, Virtual Reality, 2020</li>
          <li><b>"Audiovisual" Album Release & Gallery</b>, <i>Studio Nouveau</i>, Virtual Reality, 2020</li>
          <li><b>Foot in the Door 5: The Virtual Exhibition</b>, <i>Minneapolis Institute of Art</i>, Minneapolis, MN, 2020</li>
          <li><b>Natively Digital</b>, <i>Sotheby's</i>, NYC/Hong Kong/London (2021)</li>
        </ul>
        <h2>Press</h2>
        <ul>
          <li><a href="https://editorial.superrare.co/2020/09/06/an-interview-with-josh-katzenmeyer-the-artist-that-walks-in-an-abstract-landscape/" target="_blank" rel="noopener noreferrer">An Interview with Josh Katzenmeyer</a></li>
          <li><a href="https://beta.cent.co/artblocks/+95ml3q" target="_blank" rel="noopener noreferrer">Catching up with Josh Katzenmeyer</a></li>
          <li><a href="https://www.pscp.tv/w/1dRKZNnRAYgKB" target="_blank" rel="noopener noreferrer">VerticalCrypto x luxpris (Video Interview)</a></li>
        </ul>
        <h2>Contact</h2>
        <ul>
          <li><a href="https://twitter.com/luxpris" target="_blank" rel="noopener noreferrer">Twitter</a></li>
          <li><a href="https://instagram.com/luxpris" target="_blank" rel="noopener noreferrer">Instagram</a></li>
          <li><a href="mailto:joshkatzenmeyer@gmail.com" target="_blank" rel="noopener noreferrer">Email</a></li>
        </ul>
        <h2>Mailing List</h2>
        <form name="mailing-list" method="post" data-netlify="true" data-netlify-honeypot="bot-field" action="/success">
        <input type="hidden" name="mailing-list" value="mailing-list" />
            <p>Your submission has been received. Thanks for your support.</p>
          </form>
      </body>
      <SEO />
    </Layout>

  )


}





export default IndexPage