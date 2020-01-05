import React from "react"
import Layout from '../components/layout'
import aboutStyles from "../components/modules/about.module.css"

import { Link } from 'gatsby'

const AboutPage = () => {
    return (
        <Layout>
            <div className={aboutStyles.container}>

                <div className={aboutStyles.content}>
                    <p>I'm a freelancer interested in helping others build lightweight and attractive websites. If you're looking for assistance solidifying your web presence, get in touch: I am an approachable professional with a deep understanding of shaping online identities that feel thoughtful, respectable, and true.
                        <br></br>
                        <br></br>
                        I would like to let my more web development-oriented readers know that I'm comfortable with the following technologies:
                        <ul>
                            <li>HTML</li>
                            <li>CSS/Sass</li>
                            <li>JavaScript</li>
                            <li>NodeJS</li>
                            <li>Git</li>
                            <li>GatsbyJS</li>
                            <li>Wordpress</li>
                        </ul>
                        Beyond my interest in web development, I am also passionate about exploring generative audio and visuals through code. I work with p5.js, Web Audio API, and various software to create art that's lively, multi-layered, and strongly informed by the technology that produces it.
                        <br></br>
                        <br></br>
                        In <Link to={`/projects`} className={aboutStyles.link}>my portfolio</Link> you'll find some of my work.
                    </p>
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