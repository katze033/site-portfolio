import React from "react"
import Layout from '../components/layout'

import contactStyles from '../components/modules/contact.module.css'

const ContactPage = () => {
    return (
        <Layout>
            <p>If you'd like to inquire about hiring, commissions, booking, or anything else, feel free to contact me using the form here or any of the icons at the bottom of this page.</p>
            <div className={contactStyles.container}>
                <form name="contact" method="post" action="/success" data-netlify="true" data-netlify-honeypot="bot-field">
                    <input type="hidden" name="bot-field" />
                    <input type="hidden" name="form-name" value="contact" />
                    <div>
                        <label htmlFor="name">Name</label>
                        <br></br>
                        <input type="text" name="name" id="name" className={contactStyles.datainput} />
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <br></br>
                        <input type="text" name="email" id="email" className={contactStyles.datainput} />
                    </div>
                    <div>
                        <label htmlFor="subject">Subject</label>
                        <br></br>
                        <input type="text" name="subject" id="subject" className={contactStyles.datainput} />
                    </div>
                    <div>
                        <label htmlFor="message">Message</label>
                        <br></br>
                        <textarea name="message" id="message" rows="5" className={contactStyles.datainput} />
                    </div>
                    <ul className="actions">
                        <li>
                            <input type="submit" value="Send Message" className="special" />
                        </li>
                        <li>
                            <input type="reset" value="Clear" />
                        </li>
                    </ul>
                </form>
            </div>
        </Layout>
    )
}

export default ContactPage