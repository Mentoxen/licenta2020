import React from "react";
import Layout from "../components/layout/layout";
import { Link } from "gatsby";

const NotFound = () => {

  return(
    <Layout>
      <h1>404 not found</h1>
      <Link to='./'>
        Go home
      </Link>
    </Layout>
  )
}

export default NotFound