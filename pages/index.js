import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Helmet from "react-helmet"
import { config } from 'config'

export default class Index extends React.Component {
  render () {
    return (
      <div>
        <Helmet
          title={config.siteTitle}
          meta={[
            {"name": "description", "content": "Personal Website Dinarte Jesus"},
            {"name": "keywords", "content": "portfolio, website, dinartejesus, jdinartejesus"},
          ]}
        />
        <h1>
          Hello World
        </h1>
      </div>
    )
  }
}
