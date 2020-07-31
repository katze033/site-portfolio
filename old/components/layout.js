import React from 'react'
import { Helmet } from 'react-helmet'
import Header from './header'
import Footer from './footer'

import '../styles/styles.css'
import layoutStyles from './modules/layout.module.css'

const Layout = (props) => {
    return (
        
        <div className={layoutStyles.container}>
            <Helmet>
            <title>Josh Katzenmeyer</title>
            <script src="https://kit.fontawesome.com/457588a6e7.js" crossorigin="anonymous"></script>
            </Helmet>
            <Header />
            <div className={layoutStyles.content}>
                {props.children}
            </div>
            <Footer />
        </div>
    )
}

export default Layout