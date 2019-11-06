import React from "react"
import { Link } from "gatsby"

const Header = () => {
  return (
    <header>
      <h1>e-Ulaznice</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Naslovnica</Link>
          </li>
          <li>
            <Link to="/dogadaji">Događaji</Link>
          </li>
          <li>
            <Link to="/novosti">Novosti</Link>
          </li>
          <li>
            <Link to="/izvjestaji">Izvještaji</Link>
          </li>
          <li>
            <Link to="/registracija">Registracija</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
