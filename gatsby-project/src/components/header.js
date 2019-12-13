import React, { useState } from "react"
import { Collapse, Navbar, NavbarToggler, NavbarBrand } from "reactstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import logo from "../images/logo.png"
import HeaderStyle from "../components/componentsStyles/header.module.css"

const Header = props => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => setIsOpen(!isOpen)
  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand className={HeaderStyle.logo} href="/">
          <img
            className={HeaderStyle.logoImg}
            src={logo}
            alt="Logo"
            width="100%"
          />
          <h1 className={HeaderStyle.logoName}>e-Ulaznice</h1>
        </NavbarBrand>
        <div className={HeaderStyle.restnavbar}>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <NavbarBrand className={HeaderStyle.navbarName} href="/">
              Naslovnica
            </NavbarBrand>
            <NavbarBrand className={HeaderStyle.navbarName} href="/dogadaji">
              Događaji
            </NavbarBrand>
            <NavbarBrand className={HeaderStyle.navbarName} href="/novosti">
              Novosti
            </NavbarBrand>
            <NavbarBrand className={HeaderStyle.navbarName} href="/izvjestaji">
              Izvještaji
            </NavbarBrand>
            <NavbarBrand
              className={HeaderStyle.navbarName}
              href="/registracija"
            >
              Registracija
            </NavbarBrand>
          </Collapse>
        </div>
      </Navbar>
    </div>
  )
}

export default Header
