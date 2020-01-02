import React from 'react';

import { Link } from 'gatsby';

import Layout from '../../components/layout';

import categoriesStyles from '../../components/modules/projects-categories.module.css'

const ProjectsArtPage = () => {
    return (
        <Layout>
            <div>
                <Link to="/projects">Go back</Link>
                <p>All of these images are coded using p5.js, a JavaScript library for creating graphic and interactive experiences.</p>
                <div className={categoriesStyles.artFlex_container}>
                    <div className={categoriesStyles.art_container}>
                        <img src={`/boathouse.png`} alt=" "></img>
                    </div>
                    <div className={categoriesStyles.art_container}>
                        <img src={`/city.png`}></img>
                    </div>
                    <div className={categoriesStyles.art_container}>
                        <img src={`/plane.png`}></img>
                    </div>
                    <div className={categoriesStyles.art_container}>
                        <img src={`/plate.png`}></img>
                    </div>
                    <div className={categoriesStyles.art_container}>
                        <img src={`/rain.png`}></img>
                    </div>
                    <div className={categoriesStyles.art_container}>
                        <img src={`/terraform.png`}></img>
                    </div>
                    <div className={categoriesStyles.art_container}>
                        <img src={`/treat.png`}></img>
                    </div>
                    <div className={categoriesStyles.art_container}>
                        <img src={`/tunnel.png`}></img>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default ProjectsArtPage