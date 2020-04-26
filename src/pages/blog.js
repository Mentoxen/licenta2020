import React from 'react'
import Layout from "../components/layout/layout";
import {Link, graphql, useStaticQuery} from "gatsby";

const BlogPage = () => {

  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost (
        sort: {
          fields: createdAt,
          order: ASC
        }
      ) {
        edges {
          node {
            title
            slug        
            createdAt(formatString: "Do MMMM, YYYY")
          }
        }
      }
    }
  `)

  return(
    <Layout>
      {
        data.allContentfulBlogPost.edges.map((postData, index) => {
          return (
            <div key={index}>
              <Link to={`./blog/${postData.node.slug}`}>
                { postData.node.title}
              </Link>
              { postData.node.createdAt}
            </div>
          )
        })
      }
    </Layout>
  )
}

export default BlogPage
