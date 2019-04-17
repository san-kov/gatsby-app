const path = require('path')

module.exports.createPages = async ({ graphql, actions }) => {
  return new Promise((res, rej) => {
    const { createPage } = actions

    graphql(`
      query getMarkdown {
        allMarkdownRemark {
          edges {
            node {
              html
              excerpt
              wordCount {
                words
              }
              frontmatter {
                title
                slug
                date(formatString: "D MMM YYYY")
              }
            }
          }
        }
      }
    `).then(result => {
      result.data.allMarkdownRemark.edges.forEach(({ node }) => {
        createPage({
          path: `/posts${node.frontmatter.slug}`,
          component: path.resolve('./src/components/postLayout.js'),
          context: {
            slug: node.frontmatter.slug,
          },
        })
      })
    })

    res()
  })
}
