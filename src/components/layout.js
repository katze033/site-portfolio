import React from 'react'
import { Helmet } from 'react-helmet'
import SEO from "../components/SEO"
import Baskerville from "../styles/fonts/LibreBaskerville-Bold.ttf"
import Amiri from "../styles/fonts/Amiri-Regular.ttf"
import HindGunturRegular from "../styles/fonts/HindGuntur-Regular.ttf"



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