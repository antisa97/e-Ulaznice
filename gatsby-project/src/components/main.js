import React from "react"
import MainStyle from "../components/componentsStyles/main.module.css"

const Main = props => {
  return (
    <div
      //style={{ boxShadow: "0 0 50px 17px rgba(225,226,228,0.7)" }}
      className={MainStyle.main}
    >
      {props.children}
    </div>
  )
}

export default Main
