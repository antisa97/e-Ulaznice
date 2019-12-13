import React from "react"
import Header from "./header"
import Main from "./main"
import Footer from "./footer"
import LayoutStyle from "../components/componentsStyles/layout.module.css"

const Layout = props => {
  return (
    <div>
      <Header />
      <Main>{props.children}</Main>
      <Footer />
    </div>
  )
}

export default Layout
