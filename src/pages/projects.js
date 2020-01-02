import React from "react"
import Layout from '../components/layout'

import { Link } from 'gatsby'

import projectsStyles from '../components/modules/projects.module.css'

const ProjectsPage = () => {
    return (
        <Layout>
            <div className={projectsStyles.categories_container}>
                <div className={projectsStyles.category}>
                    <Link to="/projects/web">Web</Link>
                </div>
                <div className={projectsStyles.category}>
                    <Link to="/projects/art">Art</Link>
                </div>
                <div className={projectsStyles.category}>
                    <Link to="/projects/music">Music</Link>
                </div>
                <div className={projectsStyles.category}>
                    <Link to="/blog">Blog</Link>
                </div>
            </div>
        </Layout>
    )
}

(".category").click(function() {
    window.location = (this).find("a"); 
    return false;
  });

export default ProjectsPage