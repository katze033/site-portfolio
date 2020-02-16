import React from "react"
import Layout from '../components/layout'

import contactStyles from '../components/modules/contact.module.css'

const MailingList = () => {
    return (
        <Layout>
            <div className={contactStyles.container}>
            <p>Enter your email below to receive a monthly newsletter showcasing recent work, highlights from the weekly blog posts, and upcoming events and projects.</p>
                <form name="mailinglist" method="post" action="/success" data-netlify="true" data-netlify-honeypot="bot-field">
                    <input type="hidden" name="bot-field" />
                    <input type="hidden" name="form-name" value="mailinglist" />
                    <div>
                        <input type="text" name="email" id="email" className={contactStyles.datainput} />
                    </div>
                    <ul className="actions">
                        <li>
                            <input type="submit" value="Subscribe" className="special" />
                        </li>
                    </ul>
                </form>
            </div>
        </Layout>
    )
}

export default MailingList