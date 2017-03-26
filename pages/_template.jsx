import React, { Component, PropTypes } from 'react'
import Helmet from 'react-helmet'

import { config } from 'config'
import Footer from '../components/footer'
import Navigation from '../components/navigation'

import '../styles/index.css'
import '../styles/_template.scss'

class Template extends Component {
  getPageData () {
    let pageIndex = this.props.routes.length - 1
    let pageData = this.props.routes[pageIndex].page.data
    return pageData
  }
  render () {
    const title = this.getPageData().title || config.default.title
    const description = this.getPageData().description || config.default.description
    return (
      <div className="wrapper">
        <Helmet title={title} meta={[{name: 'description', content: description}]} />
        <div className="max-width-3 mx-auto">
          {this.props.children}
          <Navigation />
          <Footer socialUrls={config.social} />
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
