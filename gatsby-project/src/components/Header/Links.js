import React from "react"
import { Link } from "gatsby"
import styles from "./styles.module.css"

export default ({ children, ...rest }) => (
  <Link
    className={styles.Links}
    activeClassName={styles.Links__active}
    {...rest}
  >
    {children}
  </Link>
)
