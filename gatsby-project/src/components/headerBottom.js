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

import HeaderBottomStyle from "../components/componentsStyles/headerBottom.module.css"

const Header = props => {
  return (
    <div className={HeaderBottomStyle.input} id={HeaderBottomStyle.inputBottom}>
      <InputGroup className={HeaderBottomStyle.mail} size="sm">
        <Input placeholder="e-mail" />
      </InputGroup>
      <InputGroup className={HeaderBottomStyle.lozinka} size="sm">
        <Input placeholder="lozinka" />
      </InputGroup>
      {/* <Button className={HeaderBottomStyle.button} color="info" size="sm">
          PRIJAVI ME
        </Button>{" "} */}
      <Button className={HeaderBottomStyle.button2} outline color="info">
        PRIJAVI ME
      </Button>{" "}
    </div>
  )
}

export default Header
