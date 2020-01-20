import React, { useState } from "react"

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  InputGroup,
  Input,
  Button,
} from "reactstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import NavLink from "./links"
import HeaderBottomStyle from "../components/componentsStyles/headerBottom.module.css"

const Header = props => {
  return (
    <div className={HeaderBottomStyle.input} id={HeaderBottomStyle.inputBottom}>
      <NavLink to="/" exact="true" className={HeaderBottomStyle.navbarName}>
        NASLOVNICA
      </NavLink>
      <NavLink to="/dogadaji" className={HeaderBottomStyle.navbarName}>
        DOGAĐAJI
      </NavLink>
      <NavLink to="/novosti" className={HeaderBottomStyle.navbarName}>
        NOVOSTI
      </NavLink>
      <NavLink to="/izvjestaji" className={HeaderBottomStyle.navbarName}>
        IZVJEŠTAJI
      </NavLink>
      <NavLink to="/registracija" className={HeaderBottomStyle.navbarName}>
        Više
      </NavLink>
    </div>
  )
}

export default Header
