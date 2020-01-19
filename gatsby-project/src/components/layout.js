import React from "react"
import Header from "./header"
import Main from "./main"
import Footer from "./footer"
import HeaderBottom from "./headerBottom"
import LayoutStyle from "../components/componentsStyles/layout.module.css"

const Layout = props => {
  return (
    <div className={LayoutStyle.layout}>
      <Header />
      <Main>{props.children}</Main>
      <Footer />
      <HeaderBottom />
    </div>
  )
}

export default Layout
