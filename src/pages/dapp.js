import React, { Component } from "react"
import Layout from '../components/layout'
import SEO from '../components/SEO'
import { graphql } from "gatsby"
import Web3 from 'web3'



class Dapp extends Component {
    render() {
        return (
            <Layout>
                <h1>Test</h1>
                <p>Your account is: {this.state.account} </p>
                <h2>Rewards:</h2>
                <div id="rewards">
                </div>
                <button onClick={this.loadBlockchainData}>Connect to MetaMask</button>
                <SEO />
            </Layout>
        )
    }



    componentDidMount() {
        this.fetchArtworkData()
        this.loadBlockchainData()
    }

    fetchArtworkData() {
        const artworkData = graphql`
        query {
            allContentfulArtwork (sort: {fields:createdAt, order:DESC}) {
                edges {
                    node {
                        title
                        platform
                        platformTokenNumber
                        createdAt(formatString: "YYYY MMMM DD")
                    }
                }
            }
        }`
    }

    async loadBlockchainData() {

        const web3 = new Web3(Web3.givenProvider || "http://localhost:8000")
        //const network = await web3.eth.net.getNetworkType()

        //Fetch Account
        const accounts = await web3.eth.getAccounts()
        await window.ethereum.enable()
        this.setState({ account: accounts[0] })

        //Change account
        window.ethereum.on('accountsChanged', (accounts) => {
            this.setState({ account: accounts[0] })
        })

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



        //Verify ownership of SuperRare tokens
        var srContractAddr = "0xb932a70A57673d89f4acfFBE830E8ed7f75Fb9e0"
        var instance = await new web3.eth.Contract(abi, srContractAddr)

        //Loop this
        var tokenId = '12916'
        var owner = await instance.methods.ownerOf(tokenId).call()

        //Response
        var para = document.createElement('P')
        para.innerText = "Owner: " + owner + ", " + "Token ID: " + "" + tokenId
        document.body.appendChild(para)
        var rewards = document.createElement('P')
        if (this.state.account === owner) {
            rewards.innerText = "The tokens you own unlock the following extras..."
        } else {
            rewards.innerText = "It doesn't look like you own any tokens that unlock extra content. If this seems incorrect, don't hesitate to contact me. Thank you!"
        }
        document.body.appendChild(rewards)

    }

    constructor(props) {
        super(props)
        this.state = { account: '' }
    }
}

export default Dapp

/*

        //Verify ownership of KnownOrigin tokens
        var koContractAddr = "0xfbeef911dc5821886e1dda71586d90ed28174b7d"
        var instance = await new web3.eth.Contract(abi, koContractAddr)

        //loop this
        var tokenId = '190601'
        var owner = await instance.methods.ownerOf(tokenId).call()

        //Response
        var para = document.createElement('P')
        para.innerText = "Owner: " + owner + ", " + "Token ID: " + "" + tokenId
        document.body.appendChild(para)
        var rewards = document.createElement('P')
        if (this.state.account === owner) {
            rewards.innerText = "The tokens you own unlock the following extras..."
        } else {
            rewards.innerText = "It doesn't look like you own any tokens that unlock extra content. If this seems incorrect, don't hesitate to contact me. Thank you!"
        }
        document.body.appendChild(rewards)

        //Verify ownership of Rarible tokens
        var raribleContractAddr = "0x60f80121c31a0d46b5279700f9df786054aa5ee5"
        var instance = await new web3.eth.Contract(abi, raribleContractAddr)

        //loop this
        var tokenId = '1772'
        var owner = await instance.methods.ownerOf(tokenId).call()
        console.log(tokenId, owner)

        //Response
        var para = document.createElement('P')
        para.innerText = "Owner: " + owner + ", " + "Token ID: " + "" + tokenId
        document.body.appendChild(para)
        var rewards = document.createElement('P')
        if (this.state.account === owner) {
            rewards.innerText = "The tokens you own unlock the following extras..."
        } else {
            rewards.innerText = "It doesn't look like you own any tokens that unlock extra content. If this seems incorrect, don't hesitate to contact me. Thank you!"
        }
        document.body.appendChild(rewards)
*/