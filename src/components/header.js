import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'

import SEO from './SEO'
import headerStyles from './modules/header.module.css'

const Header = () => {
    return (
        <header className={headerStyles.header}>
            <div className={headerStyles.menutoggle}>
                <SEO></SEO>
                <Helmet
                    title="Josh Katzenmeyer"
                    description="Freelance web developer, artist, and musician."
                />
                <input type="checkbox" />
                <span></span>
                <span></span>
                <span></span>
                <ul className={headerStyles.navcontainer}>
                    <li className={headerStyles.nav__list}>
                        <Link to={`/`} className={headerStyles.nav__link} activeClassName={headerStyles.nav__linkactive}>Home</Link>
                    </li>
                    <li className={headerStyles.nav__list}>
                        <Link to={`/about`} className={headerStyles.nav__link} activeClassName={headerStyles.nav__linkactive}>About Me</Link>
                    </li>
                    <li className={headerStyles.nav__list}>
                        <Link to={`/projects`} className={headerStyles.nav__link} activeClassName={headerStyles.nav__linkactive}>My Projects</Link>
                    </li>
                    <li className={headerStyles.nav__list}>
                        <a href={`https://shop.joshkatzenmeyer.com/`} target="_blank" rel="noopener noreferrer" className={headerStyles.nav__link} activeClassName={headerStyles.nav__linkactive}>Shop</a>
                    </li>
                    <li className={headerStyles.nav__list}>
                        <Link to={`/blog`} className={headerStyles.nav__link} activeClassName={headerStyles.nav__linkactive}>Blog</Link>
                    </li>
                    <li className={headerStyles.nav__list}>
                        <Link to={`/contact`} className={headerStyles.nav__link} activeClassName={headerStyles.nav__linkactive}>Contact</Link>
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default Header