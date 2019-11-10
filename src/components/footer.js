import React from 'react'

import footerStyles from './modules/footer.module.css'

const Footer = () => {
    return (
        <footer className={footerStyles.footer}>
              
            <p className={footerStyles.copyright}>Josh Katzenmeyer &copy; 2020</p>
            <div className={footerStyles.socialicons}>
                <a href="https://www.twitter.com/luxpris" target="_blank">
                    <i class="fab fa-twitter"></i>
                </a>
                <a href="https://www.github.com/katze033" target="_blank">
                    <i class="fab fa-github"></i>
                </a>
                <a href="#!" target="_blank">
                    <i class="fab fa-linkedin"></i>
                </a>
                <a href="mailto:joshkatzenmeyer@gmail.com" target="_blank">
                    <i class="fas fa-envelope-square"></i>
                </a>
            </div>
        </footer>
    )
}

export default Footer