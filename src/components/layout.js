import React from 'react'
import { Helmet } from 'react-helmet'
import SEO from "../components/SEO"

import '../styles/styles.css'

const Layout = (props) => {
    return (
        <body>
            <Helmet>
                <title>Josh Katzenmeyer</title>
                <html lang="en" />
                <SEO />
            </Helmet>
            {props.children}
        </body>
    )
}

export default Layout