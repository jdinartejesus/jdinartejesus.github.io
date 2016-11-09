import React from 'react'
import { Container } from 'rebass'
import { prefixLink } from 'gatsby-helpers'
import { Link } from 'react-router'

import './style.scss'

export default class Footer extends React.Component {
  render() {
    return (
      <footer>
        <Container>
          <hr/>
          <p>© 2016. Dinarte Jesus. Some Rights Reserved.</p>
        </Container>
      </footer>
    )
  }
};
