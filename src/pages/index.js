import React from "react"
import Layout from '../components/layout'
import indexStyles from '../components/modules/index.module.css'

import profileImage from '../components/images/home-profile.jpg'

const IndexPage = () => {
    return (
        <Layout>
            <h1 className={indexStyles.body}>Hey there.</h1>
            <img className={indexStyles.home__img} alt= "Josh Katzenmeyer" src={profileImage}></img>
            <h2 className={indexStyles.body}>My name is Josh, and I am <br></br>
                <div className={indexStyles.sliding__divcontainer}>
                    <span className={indexStyles.sliding__divrole}>a web developer.</span>
                    <span className={indexStyles.sliding__divrole}>an artist.</span>
                    <span className={indexStyles.sliding__divrole}>a musician.</span>
                </div>
            </h2>
        </Layout>
    )
}

export default IndexPage