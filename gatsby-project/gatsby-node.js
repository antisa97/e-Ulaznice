const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const {
    data: {
      allMdx: { posts },
    },
  } = await graphql(`
    query BlogPages {
      allMdx(
        sort: { fields: [frontmatter___date], order: DESC }
        filter: {
          fileAbsolutePath: { regex: "//blog/izvjestaji//" }
          frontmatter: { published: { eq: true } }
        }
      ) {
        posts: edges {
          post: node {
            frontmatter {
              slug
              title
            }
          }
        }
      }
    }
  `)

  posts.forEach(({ post }, index) => {
    const slug = post.frontmatter.slug
    const previous = index === 0 ? null : posts[index - 1].post
    const next = index === posts.length - 1 ? null : posts[index + 1].post
    createPage({
      path: `/izvjestaji/${post.frontmatter.slug}`,
      component: path.resolve(`./src/templates/posts-page-layout.js`),
      context: {
        slug,
        previous,
        next,
      },
    })
  })

  const postsPerPage = 6
  const numPages = Math.ceil(posts.length / postsPerPage)

  Array.from({ length: numPages }).forEach((_, index) => {
    createPage({
      path: index === 0 ? `/izvjestaji` : `/izvjestaji/${index + 1}`,
      component: path.resolve(`./src/templates/posts-list.js`),
      context: {
        limit: postsPerPage,
        skip: index * postsPerPage,
        numPages,
        currentPage: index + 1,
      },
    })
  })
}
