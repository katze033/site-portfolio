import React from 'react'
import { Helmet } from 'react-helmet'
import SEO from "../components/SEO"

import '../styles/styles.css'

const Layout = (props) => {
    return (
        <div>
            <Helmet>
            <title>Josh Katzenmeyer</title>
            <SEO />
            </Helmet>
            <div>
                {props.children}
            </div>
        </div>
    )
}

export default Layout