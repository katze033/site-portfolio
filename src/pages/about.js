import React from "react"
import Layout from '../components/layout'
import aboutStyles from "../components/modules/about.module.css"

import { Link } from 'gatsby'

const AboutPage = () => {
    return (
        <Layout>
            <div className={aboutStyles.container}>
            <div className={aboutStyles.icons}>
                <i className="fab fa-html5" alt="HTML5 icon"></i>
                <i className="fab fa-css3"></i>
                <i className="fab fa-sass"></i><br></br>
                <i className="fab fa-node-js"></i>
                <i className="fab fa-react"></i>
                <i className="fab fa-git"></i>
            </div>
            <div className={aboutStyles.content}>
                <p>My name's Josh Katzenmeyer, and I'm a freelance web developer skilled at
                    creating attractive and mobile responsive websites using HTML, CSS, JavaScript, and other industry
                    languages and tools. Whether you're looking to boost your online presence through a blog or seeking a
                    new digital storefront for your business venture, I have the skills to design a product you'll
                    love.<br></br></p>

                <p>Beyond my interest in web development, I am also passionate about
                exploring generative audio and visuals through code. I work with p5.js, Web Audio API, and various
                    softwares to create art that's lively, multi-layered, and reliant on unique technologies.<br></br></p>

                <p>In <Link to={`/projects`} className={aboutStyles.link}>my portfolio</Link> you'll find some of the websites and apps that I've created.<br></br></p>
            </div>
            </div>
        </Layout>
    )
}

export default AboutPage