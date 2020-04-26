import React from "react";
import Header from "../includes/header";
import Footer from "../includes/footer";

import  "../../assets/style/coreStyle.scss";
import Head from "../head";

const Layout = ({ children }) => {
  return(
    <>
      <Head  />
      <Header />
      {children}
      <Footer />
    </>
  )
}

export default Layout
