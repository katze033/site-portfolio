import React from "react"
import Layout from '../components/layout'

import contactStyles from '../components/modules/contact.module.css'

const ContactPage = () => {
    return (
        <Layout>
            <div className={contactStyles.container}>
                <p className={contactStyles.body}>Don't hesitate to say hello. To reach me, you can either fill out this form or use any of the links below.</p>
                <form method="post" action="/success" data-netlify-honeypot="bot-field" data-netlify="true">
                    <input type="hidden" name="bot-field" />
                    <input type="hidden" name="form-name" value="contact" />
                    <label>
                        Name<br></br>
                        <input type="text" name="name" id="name" className={contactStyles.datainput} /><br></br>
                    </label>
                    <label>
                        Email<br></br>
                        <input type="email" name="email" id="email" className={contactStyles.datainput} /><br></br>
                    </label>
                    <label>
                        Subject<br></br>
                        <input type="text" name="subject" id="subject" className={contactStyles.datainput} /><br></br>
                    </label>
                    <label>
                        Message<br></br>
                        <textarea name="message" id="message" rows="5" className={contactStyles.datainput} /><br></br>
                    </label>
                    <input type="submit" value="Send Message">Send</input>
                    <input type="reset" value="Clear" />
                </form>
            </div>
        </Layout>
    )
}

export default ContactPage