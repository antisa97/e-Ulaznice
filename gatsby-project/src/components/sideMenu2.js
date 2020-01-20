import React, { useState } from "react"
import { Link } from "gatsby"

const SideMenu2 = ({ menuItems }) => {
  //   const { theme } = useThemeUI()

  return (
    <div
      style={{
        zIndex: "999",
        position: "absolute",
        top: "56.9px",
        right: "-50px",
        display: "flex",
        flexDirection: "column",
        p: 2,
        backgroundColor: "white",
        // border: theme => theme.borders.header,
        borderTop: "none",
        textAlign: "center",
      }}
    >
      {menuItems.map(({ link, text }) => (
        <Link
          key={link}
          to={link}
          style={{
            m: 2,
            mx: 3,
            px: 2,
            py: 2,
            color: "#78758E",
            textDecoration: "none",
            whiteSpace: "nowrap",
            letterSpacing: "wide",
            transition: "all 0.25s linear",
            "&:hover": {
              color: "primaryHover",
              //   borderBottom: theme =>
              //     `${theme.sizes.navLinkBorder} solid #9AD1C4`,
            },
          }}
          activeStyle={
            {
              // color: theme.colors.primaryHover,
              //borderBottom: `${theme.sizes.navLinkBorder} solid #9AD1C4`,
            }
          }
        >
          {text}
        </Link>
      ))}
    </div>
  )
}
export default SideMenu2