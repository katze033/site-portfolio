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
    	fixed(width:300, quality:50) {
        ...GatsbyContentfulFixed
      }
    }
    platform
    platformTokenNumber
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
                    <p id="platform"></p>
                    <p><b>Platform Token No.</b></p>
                    <p id="platformTokenNumber"></p>
                    <p><b>Latest Price</b></p>
                    <p id="last_price"></p>
                    <p><b>Owner</b></p>
                    <p id="collector"></p>
                    <p><b>Description</b></p>
                    <p id="description"></p>
                </div>
            </div>
            <Link to="/">Go Home</Link>
        </Layout>
    )
}

componentDidMount() {
    this.insertLoader()
    this.loadBlockchainData()
}

insertLoader() {
        let loader = "<div className=\"loader\"></div>"
        document.getElementById("platform").innerHTML = loader;
        document.getElementById("platformTokenNumber").innerHTML = loader;
        document.getElementById("last_price").innerHTML = loader;
        document.getElementById("collector").innerHTML = loader;
        document.getElementById("description").innerHTML = loader;
}

async loadBlockchainData() {
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

        //Loop this
        var tokenId = this.props.data.contentfulArtwork.platformTokenNumber
        
        
        fetch("https://api.opensea.io/api/v1/asset/"+contractAddress+"/"+tokenId+"/?format=json")
        .then(response => response.json())
        .then(response => {
            console.log(response) 
            document.getElementById("platform").innerHTML ="<a href=" + response.external_link + ">" + response.asset_contract.name
            document.getElementById("platformTokenNumber").innerHTML = '<a href=https://etherscan.io/token/' + contractAddress + '?a=' + response.token_id + '>' + response.token_id
            response.last_sale === null ? document.getElementById("last_price").innerHTML = "Not Yet Sold" : document.getElementById("last_price").innerHTML = response.last_sale.total_price/1000000000000000000 + " " + (response.last_sale.payment_token.symbol + " (~$" + (Math.floor((response.last_sale.payment_token.usd_price/1)*(response.last_sale.total_price/1000000000000000000)))) + ")"
            response.owner.user === null ? document.getElementById("collector").innerHTML = '<a href=https://etherscan.io/address/' + response.owner.address + '>' + response.owner.address : document.getElementById("collector").innerHTML = '<a href=https://etherscan.io/address/' + response.owner.address + '>' + response.owner.user.username           
            document.getElementById("description").innerHTML = response.description

        })       
    }
}

export default Art