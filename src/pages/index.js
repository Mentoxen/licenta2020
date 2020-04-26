import React from "react"
import { Link} from "gatsby";
import Layout from "../components/layout/layout";

const HomePage = () => {
  return (
    <Layout>
      <h1>Home page</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad atque consequatur, illum nam quod vel.</p>
      <Link to="/">www</Link>
    </Layout>
  )
}

export default HomePage
