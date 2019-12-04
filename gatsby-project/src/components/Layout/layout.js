import React from "react"
import SiteContainer from "../SiteContainer/sitecontainer"
import Header from "../Header/header"
import Main from "../Main/main"

export default ({ children }) => (
  <SiteContainer>
    <Header />
    <Main>{children}</Main>
  </SiteContainer>
)
