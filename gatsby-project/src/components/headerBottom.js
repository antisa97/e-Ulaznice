import React, { useState } from "react"
import { Link } from "gatsby"
import {
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  InputGroup,
  Input,
  Button,
} from "reactstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import HeaderBottomStyle from "../components/componentsStyles/headerBottom.module.css"
import home from "../images/iconHome.png"
import events from "../images/iconCalendar.png"
import news from "../images/iconNews.png"
import blog from "../images/iconBlog.png"
import dots from "../images/iconDots.png"
import registration from "../images/iconRegistration.png"
import login from "../images/iconUser.png"

const Header = () => {
  const [dropdownOpen, setOpen] = useState(false)
  const [modal, setModal] = useState(false)

  const toggle = () => setOpen(!dropdownOpen)
  const toggle2 = () => setModal(!modal)
  const toggleAll = () => {
    setOpen(!dropdownOpen)
    setModal(!modal)
  }
  return (
    <div className={HeaderBottomStyle.nav}>
      <div className={HeaderBottomStyle.iconContainer}>
        <Link to="/">
          <img className={HeaderBottomStyle.icon} src={home} alt="home"></img>
        </Link>
        <Link
          to="/"
          className={HeaderBottomStyle.navbarName}
          activeClassName={HeaderBottomStyle.navbarName__active}
        >
          NASLOVNICA
        </Link>
      </div>
      <div className={HeaderBottomStyle.iconContainer}>
        <Link to="/dogadaji">
          <img
            className={HeaderBottomStyle.icon}
            src={events}
            alt="events"
          ></img>
        </Link>
        <Link
          to="/dogadaji"
          className={HeaderBottomStyle.navbarName}
          activeClassName={HeaderBottomStyle.navbarName__active}
        >
          DOGAĐAJI
        </Link>
      </div>
      <div className={HeaderBottomStyle.iconContainer}>
        <Link to="/novosti">
          <img className={HeaderBottomStyle.icon} src={news} alt="news"></img>
        </Link>
        <Link
          to="/novosti"
          className={HeaderBottomStyle.navbarName}
          activeClassName={HeaderBottomStyle.navbarName__active}
        >
          NOVOSTI
        </Link>
      </div>
      <div className={HeaderBottomStyle.iconContainer}>
        <Link to="/izvjestaji">
          <img className={HeaderBottomStyle.icon} src={blog} alt="blog"></img>
        </Link>
        <Link
          to="/izvjestaji"
          className={HeaderBottomStyle.navbarName}
          activeClassName={HeaderBottomStyle.navbarName__active}
        >
          DOJMOVI
        </Link>
      </div>

      <ButtonDropdown isOpen={dropdownOpen} toggle={toggle} direction="up">
        <DropdownToggle caret className={HeaderBottomStyle.button}>
          <img className={HeaderBottomStyle.icon} src={dots} alt="dots"></img>
        </DropdownToggle>
        <DropdownMenu>
          <div className={HeaderBottomStyle.dropUp}>
            <div
              className={HeaderBottomStyle.iconContainer}
              id={HeaderBottomStyle.loginContainer}
            >
              <a
                href="#Prijava"
                onClick={toggleAll}
                className={HeaderBottomStyle.navbarName}
                activeClassName={HeaderBottomStyle.navbarName__active}
              >
                <img
                  className={HeaderBottomStyle.icon}
                  src={login}
                  alt="login"
                ></img>{" "}
              </a>
              <a
                href="#Prijava"
                onClick={toggleAll}
                className={HeaderBottomStyle.navbarName}
                activeClassName={HeaderBottomStyle.navbarName__active}
              >
                PRIJAVA
              </a>
              <Modal
                isOpen={modal}
                toggle={toggle2}
                id={HeaderBottomStyle.prijavaModal}
                centered={true}
                autoFocus={true}
              >
                <ModalHeader toggle={toggle2}>PRIJAVA </ModalHeader>
                <ModalBody className={HeaderBottomStyle.modBod}>
                  <InputGroup className={HeaderBottomStyle.mail} size="sm">
                    <Input placeholder="e-mail" />
                  </InputGroup>
                  <InputGroup className={HeaderBottomStyle.lozinka} size="sm">
                    <Input placeholder="lozinka" type="password" />
                  </InputGroup>
                </ModalBody>
                <ModalFooter className={HeaderBottomStyle.btnFot}>
                  <div className={HeaderBottomStyle.divBtn}>
                    <Button
                      className={HeaderBottomStyle.button2}
                      color="secondary"
                      onClick={toggle2}
                    >
                      PRIJAVI ME
                    </Button>{" "}
                  </div>
                </ModalFooter>
              </Modal>
            </div>
            <div className={HeaderBottomStyle.iconContainer}>
              <Link to="/registracija">
                <img
                  className={HeaderBottomStyle.icon}
                  src={registration}
                  alt="registration"
                ></img>
              </Link>
              <Link
                to="/registracija"
                className={HeaderBottomStyle.navbarName}
                activeClassName={HeaderBottomStyle.navbarName__active}
              >
                REGISTRACIJA
              </Link>
            </div>
          </div>
        </DropdownMenu>
      </ButtonDropdown>
    </div>
  )
}

export default Header
