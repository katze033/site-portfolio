import React from "react"
import Layout from '../components/layout'
import { Link, graphql, useStaticQuery } from 'gatsby'

import blogStyles from '../components/modules/blog.module.css'

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
          <p>The logs serve as a weekly snapshot of content I've found inspiring, entertaining, or thoughtful. Within you'll find a collection of articles, songs, images, and quotes.</p>
            <ol className={blogStyles.blogList}> 
                {data.allContentfulBlogPost.edges.map((edge) => {
                    return (
                        <li>
                            <h2><Link to={`/blog/${edge.node.slug}`} className={blogStyles.title}>{edge.node.title}</Link></h2>
                            <p className={blogStyles.date}>{edge.node.publishedDate}</p>
                        </li>
                    )
                })}
            </ol>
        </Layout>
    )
}

export default BlogPage