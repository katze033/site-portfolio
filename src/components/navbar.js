import React from 'react'
import SEO from '../components/SEO'

import { Link } from "gatsby"

const NavBar = () => {
    return (
        <nav>
            <ul>
                <li className="navitem"><Link to="/" activeClassName="active">Home</Link></li>
                <li className="navitem"><Link to="/art" activeClassName="active">Art</Link></li>
                <li className="navitem"><Link to="/#contact" activeClassName="active">Contact</Link></li>
            </ul>
            <SEO/>
        </nav>
    )
}

export default NavBar