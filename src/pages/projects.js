import React from "react"
import Layout from '../components/layout'

import { Link } from 'gatsby'

import projectsStyles from '../components/modules/projects.module.css'

const ProjectsPage = () => {
    return (
        <Layout>
            <div className={projectsStyles.categories_container}>
            <Link to="/projects/web">
                <div className={projectsStyles.category}>
                    <p>Web</p>
                </div>
            </Link>
            <Link to="/projects/art">
                <div className={projectsStyles.category}>
                    <p>Art</p>
                </div>
            </Link>
            <a href="http://www.luxuryprison.com">
                <div className={projectsStyles.category}>
                    <p>Music</p>
                </div>
            </a>
            <a href="https://www.inprnt.com/gallery/luxpris/">
                <div className={projectsStyles.category}>
                    <p>Shop</p>
                </div>
            </a>
            </div>
        </Layout>
    )
}

export default ProjectsPage