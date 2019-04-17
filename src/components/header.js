import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

import styled from 'styled-components'

const HeaderWrapper = styled.header`
  background: linear-gradient(rgba(0, 0, 0, 0.397), rgba(255, 255, 255, 0.397)),
    url(https://img3.akspic.ru/image/44514-drevesnye_rasteniya-priroda-derevo-les-nebo-1920x1080.jpg);
  height: 150px;
  background-position: bottom;

  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
  h1 {
    background: rgba(81, 255, 159, 0.568);
    padding: 20px;
    margin: 0;
    transform: skew(-5deg);
  }
`
const Header = ({ siteTitle }) => (
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
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
