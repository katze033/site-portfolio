import React, { Component } from 'react'
import { graphql } from 'gatsby'
import NavBar from '../components/navbar'

import Layout from '../components/layout'

export const query = graphql`
  query ($slug: String!) {
  contentfulArtwork(slug: {eq: $slug}) {
    title
    previewImage {
    	fluid {
        ...GatsbyContentfulFluid
      }
    }
    video {
        file {
          url
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
                <NavBar></NavBar>
                <div className="artpage">
                    <h1 id="artwork-title">{this.props.data.contentfulArtwork.title}</h1>
                    <div className="artwork-container">
                        <div className="artwork-image">
                            <video
                                alt={this.props.data.contentfulArtwork.title}
                                muted
                                autoPlay
                                controls
                                loop
                            >
                                <source
                                    src={this.props.data.contentfulArtwork.video.file.url}
                                />
                            </video>
                        </div>
                        <div className="artwork-details">
                            <p><b>Platform</b></p>
                            <p id="platform"></p>
                            <p><b>Platform Token No.</b></p>
                            <p id="platformTokenNumber"></p>
                            <p><b>Last Sale Price</b></p>
                            <p id="last_price"></p>
                            <p><b>Owner</b></p>
                            <p id="collector"></p>
                            <p><b>Description</b></p>
                            <p id="description"></p>
                            <a className="button-lg" id="shopLink">
                                Loading...
                            </a>
                        </div>
                    </div>
                </div>
            </Layout>
        )
    }

    componentDidMount() {
        this.insertLoader()
        this.loadBlockchainData()
    }

    insertLoader() {
        let loader = "<div className=\"loader\"></div>"
        document.getElementById("platform").innerHTML = "Loading...";
        document.getElementById("platformTokenNumber").innerHTML = "Loading...";
        document.getElementById("last_price").innerHTML = "Loading...";
        document.getElementById("collector").innerHTML = "Loading...";
        document.getElementById("description").innerHTML = "Loading...";
    }

    async loadBlockchainData() {
        let contractAddress
        switch (this.props.data.contentfulArtwork.platform) {
            case 'SuperRare':
                contractAddress = "0xb932a70A57673d89f4acfFBE830E8ed7f75Fb9e0"
                break
            case 'Rarible':
                contractAddress = "0x60f80121c31a0d46b5279700f9df786054aa5ee5"
                break
            default:
                console.log("Hmm, doesn't match an address on file")
        }

        //Loop this
        var tokenId = this.props.data.contentfulArtwork.platformTokenNumber


        fetch("https://api.opensea.io/api/v1/asset/" + contractAddress + "/" + tokenId + "/?format=json")
            .then(response => response.json())
            .then(response => {
                console.log(response)
                document.getElementById("platform").innerHTML = "<a href=" + response.external_link + ">" + response.asset_contract.name
                document.getElementById("platformTokenNumber").innerHTML = '<a href=https://etherscan.io/token/' + contractAddress + '?a=' + response.token_id + '>' + response.token_id
                response.last_sale === null ? document.getElementById("last_price").innerHTML = "Not Yet Sold" : document.getElementById("last_price").innerHTML = response.last_sale.total_price / 1000000000000000000 + " " + (response.last_sale.payment_token.symbol + " (~$" + (Math.floor((response.last_sale.payment_token.usd_price / 1) * (response.last_sale.total_price / 1000000000000000000)))) + ")"
                response.owner.user === null ? document.getElementById("collector").innerHTML = '<a href=https://etherscan.io/address/' + response.owner.address + '>' + response.owner.address : document.getElementById("collector").innerHTML = '<a href=https://etherscan.io/address/' + response.owner.address + '>' + response.owner.user.username
                document.getElementById("description").innerHTML = response.description
                var shopLink = document.getElementById("shopLink")
                shopLink.href = response.external_link
                shopLink.innerHTML = "Shop"

                
            })
    }
}

export default Art