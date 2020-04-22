import React from "react"
import Layout from '../components/layout'
import aboutStyles from "../components/modules/about.module.css"

import { Link } from 'gatsby'

const AboutPage = () => {
    return (
        <Layout>
            <div className={aboutStyles.container}>

                <div className={aboutStyles.content}>
                    <p>As a technologist I value simplicity, speed, purpose, and accessibility. I am available on a freelance basis for website design and development. <Link to="/projects/web">This page</Link> lists some of my recent web projects and accompanying source code. As you'll see on <a href="https://drive.google.com/open?id=1Uh5aMMt3t3Vma9vw2lgxGIDbpg8adps-">my resume</a>, here are a few of the areas in which I'm proficient: </p>
                    <ul>
                        <li>HTML5, CSS, and JavaScript</li>
                        <li>SEO and Google Analytics</li>
                        <li>Sass/Scss</li>
                        <li>NodeJS</li>
                        <li>ReactJS</li>
                        <li>Git</li>
                        <li>GatsbyJS and GraphQL</li>
                        <li>CMS: WordPress, Squarespace, Netlify CMS, and more</li>
                    </ul>
                    <p>As a digital artist <Link to="/projects/art">I assemble abstracted landscapes and collages with code.</Link></p>
                </div>
            </div>
        </Layout>
    )
}

export default AboutPage