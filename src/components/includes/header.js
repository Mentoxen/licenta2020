import React from "react";
import {graphql, Link, useStaticQuery} from "gatsby";

const Header = () => {
  return (
    <div>
      <h1>Header</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  )
}

export default Header;
