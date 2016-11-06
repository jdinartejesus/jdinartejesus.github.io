import React from 'react'
import { Container } from 'rebass'
import { prefixLink } from 'gatsby-helpers'
import { Link } from 'react-router'

import './style.sass'

export default class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <Container>
          <hr/>
          <p>© 2016. Dinarte Jesus. Some Rights Reserved.</p>
        </Container>
      </div>
    )
  }
};
