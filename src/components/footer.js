import React from 'react'

import footerStyles from './modules/footer.module.css'

const Footer = () => {
    return (
        <footer className={footerStyles.footer}>
              
            <p className={footerStyles.copyright}>Josh Katzenmeyer &copy; 2020</p>
            <div className={footerStyles.socialicons}>
                <a href="https://www.twitter.com/luxpris" target="_blank">
                    <i class="fab fa-twitter fa-10x"></i>
                </a>
                <a href="https://www.github.com/katze033" target="_blank">
                    <i class="fab fa-github fa-10x"></i>
                </a>
                <a href="#!" target="_blank">
                    <i class="fab fa-linkedin fa-10x"></i>
                </a>
            </div>
        </footer>
    )
}

export default Footer