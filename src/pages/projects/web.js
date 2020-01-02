import React from 'react';

import { Link } from 'gatsby';

import Layout from '../../components/layout';

const ProjectsWebPage = () => {
    return (
        <Layout>
            <div>
                <Link to="/projects">Go back</Link>
                <p>Web projects</p>
            </div>
        </Layout>
    )
}

export default ProjectsWebPage