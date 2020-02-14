import React from "react"
import Layout from '../components/layout'
import aboutStyles from "../components/modules/about.module.css"

import { Link } from 'gatsby'

const AboutPage = () => {
    return (
        <Layout>
            <div className={aboutStyles.container}>

                <div className={aboutStyles.content}>
                    <p>As a technologist I value simplicity, speed, purpose, and accessibility. I am available on a freelance basis for website design and development. <a href="https://drive.google.com/open?id=1Uh5aMMt3t3Vma9vw2lgxGIDbpg8adps-">My resume</a> lists some of the technologies I'm most comfortable with, and <Link to="/projects/web">this page</Link> lists some of my recent web projects and accompanying source code.</p>
                    <p>As a digital artist <Link to="/projects/art">I assemble landscapes and collages with code.</Link> My work uses minimalist configurations of two-dimensional shapes and lines to construct otherworldly pieces with deceptive depth. Much of my art relies on procedural and generative processes: because of this, the final output is often surprising and heavily informed by the technologies beneath it.</p>
                    <p>As the work makes its way through various algorithmic social media channels, I question the importance of free will in the making and consumption of digital art. In response, I seek to explore and redefine my role as an artist. Above all, I interpret myself as a curator of the machine’s output.</p>
                </div>
            </div>
        </Layout>
    )
}


/* ICONS?
<div className={aboutStyles.icons}>
                <i className="fab fa-html5" alt="HTML5 icon"></i>
                <i className="fab fa-css3"></i>
                <i className="fab fa-sass"></i><br></br>
                <i className="fab fa-node-js"></i>
                <i className="fab fa-react"></i>
                <i className="fab fa-git"></i>
            </div>
            */

export default AboutPage