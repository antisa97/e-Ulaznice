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

const Header = props => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => setIsOpen(!isOpen)
  return (
    <div className={HeaderStyle.header}>
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
          <NavbarBrand className={HeaderStyle.navbarName} href="/">
            NASLOVNICA
          </NavbarBrand>
          <NavbarBrand className={HeaderStyle.navbarName} href="/dogadaji">
            DOGAĐAJI
          </NavbarBrand>
          <NavbarBrand className={HeaderStyle.navbarName} href="/novosti">
            NOVOSTI
          </NavbarBrand>
          <NavbarBrand className={HeaderStyle.navbarName} href="/izvjestaji">
            IZVJEŠTAJI
          </NavbarBrand>
          <NavbarBrand className={HeaderStyle.navbarName} href="/registracija">
            REGISTRACIJA
          </NavbarBrand>
        </div>
        {/* </Collapse> */}

        <div className={HeaderStyle.input}>
          <InputGroup size="sm">
            <Input placeholder="e-mail" />
          </InputGroup>
          <InputGroup size="sm">
            <Input placeholder="lozinka" />
          </InputGroup>
          <Button className={HeaderStyle.button} color="info" size="sm">
            PRIJAVI ME
          </Button>{" "}
          {/* <Button className={HeaderStyle.button2} outline color="info">
            PRIJAVI ME
          </Button>{" "} */}
        </div>
      </Navbar>
    </div>
  )
}

export default Header
