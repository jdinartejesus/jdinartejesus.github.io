import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Helmet from "react-helmet"
import { Avatar, Heading } from 'rebass'

import { config } from 'config'

export default class Index extends React.Component {
  render () {
    return (
      <div className="description">
        <Helmet
          title={config.siteTitle}
          meta={[
            {"name": "description", "content": "Personal Website Dinarte Jesus"},
            {"name": "keywords", "content": "portfolio, website, dinartejesus, jdinartejesus"},
          ]}
        />
        <Avatar
          circle
          size={120}
          src="https://avatars1.githubusercontent.com/u/6892132?v=3&s=466"
        />
        <Heading level={1}>Dinarte Jesus</Heading>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    )
  }
}
