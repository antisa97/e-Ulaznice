import React from "react"
import { Link } from "gatsby"
import HeaderStyle from "../components/componentsStyles/header.module.css"

export default ({ children, ...rest }) => (
  <Link
    className={HeaderStyle.navbarName}
    activeClassName={HeaderStyle.navbarName__active}
    {...rest}
  >
    {children}
  </Link>
)
