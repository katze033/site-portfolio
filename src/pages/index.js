import React, { useEffect } from 'react';
import Layout from '../components/layout'
import SEO from '../components/SEO'

import { Link } from "gatsby"

import srLogo from "../assets/sr_wordmark.svg"
import bg from '../assets/bg03.png'

import { motion, useAnimation } from "framer-motion";
import { useInView } from 'react-intersection-observer';

const IndexPage = () => {
  function FadeInWhenVisible({ children }) {
    const controls = useAnimation();
    const [ref, inView] = useInView();

    useEffect(() => {
      if (inView) {
        controls.start("visible");
      }
    }, [controls, inView]);

    return (
      <motion.div
        ref={ref}
        animate={controls}
        initial="hidden"
        transition={{ duration: 1 }}
        variants={{
          visible: { opacity: 1, translateY: 0 },
          hidden: { opacity: 0, translateY: 100 }
        }}
      >
        {children}
      </motion.div>
    );
  }

  function FadeInFromLeftWhenVisible({ children }) {
    const controls = useAnimation();
    const [ref, inView] = useInView();

    useEffect(() => {
      if (inView) {
        controls.start("visible");
      }
    }, [controls, inView]);

    return (
      <motion.div
        ref={ref}
        animate={controls}
        initial="hidden"
        transition={{ duration: 1 }}
        variants={{
          visible: { opacity: 1, translateX: 0 },
          hidden: { opacity: 0, translateX: -200 }
        }}
      >
        {children}
      </motion.div>
    );
  }

  function FadeInFromRightWhenVisible({ children }) {
    const controls = useAnimation();
    const [ref, inView] = useInView();

    useEffect(() => {
      if (inView) {
        controls.start("visible");
      }
    }, [controls, inView]);

    return (
      <motion.div
        ref={ref}
        animate={controls}
        initial="hidden"
        transition={{ duration: 1 }}
        variants={{
          visible: { opacity: 1, translateX: 0 },
          hidden: { opacity: 0, translateX: 200 }
        }}
      >
        {children}
      </motion.div>
    );
  }



  return (

    <Layout>

      <img src={bg} id="bg" className="rotating" alt="Generative artwork.">
        </img>
      <div id="home"></div>
      <section id="introduction">

        <div>
          <h1>I'm Josh Katzenmeyer.</h1>
          <p>But most people online know me as <a href="https://www.twitter.com/luxpris/" target="_blank" rel="noopener noreferrer">@luxpris</a>. I am a creative technologist who assembles abstracted landscapes and
            collages with code. I work primarily with JavaScript and Blender, and use generative processes while designing. The result is
            extraterrestrial, angular, and heavily geometric.</p>
          <p>Conceptually I'm drawn to the questions unearthed when collaborating with
          machines. What does it mean for an artist to act primarily as a curator of a computer's procedural outputs? What
            does it mean for these outputs to be received by and disseminated through algorithmic social media channels? Where does the user end and the machine begin?</p>
          <p>I make a living by selling <Link to="/art" target="_blank" rel="noopener noreferrer">single edition digital copies (NFTs)</Link> of my work. I also
            offer consultations and trainings on NFTs alongside web development services. If you're interested in hiring me for a commission, consultation, or a custom web project, <a href="mailto:joshkatzenmeyer@gmail.com" target="_blank" rel="noopener noreferrer">email</a> me your idea and I'd love to discuss it with you.</p>

        </div>
      </section>
      <section id="projects">
        <div>
          <FadeInFromLeftWhenVisible>
          <a href="https://www.cryptovoxels.com/play?coords=W@197E,78N">
            <div className="projects-block" id="block1">
              <p>VR Gallery (Desktop Only)</p>
              
            </div>
          </a>
          </FadeInFromLeftWhenVisible>
          <FadeInFromRightWhenVisible>
          <Link to="/art">
            <div className="projects-block" id="block2">
              <p>Selected Works 2020-Present</p>
            </div>
          </Link>
          </FadeInFromRightWhenVisible>
          <FadeInFromLeftWhenVisible>
          
          <a href="https://artblocks.io/project/25">
            <div className="projects-block" id="block3">
              <p>Pathfinders</p>
            </div>
          </a>
          </FadeInFromLeftWhenVisible>
          <FadeInFromRightWhenVisible>
          
          <a href="https://artblocks.io/project/7">
            <div className="projects-block" id="block4">
              <p>Elevated Deconstructions</p>
            </div>
          </a>
          </FadeInFromRightWhenVisible>
          
        </div>
      </section>
      <section id="work">
        <FadeInWhenVisible>
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
          <h2>Press</h2>
          <ul>
            <li><a href="https://editorial.superrare.co/2020/09/06/an-interview-with-josh-katzenmeyer-the-artist-that-walks-in-an-abstract-landscape/" target="_blank" rel="noopener noreferrer">An Interview with Josh Katzenmeyer</a></li>
            <li><a href="https://beta.cent.co/artblocks/+95ml3q" target="_blank" rel="noopener noreferrer">Catching up with Josh Katzenmeyer</a></li>
            <li><a href="https://www.pscp.tv/w/1dRKZNnRAYgKB" target="_blank" rel="noopener noreferrer">VerticalCrypto x luxpris (Video Interview)</a></li>

          </ul>
          <h2>Writings</h2>
          <ul>
            <li><a href="https://editorial.superrare.co/2020/10/21/james-fox-beautifying-an-unavoidable-darkness/" target="_blank" rel="noopener noreferrer">James Fox: Beautifying an Unavoidable Darkness</a></li>
            <li><a href="https://editorial.superrare.co/2020/10/05/an-exploration-of-high-weirdness-interviewing-sarah-zucker/" target="_blank" rel="noopener noreferrer">An Exploration of High Weirdness: Interviewing Sarah Zucker</a></li>
            <li><a href="https://editorial.superrare.co/2020/09/03/an-interview-with-k0ch-the-algorithmic-artist-lost-in-a-recursive-loop/" target="_blank" rel="noopener noreferrer">An Interview with k0ch: The Algorithmic Artist Lost in a Recursive Loop</a></li>

          </ul>
        </div>
        </FadeInWhenVisible>
      </section>
      <section id="contact">
        
        <div>
          <motion.div
        transition={{ duration: 0.25 }}
        whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <a href="https://www.superrare.co/luxpris" target="_blank" rel="noopener noreferrer">
              <img src={srLogo} id="icon" alt="SuperRare" />
            </a>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            border="0px"
          >
            <a href="https://www.twitter.com/luxpris" target="_blank" rel="noopener noreferrer">
              <span class="fab fa-twitter" id="icon"></span>
            </a>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <a href="https://www.instagram.com/luxpris" target="_blank" rel="noopener noreferrer">
              <span class="fab fa-instagram" id="icon"></span>
            </a>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <a href="https://www.github.com/katze033" target="_blank" rel="noopener noreferrer">
              <span class="fab fa-github" id="icon"></span>
            </a>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <a href="mailto:joshkatzenmeyer@gmail.com" target="_blank" rel="noopener noreferrer">
              <span class="fas fa-envelope-square" id="icon"></span>
            </a>
          </motion.div>
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
