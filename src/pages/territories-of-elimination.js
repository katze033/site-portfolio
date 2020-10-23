import React from "react"
import Layout from '../components/layout'

import {Link} from 'gatsby'

const TerritoriesPage = () => {
    return (
        <Layout>
                <h1>Territories of Elimination</h1>
                <p>Territories of Elimination is an immersive A/V experience utilizing 3D animation in Blender and generative sound design via ORCA, Renoise, Pure Data and a Korg EMX-1.</p>
                <p>My intention with this series is to open space for reflection between chaos and tranquility. The project consists of 10+ 3D “territories” that bring my previous explorations in procedural design, minimalism, and geometric abstraction to a new digital medium. Each territory plays in an endless loop and is accompanied by audio produced via generative processes.</p>
                <p>I regard each territory as a psychic palette cleanser. Visual loops have the power to manifest a certainty that provides safety and freedom for the mind to wander. To pair this certainty with malleable audio that shifts and reconstructs itself from one second to the next has an intentionally distracting and meditative effect. It’s a contradiction that slows thought: the titular “elimination.” The elimination of panic and worry. The possibility that arises from stillness.</p>
                <p>In early 2021 (after all territories have been published as single edition NFTs on SuperRare), I will compile the audio from this project into a completed digital album. Holders of a Territories of Elimination NFT will receive a redeemable free download code to the album upon series completion.</p>
                <p>The first territory will be released in October 2020. I will update this page with relevant links to the project as it continues to grow.</p>
                <Link to="/">Go Home</Link>
        </Layout>
    )
}

export default TerritoriesPage