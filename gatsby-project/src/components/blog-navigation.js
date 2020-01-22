import React from "react"
import { Link } from "gatsby"
import IzvjestajiStyle from "../styles/izvjestaji.module.css"

export const rightArrow = (
  <svg
    fill="currentColor"
    preserveAspectRatio="xMidYMid meet"
    height="1em"
    width="1em"
    viewBox="0 0 40 40"
    style={{ verticalAlign: "middle" }}
  >
    <g>
      <path d="m20 6.6l13.4 13.4-13.4 13.4-2.3-2.4 9.3-9.4h-20.4v-3.2h20.4l-9.3-9.4z"></path>
    </g>
  </svg>
)

export const leftArrow = (
  <svg
    fill="currentColor"
    preserveAspectRatio="xMidYMid meet"
    height="1em"
    width="1em"
    viewBox="0 0 40 40"
    style={{ verticalAlign: "middle" }}
  >
    <g>
      <path d="m33.4 18.4v3.2h-20.4l9.3 9.4-2.3 2.4-13.4-13.4 13.4-13.4 2.3 2.4-9.3 9.4h20.4z"></path>
    </g>
  </svg>
)

const BlogLink = ({ ...prop }) => (
  <Link className={IzvjestajiStyle.blogLink} {...prop} />
)

const BlogPrevious = ({ ...prop }) => <div {...prop} />

const BlogNext = ({ ...prop }) => <div {...prop} />

const BlogNav = ({ ...prop }) => (
  <nav
    {...prop}
    style={{
      display: "flex",
      justifyContent: "space-between",
      width: "100%",
      overflow: "hidden",
      mt: 4,
    }}
  />
)

BlogNav.Link = BlogLink
BlogNav.Previous = BlogPrevious
BlogNav.Next = BlogNext

export default BlogNav
