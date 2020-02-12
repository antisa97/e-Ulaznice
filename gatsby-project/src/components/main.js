import React from "react"
import MainStyle from "../components/componentsStyles/main.module.css"

const Main = props => {
  return <div className={MainStyle.main}>{props.children}</div>
}

export default Main
