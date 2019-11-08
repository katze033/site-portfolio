import React from 'react'

import footerStyles from './modules/footer.module.css'

const Footer = () => {
    return (
        <footer className={footerStyles.footer}>
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
            </div>  
            <p>Josh Katzenmeyer &copy; 2020</p>
            
        </footer>
    )
}

export default Footer