import React from "react"
import { Navbar, NavbarBrand, InputGroup, Input, Button } from "reactstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import logo from "../images/logo1.png"
import HeaderStyle from "../components/componentsStyles/header.module.css"
import NavLink from "./links"

const Header = props => {
  return (
    <Navbar
      className={HeaderStyle.navbar}
      fixed="top"
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

      <div className={HeaderStyle.input}>
        <InputGroup className={HeaderStyle.mail} size="sm">
          <Input placeholder="e-mail" />
        </InputGroup>
        <InputGroup className={HeaderStyle.lozinka} size="sm">
          <Input placeholder="lozinka" />
        </InputGroup>
        <Button
          className={HeaderStyle.button}
          outline
          color="warning"
          outline="false"
        >
          PRIJAVI ME
        </Button>{" "}
      </div>
    </Navbar>
  )
}

export default Header
