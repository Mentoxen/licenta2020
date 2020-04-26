import React from "react";
import Layout from "../components/layout/layout";
import { graphql } from "gatsby";
import {documentToReactComponents} from "@contentful/rich-text-react-renderer";

export const query = graphql`
  query($slug: String) {
    contentfulBlogPost(slug: {eq: $slug} ) {
      title
      createdAt(formatString: "Do MMMM, YYYY")
      content {
        json
      }
    }
  }
`

const blogTemplate = (props) => {
  const { title, createdAt, content } = props.data.contentfulBlogPost;
  const options = {
    renderNode: {
      "embedded-asset-block": (node) => {
        const { fields } = node.data.target;
        return <img src={fields.file['en-US'].url} />
      }
    }
  }

  return (
    <Layout>
      <h1>{title}</h1>
      <small>{createdAt}</small>
      {documentToReactComponents(content.json, options)}
    </Layout>
  )
}

export default blogTemplate
