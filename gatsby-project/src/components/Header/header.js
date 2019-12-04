import React from "react"
import Container from "../Container/container"
import Navigation from "./Navigation"
import Links from "./Links"
import styles from "./styles.module.css"
import eU from "../../assets/images/eU.jpg"

export default () => (
  <header className={styles.Header}>
    <Container className={styles.Container}>
      <a className={styles.Logo} href="/">
        <img className={styles.Img} src={eU} />
      </a>

      <aside className={styles.Aside_bottom}>
        <Navigation>
          <Links to="/" exact="true">
            <div className={styles.Div}>Naslovnica</div>
          </Links>
          <Links to="/dogadaji">
            <div className={styles.Div}>Događaji</div>
          </Links>
          <Links to="/novosti">
            <div className={styles.Div}>Novosti</div>
          </Links>
          <Links to="/izvjestaji">
            <div className={styles.DivAbout}>Izvještaji</div>
          </Links>
          <Links to="/registracija">
            <div className={styles.Div}>Registracija</div>
          </Links>
        </Navigation>
      </aside>
    </Container>
  </header>
)
