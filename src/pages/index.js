import React from "react"
import Layout from '../components/layout'
import indexStyles from '../components/modules/index.module.css'

// import profileImage from '../components/images/home-profile.jpg'

const IndexPage = () => {
    return (
        <Layout>
            <div className={indexStyles.gridContainer}>
            <h1 className={indexStyles.body}>Hey there.</h1>
            <h2 className={indexStyles.body}>My name is Josh, and I am <br></br>
                <div className={indexStyles.sliding__divContainer}>
                    <span className={indexStyles.sliding__divRole}>a web developer.</span>
                    <span className={indexStyles.sliding__divRole}>an artist.</span>
                    <span className={indexStyles.sliding__divRole}>a musician.</span>
                </div>
            </h2>
            </div>
        </Layout>
    )
}

/// between h1 and h2? <img className={indexStyles.home__img} alt= "Josh Katzenmeyer" src={profileImage}></img>


export default IndexPage