import React from "react";
import { graphql, useStaticQuery } from "gatsby";

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)

  const { author } = data.site.siteMetadata;

  return (
    <footer>
      <p>Created by {author}</p>
    </footer>
  )
}

export default Footer;


