import React from 'react';

import { Link } from 'gatsby';

import Layout from '../../components/layout';

const ProjectsArtPage = () => {
    return (
        <Layout>
            <div>
                <Link to="/projects">Go back</Link>
                <p>Art projects</p>
            </div>
        </Layout>
    )
}

export default ProjectsArtPage