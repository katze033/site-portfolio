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