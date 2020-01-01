import React from "react"
import Layout from '../components/layout'

import projectsStyles from '../components/modules/projects.module.css'

const ProjectsPage = () => {
    return (
        <Layout>
            <div className={projectsStyles.categories_container}>
                <div className={projectsStyles.category}>
                    <p>Web Applications</p>
                </div>
                <div className={projectsStyles.category}>
                    <p>Digital Art</p>
                </div>
                <div className={projectsStyles.category}>
                    <p>Music</p>
                </div>
                <div className={projectsStyles.category}>
                    <p>Resume</p>
                </div>

            </div>
        </Layout>
    )
}

export default ProjectsPage