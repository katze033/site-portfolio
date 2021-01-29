import React from 'react'
import SEO from '../components/SEO'


const NavBar = () => {
    return (
        <nav>
            <ul>
                <li className="navitem"><a href="#home">Home</a></li>
                <li className="navitem"><a href="#art">Art</a></li>
                <li className="navitem"><a href="#contact">Contact</a></li>
            </ul>
            <SEO/>
        </nav>
    )
}

export default NavBar