import React from 'react'
import { Link } from 'react-router'
import { Container } from 'rebass'
import { prefixLink } from 'gatsby-helpers'

import { rhythm } from '../utils/typography'
import Footer from '../components/footer'

module.exports = React.createClass({
  propTypes () {
    return {
      children: React.PropTypes.any,
    }
  },
  render () {
    return (
      <div className="wrapper">
        <Container>
          {this.props.children}
        </Container>
        <Footer/>
      </div>
    )
  },
})
