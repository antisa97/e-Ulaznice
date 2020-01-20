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
import home from "../images/iconHome.png"
import events from "../images/iconCalendar4.png"
import news from "../images/iconNews.png"
import blog from "../images/iconBlog.png"

const Header = props => {
  return (
    <div className={HeaderBottomStyle.input} id={HeaderBottomStyle.inputBottom}>
      <NavLink to="/" exact="true" className={HeaderBottomStyle.iconContainer}>
        <img className={HeaderBottomStyle.icon} src={home}></img>
        <p className={HeaderBottomStyle.navbarName}>NASLOVNICA</p>
      </NavLink>
      <NavLink to="/dogadaji" className={HeaderBottomStyle.iconContainer}>
        <img className={HeaderBottomStyle.icon} src={events}></img>
        <p className={HeaderBottomStyle.navbarName}> DOGAĐAJI</p>
      </NavLink>
      <NavLink to="/novosti" className={HeaderBottomStyle.iconContainer}>
        <img className={HeaderBottomStyle.icon} src={news}></img>
        <p className={HeaderBottomStyle.navbarName}> NOVOSTI</p>
      </NavLink>
      <NavLink to="/izvjestaji" className={HeaderBottomStyle.iconContainer}>
        <img className={HeaderBottomStyle.icon} src={blog}></img>
        <p className={HeaderBottomStyle.navbarName}> IZVJEŠTAJI</p>
      </NavLink>
      <NavLink to="/registracija">Više</NavLink>
    </div>
  )
}

export default Header
