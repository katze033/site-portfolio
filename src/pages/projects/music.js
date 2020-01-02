import React from 'react';

import { Link } from 'gatsby';

import Layout from '../../components/layout';

const ProjectsMusicPage = () => {
    return (
        <Layout>
            <div>
                <Link to="/projects">Go back</Link>
                <p>Music projects</p>
            </div>
        </Layout>
    )
}

export default ProjectsMusicPage