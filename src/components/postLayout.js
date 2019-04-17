import React, { Component } from 'react'
import Layout from './layout'
import { graphql } from 'gatsby'
import { Spring } from 'react-spring/renderprops'
export default class postLayout extends Component {
  render() {
    const { markdownRemark } = this.props.data

    return (
      <Spring from={{ opacity: 0 }} to={{ opacity: 1 }}>
        {styles => (
          <Layout style={styles}>
            <div dangerouslySetInnerHTML={{ __html: markdownRemark.html }} />
          </Layout>
        )}
      </Spring>
    )
  }
}

export const query = graphql`
  query getPost($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date
        slug
      }
    }
  }
`
