import React from "react"
import Layout from "../components/layout"
import NovostiStyle from "../styles/novosti.module.css"

const NovostiPage = () => {
  return (
    <Layout>
      <div className={NovostiStyle.page}>
        <div className={NovostiStyle.pageDiv}>
          <h1>Novosti</h1>
          <p>Ovo je stranica na kojoj će se nalaziti sve novosti.</p>
        </div>
      </div>
    </Layout>
  )
}

export default NovostiPage
