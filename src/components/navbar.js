import React from 'react'
import SEO from '../components/SEO'

import { Link } from "gatsby"

const NavBar = () => {
    return (
        <nav>
            <ul>
                <li className="navitem"><Link to="/">Home</Link></li>
                <li className="navitem"><Link to="/art">Art</Link></li>
                <li className="navitem"><Link to="/#contact">Contact</Link></li>
            </ul>
            <SEO/>
        </nav>
    )
}

export default NavBar