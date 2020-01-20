import React, { useState } from "react"
import { Link } from "gatsby"
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
import home from "../images/home.png"
import events from "../images/iconCalendar4.png"
import news from "../images/iconNews.png"
import blog from "../images/iconBlog.png"
import HeaderStyle from "../components/componentsStyles/header.module.css"
import {
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap"
import dots from "../images/dots.png"

const Header = props => {
  const [dropdownOpen, setOpen] = useState(false)

  const toggle = () => setOpen(!dropdownOpen)
  return (
    <div className={HeaderBottomStyle.nav}>
      <div className={HeaderBottomStyle.iconContainer}>
        {/* <NavLink to="/" exact="true" className={HeaderBottomStyle.iconContainer}> */}
        <Link to="/">
          <img
            className={HeaderBottomStyle.icon}
            id={HeaderBottomStyle.homeIcon}
            src={home}
          ></img>
        </Link>
        {/* <NavLink to="/" exact="true" className={HeaderBottomStyle.navbarName}>
          NASLOVNICA
        </NavLink> */}
        <Link
          to="/"
          className={HeaderBottomStyle.navbarName}
          activeClassName={HeaderBottomStyle.navbarName__active}
        >
          NASLOVNICA
        </Link>
      </div>
      {/* <p className={HeaderBottomStyle.navbarName}>NASLOVNICA</p> */}
      {/* </NavLink> */}
      {/* <NavLink to="/dogadaji" className={HeaderBottomStyle.iconContainer}> */}
      <div className={HeaderBottomStyle.iconContainer}>
        <Link to="/dogadaji">
          <img className={HeaderBottomStyle.icon} src={events}></img>
        </Link>
        {/* <NavLink to="/dogadaji" className={HeaderBottomStyle.navbarName}>
          DOGAĐAJI
        </NavLink> */}
        <Link
          to="/dogadaji"
          className={HeaderBottomStyle.navbarName}
          activeClassName={HeaderBottomStyle.navbarName__active}
        >
          DOGAĐAJI
        </Link>
        {/* <p className={HeaderBottomStyle.navbarName}> DOGAĐAJI</p> */}
        {/* </NavLink> */}
      </div>
      {/* <NavLink to="/novosti" className={HeaderBottomStyle.iconContainer}> */}
      <div className={HeaderBottomStyle.iconContainer}>
        <Link to="/novosti">
          <img className={HeaderBottomStyle.icon} src={news}></img>
        </Link>
        {/* <NavLink to="/novosti" className={HeaderBottomStyle.navbarName}>
          NOVOSTI
        </NavLink> */}
        <Link
          to="/novosti"
          className={HeaderBottomStyle.navbarName}
          activeClassName={HeaderBottomStyle.navbarName__active}
        >
          NOVOSTI
        </Link>
        {/* <p className={HeaderBottomStyle.navbarName}> NOVOSTI</p> */}
        {/* </NavLink> */}
      </div>
      {/* <NavLink to="/izvjestaji" className={HeaderBottomStyle.iconContainer}> */}
      <div className={HeaderBottomStyle.iconContainer}>
        <Link to="/izvjestaji">
          <img className={HeaderBottomStyle.icon} src={blog}></img>
        </Link>
        {/* <NavLink to="/izvjestaji" className={HeaderBottomStyle.navbarName}>
          IZVJEŠTAJI
        </NavLink> */}
        <Link
          to="/izvjestaji"
          className={HeaderBottomStyle.navbarName}
          activeClassName={HeaderBottomStyle.navbarName__active}
        >
          IZVJEŠTAJI
        </Link>
      </div>
      {/* <p className={HeaderBottomStyle.navbarName}> IZVJEŠTAJI</p> */}
      {/* </NavLink> */}
      {/* <Link
        to="/registracija"
        className={HeaderBottomStyle.navbarName}
        activeClassName={HeaderBottomStyle.navbarName__active}
      >
        Više
      </Link> */}
      <ButtonDropdown isOpen={dropdownOpen} toggle={toggle} direction="up">
        <DropdownToggle
          caret
          className={HeaderBottomStyle.button}
          class="btn noHover"
        >
          {" "}
          <img className={HeaderBottomStyle.icon} src={dots}></img>
        </DropdownToggle>
        <DropdownMenu>
          <div className={HeaderBottomStyle.dropU}>
            <Link
              to="/registracija"
              className={HeaderBottomStyle.navbarName}
              activeClassName={HeaderBottomStyle.navbarName__active}
            >
              REGISTRACIJA
            </Link>
            <Link
              to="/registracija"
              className={HeaderBottomStyle.navbarName}
              activeClassName={HeaderBottomStyle.navbarName__active}
            >
              PRIJAVA
            </Link>
          </div>
          {/* <DropdownItem header>Header</DropdownItem>
          <DropdownItem disabled>Action</DropdownItem>
          <DropdownItem>Another Action</DropdownItem>
          <DropdownItem divider />
          <DropdownItem>Another Action</DropdownItem> */}
        </DropdownMenu>
      </ButtonDropdown>
    </div>
  )
}

export default Header
