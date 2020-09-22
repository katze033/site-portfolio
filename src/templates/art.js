import React, { Component } from 'react'
import { graphql, Link } from 'gatsby'
import Img from "gatsby-image"
import Web3 from 'web3'


import Layout from '../components/layout'

export const query = graphql`
  query ($slug: String!) {
  contentfulArtwork(slug: {eq: $slug}) {
    title
    previewImage {
    	fixed(width:300) {
        ...GatsbyContentfulFixed
      }
    }
    platform
    platformTokenNumber
    linkToPlatform
  }
}`

  

class Art extends Component {
render() {            
    return (
        <Layout>
            <h1>{this.props.data.contentfulArtwork.title}</h1>
            <div className="artwork-container">
                <div className="artwork-image">
                    <Img
                            fixed={this.props.data.contentfulArtwork.previewImage.fixed}
                            key={this.props.data.contentfulArtwork.previewImage.fixed.src} 
                            alt={this.props.data.contentfulArtwork.title} 
                    />
                </div>
                <div className="artwork-details">
                    <p><b>Platform</b></p>
                    <p>{this.props.data.contentfulArtwork.platform}</p>
                    <p><b>Platform Token No.</b></p>
                    <p id="platformTokenNumber"></p>
                    <p><b>Latest Price</b></p>
                    <p id="price"></p>
                    <p><b>Collector</b></p>
                    <p id="collector"></p>
                    <p><b>Description</b></p>
                    <p>Awaiting termination. 1200x1500. GIF. 2.66MB.</p>
                </div>
            </div>
            <Link to="/">Go Home</Link>
        </Layout>
    )
}

componentDidMount() {
    this.loadBlockchainData()
}

async loadBlockchainData(props) {
    const web3 = new Web3(Web3.givenProvider || "http://localhost:8000")
    const abi = [{
            "constant": true,
            "inputs": [
                {
                    "name": "tokenId",
                    "type": "uint256"
                }
            ],
            "name": "ownerOf",
            "outputs": [
                {
                    "name": "",
                    "type": "address"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        }]
        let contractAddress
        switch (this.props.data.contentfulArtwork.platform) {
            case 'SuperRare' :
                contractAddress = "0xb932a70A57673d89f4acfFBE830E8ed7f75Fb9e0"
            break
            case 'Rarible' :
                contractAddress = "0x60f80121c31a0d46b5279700f9df786054aa5ee5"
            default :
                console.log("Hmm, doesn't match an address on file")
        }


        //Verify ownership of SuperRare tokens
        var instance = await new web3.eth.Contract(abi, contractAddress)

        //Loop this
        var tokenId = this.props.data.contentfulArtwork.platformTokenNumber
        var owner = await instance.methods.ownerOf(tokenId).call()

        //Response
        document.getElementById("platformTokenNumber").innerHTML = '<a href=https://etherscan.io/token/' + contractAddress + '?a=' + tokenId + '>' + tokenId
        document.getElementById("collector").innerHTML = '<a href=https://etherscan.io/address/' + owner + '>' + owner
    }

    



}

export default Art


/*


*/