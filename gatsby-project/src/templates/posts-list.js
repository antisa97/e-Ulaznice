import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import BlogExcerpt from "../components/blog-excerpt"
import BlogNav, { leftArrow, rightArrow } from "../components/blog-navigation"
import "../styles/style.css"
import IzvjestajiStyle from "../styles/izvjestaji.module.css"
import SEO from "../components/seo"

const BlogList = ({
  pageContext,
  data: {
    allMdx: { posts },
  },
}) => {
  const { currentPage, numPages } = pageContext
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const previousPage =
    currentPage - 1 === 1
      ? "/izvjestaji/"
      : `/izvjestaji/${(currentPage - 1).toString()}`
  const nextPage = `/izvjestaji/${(currentPage + 1).toString()}`

  return (
    <Layout>
      <SEO title="Dojmovi" />
      <div style={{ backgroundColor: "#ffd07b " }}>
        <h3 className={IzvjestajiStyle.pageTitle}>Dojmovi</h3>
        <div className={IzvjestajiStyle.pageDiv}>
          <BlogExcerpt posts={posts} />
        </div>

        <BlogNav>
          <BlogNav.Previous>
            {!isFirst && (
              <BlogNav.Link to={previousPage}>
                {leftArrow} Prethodna stranica
              </BlogNav.Link>
            )}
          </BlogNav.Previous>

          <BlogNav.Next>
            {!isLast && (
              <BlogNav.Link to={nextPage}>
                Sljedeća stranica {rightArrow}
              </BlogNav.Link>
            )}
          </BlogNav.Next>
        </BlogNav>
      </div>
    </Layout>
  )
}

export default BlogList

export const query = graphql`
  query BlogList($skip: Int, $limit: Int) {
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: {
        fileAbsolutePath: { regex: "//blog/izvjestaji//" }
        frontmatter: { published: { eq: true } }
      }
      limit: $limit
      skip: $skip
    ) {
      posts: edges {
        post: node {
          id
          frontmatter {
            author
            date(formatString: "MMMM DD, YYYY")
            description
            slug
            title
          }
          excerpt(pruneLength: 200)
        }
      }
    }
  }
`
