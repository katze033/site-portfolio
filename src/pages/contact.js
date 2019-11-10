import React from "react"
import Layout from '../components/layout'

import contactStyles from '../components/modules/contact.module.css'

const ContactPage = () => {
    return (
        <Layout>
            <h2>Josh Katzenmeyer</h2>
            <a href="tel:612-877-0604">612-877-0604</a>
            <br></br>
            <a href="mailto:joshkatzenmeyer@gmail.com">joshkatzenmeyer@gmail.com</a>
        </Layout>
    )
}

export default ContactPage