import React from 'react'
import { Link } from 'gatsby'

import headerStyles from './modules/header.module.css'

const Header = () => {
    return (
        <header className={headerStyles.header}>
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
                <Link to={`/blog`} className={headerStyles.nav__link} activeClassName={headerStyles.nav__linkactive}>Blog</Link>
                </li>
                <li className={headerStyles.nav__list}>
                <Link to={`/contact`} className={headerStyles.nav__link} activeClassName={headerStyles.nav__linkactive}>Contact</Link>
                </li>
            </ul>
            <div class="social-icons">
                <a href="https://www.twitter.com/luxpris">
                    <i class="fab fa-twitter fa-10x"></i>
                </a>
                <a href="https://www.github.com/katze033">
                    <i class="fab fa-github fa-10x"></i>
                </a>
                <a href="#!">
                    <i class="fab fa-linkedin fa-10x"></i>
                </a>
            </div>        </header>
    )
}

export default Header