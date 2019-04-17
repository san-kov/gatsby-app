import React from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'

const POSTS_QUERIES = graphql`
  query getMarkdown {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          frontmatter {
            title
            slug
          }
        }
      }
    }
  }
`
const postslsit = () => {
  return (
    <div>
      <StaticQuery
        query={POSTS_QUERIES}
        render={({ allMarkdownRemark }) => {
          return (
            <ul>
              {allMarkdownRemark.edges.map((edge, i) => (
                <Link key={i} to={`/posts${edge.node.frontmatter.slug}`}>
                  {edge.node.frontmatter.title}
                </Link>
              ))}
            </ul>
          )
        }}
      />
    </div>
  )
}

export default postslsit
