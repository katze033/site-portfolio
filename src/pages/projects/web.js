import React from 'react';

import { Link, useStaticQuery, graphql } from 'gatsby';

import Layout from '../../components/layout';

import categoriesStyles from '../../components/modules/projects-categories.module.css'

import Img from 'gatsby-image'

//images
//import questForCute from '../../components/images/webprojects/quest-for-cute.png'

export const fitImage = graphql`
  fragment fitImage on File {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid
      }
    }
  }
`


const ProjectsWebPage = () => {
  const data = useStaticQuery(graphql`
    query {
        luxury: file(relativePath: { eq: "web/luxury-prison.png" }) {
          ...fitImage
          }        
        nola: file(relativePath: { eq: "web/nola-vegan.png" }) {
          ...fitImage
          }
        quest: file(relativePath: { eq: "web/quest-for-cute.png" }) {
          ...fitImage
          }
        etch: file(relativePath: { eq: "web/etch-a-sketch.png" }) {
          ...fitImage
          }
        messageboard: file(relativePath: { eq: "web/messageboard.png" }) {
          ...fitImage
          }
        portfolio: file(relativePath: { eq: "web/portfolio.png" }) {
          ...fitImage
          }    
        }
    `)
  return (
    <Layout>
      <div classname={categoriesStyles.webProjects}>
        <Link to="/projects">More projects</Link>
        
        <div className={categoriesStyles.webImages_container}>
          <a href="https://www.questforcute.com/">
            <Img
              fluid={data.quest.childImageSharp.fluid}
              alt="An online storefront for an Etsy gift shop featuring a colorful pencil case"
              className={categoriesStyles.webImages}
            />
          </a>
        </div>
        <p>A static site for Quest for Cute, an Etsy gift shop stationed out of St. Paul, Minnesota. The goal was to create a more attractive alternative to the clients' Wordpress blog. Despite needing an aesthetic overhaul, it was important for the client to still have the ability to edit content easily. To accomodate this, I coded this site using GatsbyJS and Wordpress as a headless CMS.        <a href="https://github.com/katze033/site-quest_for_cute">View the source code</a></p>
        

        <div className={categoriesStyles.webImages_container}>
          <a href="https://www.luxuryprison.com">
            <Img
              fluid={data.luxury.childImageSharp.fluid}
              alt="Musician landing page: the page links to various streaming channels and a mailing list alongside a black and white piece of art."
              className={categoriesStyles.webImages}
            />
          </a>
        </div>
        <p>Musician landing page. This lightweight page is built from pure html/css and links to various streaming channels and a mailing list. It also features a piece of minimalist generative art that I designed. <a href="https://github.com/katze033/site-luxury_prison">View the source code</a></p>
        

        <div className={categoriesStyles.webImages_container}>
          <a href="https://www.joshkatzenmeyer.com">
            <Img
              fluid={data.portfolio.childImageSharp.fluid}
              alt="Home page with text below a navigation menu reading 'Hey there, my name is Josh Katzenmeyer and I'm a web developer.'"
              className={categoriesStyles.webImages}
            />
          </a>
        </div>
        <p>This website! It is built using React and GatsbyJS. For the blog I use Contentful as a headless CMS, but will likely be moving to markdown soon. Additional features include an RSS feed, a mailing list, and contact form. <a href="https://github.com/katze033/site-portfolio">View the source code.</a></p>
        <br></br>
        
        <Link to="/projects">More projects</Link>
      </div>
    </Layout>
  )
}

export default ProjectsWebPage