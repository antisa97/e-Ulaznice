import React from "react"
import { Link } from "gatsby"
import { Navbar, NavbarBrand, InputGroup, Input, Button } from "reactstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import HeaderStyle from "../components/componentsStyles/header.module.css"
import logo from "../images/logo.png"

function refreshPage() {
  window.location.reload(false)
}

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
        <Link
          to="/"
          exact="true"
          className={HeaderStyle.navbarName}
          activeClassName={HeaderStyle.navbarName__active}
        >
          NASLOVNICA
        </Link>
        <Link
          to="/dogadaji"
          className={HeaderStyle.navbarName}
          activeClassName={HeaderStyle.navbarName__active}
        >
          DOGAĐAJI
        </Link>
        <Link
          to="/novosti"
          className={HeaderStyle.navbarName}
          activeClassName={HeaderStyle.navbarName__active}
        >
          NOVOSTI
        </Link>
        <Link
          to="/izvjestaji"
          className={HeaderStyle.navbarName}
          activeClassName={HeaderStyle.navbarName__active}
        >
          DOJMOVI
        </Link>
        <Link
          to="/registracija"
          className={HeaderStyle.navbarName}
          activeClassName={HeaderStyle.navbarName__active}
        >
          REGISTRACIJA
        </Link>
      </div>

      <div className={HeaderStyle.input}>
        <InputGroup className={HeaderStyle.mail} size="sm">
          <Input placeholder="e-mail" type="email" />
        </InputGroup>
        <InputGroup className={HeaderStyle.lozinka} size="sm">
          <Input placeholder="lozinka" type="password" />
        </InputGroup>
        <Button
          className={HeaderStyle.button}
          color="warning"
          outline="false"
          onClick={refreshPage}
        >
          PRIJAVI ME
        </Button>{" "}
      </div>
    </Navbar>
  )
}

export default Header
