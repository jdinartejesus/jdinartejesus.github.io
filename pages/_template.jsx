import React, { Component, PropTypes } from 'react'
import { config } from 'config'

import { rhythm } from '../utils/typography'
import Footer from '../components/footer'

import '../styles/index.css'
import '../styles/_template.scss'

class Template extends Component {
  render () {
    return (
      <div className="wrapper">
        <div className="max-width-3 mx-auto">
          {this.props.children}
          <Footer socialUrls={config.socialNetworks}/>
        </div>
      </div>
    )
  }
}

const { any } = PropTypes

Template.propTypes = {
  children: any
}

export default Template
