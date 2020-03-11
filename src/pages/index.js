import React from "react"
import Layout from '../components/layout'
import indexStyles from '../components/modules/index.module.css'

import { Link } from 'gatsby'


const IndexPage = () => {
    return (
        <Layout>
            <div className={indexStyles.bodyContainer}>
                <h1 className={indexStyles.body}>Hey there.</h1>
                <h2 className={indexStyles.body}>My name is Josh, and I am <br></br>
                    <div className={indexStyles.sliding__divContainerContainer}>
                        <div className={indexStyles.sliding__divContainer}>
                            <span className={indexStyles.sliding__divRole}>a web developer.</span>
                            <span className={indexStyles.sliding__divRole}>an artist.</span>
                            <span className={indexStyles.sliding__divRole}>a musician.</span>
                        </div>
                    </div>
                </h2>
                <p>
                    Read more <Link to="/about">about me.</Link>
                </p>
            </div>
        </Layout>
    )
}


export default IndexPage