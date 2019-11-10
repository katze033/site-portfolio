import React from "react"
import Layout from '../components/layout'
import { Link, graphql, useStaticQuery } from 'gatsby'

const BlogPage = () => {
    const data = useStaticQuery(graphql`
  query {
    allContentfulBlogPost (sort: {fields:publishedDate, order:DESC}) {
      edges {
        node {
          title
          slug
          publishedDate(formatString:"MMMM DD, YYYY")
        }
      }
    }
  }
  `)

    return (
        <Layout>
            <ol>
                {data.allContentfulBlogPost.edges.map((edge) => {
                    return (
                        <li>
                            <h2><Link to={`/blog/${edge.node.slug}`}>{edge.node.title}</Link></h2>
                            <p>{edge.node.publishedDate}</p>
                        </li>
                    )
                })}
            </ol>
        </Layout>
    )
}

export default BlogPage