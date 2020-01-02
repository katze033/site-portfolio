import React from "react"
import Layout from '../components/layout'

import { Link } from 'gatsby'

import projectsStyles from '../components/modules/projects.module.css'

const ProjectsPage = () => {
    return (
        <Layout>
            <div className={projectsStyles.categories_container}>
                <div className={projectsStyles.category}>
                    <Link to="/projects/web"><p>Web</p></Link>
                </div>
                <div className={projectsStyles.category}>
                    <Link to="/projects/art"><p>Art</p></Link>
                </div>
                <div className={projectsStyles.category}>
                    <Link to="/projects/music"><p>Music</p></Link>
                </div>
                <div className={projectsStyles.category}>
                    <Link to="/blog"><p>Blog</p></Link>
                </div>
            </div>
        </Layout>
    )
}

export default ProjectsPage