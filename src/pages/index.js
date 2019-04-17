import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import { StaticQuery, Link } from 'gatsby'
import styled from 'styled-components'

const PostsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 200px;
  grid-auto-rows: 200px;
  margin: 0 auto;
  grid-gap: 20px;
  padding: 0;

  .post-card {
    cursor: pointer;
    position: relative;
    transition: 0.2s all ease;
    margin: 0;
    box-shadow: 1px 0px 2px grey;
    display: flex;
    flex-direction: column;
  }
  .post-card:hover {
    transform: scale(1.05);
  }

  .post-img {
    position: absolute;
    width: 100%;
    height: 100%;
  }
  p,
  img {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .title {
    position: absolute;
    background: hsla(0, 0%, 39%, 0.359);
    padding: 2px;
    color: rgba(255, 255, 255, 0.859);
  }
  a {
    text-decoration: none;
    color: #2d2d2d;
  }
`

const POSTS_QUERIES = graphql`
  query getInitMarkdown {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          frontmatter {
            title
            slug
            cover
          }
        }
      }
    }
  }
`

const IndexPage = () => (
  <Layout>
    <SEO
      title="Home"
      keywords={[`gatsby`, `application`, `react`, `programming`]}
    />
    <StaticQuery
      query={POSTS_QUERIES}
      render={({ allMarkdownRemark }) => {
        return (
          <PostsWrapper>
            {allMarkdownRemark.edges.map((edge, i) => (
              <Link
                className="post-card"
                to={`/posts${edge.node.frontmatter.slug}`}
              >
                <div class="post-img">
                  <img
                    src={edge.node.frontmatter.cover}
                    alt="typescript-react"
                  />
                </div>
                <div class="title">{edge.node.frontmatter.title}</div>
              </Link>
            ))}
          </PostsWrapper>
        )
      }}
    />
  </Layout>
)

export default IndexPage
