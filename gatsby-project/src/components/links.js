import React from "react"
import { Link } from "gatsby"
import HeaderStyle from "../components/componentsStyles/header.module.css"
import HeaderBottomStyle from "../components/componentsStyles/headerBottom.module.css"

export default ({ children, ...rest }) => (
  <Link
    className={HeaderStyle.navbarName}
    className={HeaderBottomStyle.navbarName}
    activeClassName={HeaderStyle.navbarName__active}
    activeClassName={HeaderBottomStyle.navbarName__active}
    {...rest}
  >
    {children}
  </Link>
)
