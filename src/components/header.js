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
                        <Link to={`/projects/web`} className={headerStyles.nav__link} activeClassName={headerStyles.nav__linkactive}>Web</Link>
                    </li>
                    <li className={headerStyles.nav__list}>
                        <Link to={`/projects/art`} className={headerStyles.nav__link} activeClassName={headerStyles.nav__linkactive}>Art</Link>
                    </li>
                    <li className={headerStyles.nav__list}>
                        <a href="https://www.luxuryprison.com" className={headerStyles.nav__link} activeClassName={headerStyles.nav__linkactive}>Music</a>
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