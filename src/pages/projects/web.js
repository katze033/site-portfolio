import React from 'react';

import { Link } from 'gatsby';

import Layout from '../../components/layout';

import categoriesStyles from '../../components/modules/projects-categories.module.css'


//images
import questForCute from '../../components/images/webprojects/quest-for-cute.png'


const ProjectsWebPage = () => {
    return (
        <Layout>
            <div>
                <Link to="/projects">Go back</Link>
                <div className={categoriesStyles.images_container}>
                <a href="https://zealous-engelbart-509321.netlify.com/"><img src={questForCute} alt="A site designed for Quest For Cute, an online gift shop." className={categoriesStyles.images}></img></a>
                </div>
                <p>This is a static site for Quest for Cute, an Etsy gift shop stationed out of St. Paul, Minnesota. The goal was to create a more attractive alternative to the clients' Wordpress blog. Despite needing an aesthetic overhaul, it was important for the client to still have the ability to edit content easily. To accomodate this, I coded this site using GatsbyJS and Wordpress as a headless CMS.</p>
                <div className={categoriesStyles.images_container}>
                </div>
                <p>This is a website I coded for my personal music project. The main objective was to create a site that was fast, minimalist, and attractive. This site is comprised of simple HTML and CSS.</p>
                <div className={categoriesStyles.images_container}>
                </div>
                <p>This is a simple etch-a-sketch coded using pure JavaScript.</p>
                <div className={categoriesStyles.images_container}>
                </div>
                <p>This is a small message board architecture built using RESTful API.</p>
            </div>
        </Layout>
    )
}

export default ProjectsWebPage


  