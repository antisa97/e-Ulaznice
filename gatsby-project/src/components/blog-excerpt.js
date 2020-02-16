import React from "react"
import { Link } from "gatsby"
import {
  Card,
  Button,
  CardImg,
  CardTitle,
  CardText,
  CardColumns,
  CardSubtitle,
  CardBody,
} from "reactstrap"
import IzvjestajiStyle from "../styles/izvjestaji.module.css"

export default ({ posts }) => {
  const postsList = posts.map(({ post }) => {
    const { id } = post
    const { title, date, author, slug, description } = post.frontmatter
    return (
      <div className={IzvjestajiStyle.pageDiv}>
        <div className={IzvjestajiStyle.asd}>
          <span
            className={IzvjestajiStyle.Circle}
            key={id}
            style={{ backgroundColor: "#eef6fa", borderColor: "#eef6fa" }}
          >
            {date}
            <Link to={`/izvjestaji/${slug}`} className={IzvjestajiStyle.link}>
              {" "}
              <h3>{title}</h3>
            </Link>
            <span>{author}</span>
          </span>
        </div>
      </div>
    )
  })
  return postsList
}
