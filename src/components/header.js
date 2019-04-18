import { Link, StaticQuery, graphql } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

import styled from 'styled-components'
import BackgroundImage from 'gatsby-background-image'

const HeaderWrapper = styled.header`
  height: 150px;
  background-position: bottom;
  /* background: linear-gradient(
    rgba(81, 255, 168, 0.068),
    rgba(81, 243, 255, 0.268)
  ); */
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
  h1 {
    background: rgba(242, 255, 66, 0.568);
    padding: 20px;
    margin: 0;
    transform: skew(-5deg);
    transition: 0.4s all ease;
    &:hover {
      transform: scale(1.1);
      background: rgba(52, 253, 153, 0.568);
    }
  }
`
const Header = ({ siteTitle }) => (
  <StaticQuery
    query={graphql`
      query BackgroundImageQuery {
        site {
          siteMetadata {
            title
            description
          }
        }
        file(relativePath: { regex: "/lili/" }) {
          childImageSharp {
            fluid(maxWidth: 2000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => (
      <BackgroundImage
        fluid={data.file.childImageSharp.fluid}
        style={{
          backgroundPosition: 'center',
          height: '150px',
        }}
      >
        <HeaderWrapper>
          <h1>
            <Link
              to="/"
              style={{
                color: `white`,
                textDecoration: `none`,
              }}
            >
              {siteTitle}
            </Link>
          </h1>
        </HeaderWrapper>
      </BackgroundImage>
    )}
  />
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
