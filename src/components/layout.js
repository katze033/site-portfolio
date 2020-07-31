import React from 'react'
import { Helmet } from 'react-helmet'

import '../styles/styles.css'

const Layout = (props) => {
    return (
        <div>
            <Helmet>
            <title>Josh Katzenmeyer</title>
            </Helmet>
            <div>
                {props.children}
            </div>
        </div>
    )
}

export default Layout