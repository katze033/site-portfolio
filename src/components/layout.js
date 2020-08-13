import React from 'react'
import { Helmet } from 'react-helmet'
import SEO from "../components/SEO"

import '../styles/styles.css'

const Layout = (props) => {
    return (
        <div>
            <Helmet>
                <title>Josh Katzenmeyer</title>
                <html lang="en" />
                
                <SEO />
            </Helmet>
            {props.children}
        </div >
    )
}

export default Layout