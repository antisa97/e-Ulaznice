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
import logo from "../images/logo.png"
import HeaderStyle from "../components/componentsStyles/header.module.css"
import NavLink from "./links"

const Header = props => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => setIsOpen(!isOpen)
  return (
    //<div className={HeaderStyle.header}>
    <Navbar
      className={HeaderStyle.navbar}
      fixed="top"
      // color="light"
      light
      expand="md"
      width="100px"
    >
      <NavbarBrand className={HeaderStyle.logo} href="/">
        <img
          className={HeaderStyle.logoImg}
          src={logo}
          alt="Logo"
          width="100%"
        />
        <h1 className={HeaderStyle.logoName}>e-Ulaznice</h1>
      </NavbarBrand>
      {/* <div className={HeaderStyle.restnavbar}> */}
      {/* <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar> */}
      <div className={HeaderStyle.navbarNames}>
        <NavLink to="/" exact="true" className={HeaderStyle.navbarName}>
          NASLOVNICA
        </NavLink>
        <NavLink to="/dogadaji" className={HeaderStyle.navbarName}>
          DOGAĐAJI
        </NavLink>
        <NavLink to="/novosti" className={HeaderStyle.navbarName}>
          NOVOSTI
        </NavLink>
        <NavLink to="/izvjestaji" className={HeaderStyle.navbarName}>
          IZVJEŠTAJI
        </NavLink>
        <NavLink to="/registracija" className={HeaderStyle.navbarName}>
          REGISTRACIJA
        </NavLink>
      </div>
      {/* </Collapse> */}

      <div className={HeaderStyle.input}>
        <InputGroup className={HeaderStyle.mail} size="sm">
          <Input placeholder="e-mail" />
        </InputGroup>
        <InputGroup className={HeaderStyle.lozinka} size="sm">
          <Input placeholder="lozinka" />
        </InputGroup>
        {/* <Button className={HeaderStyle.button} color="info" size="sm">
          PRIJAVI ME
        </Button>{" "} */}
        <Button className={HeaderStyle.button2} outline color="info">
          PRIJAVI ME
        </Button>{" "}
      </div>
    </Navbar>
    // </div>
  )
}

export default Header
