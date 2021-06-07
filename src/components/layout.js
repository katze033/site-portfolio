import React from 'react'
import { Helmet } from 'react-helmet'
import SEO from "../components/SEO"


const Layout = (props) => {
    return (
        <div>
            <Helmet>
                <title>Josh Katzenmeyer</title>
                <html lang="en" />                
                <SEO />
            </Helmet>
            <main>
            {props.children}
            </main>
        </div >
    )
}

export default Layout