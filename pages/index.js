import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Helmet from "react-helmet"
import { Section, Avatar, Heading, Text, Breadcrumbs } from 'rebass'
import { SocialIcon } from 'react-social-icons';

import { config } from 'config'

export default class Index extends React.Component {
  render () {
    const socialNetworks = [
      'http://twitter.com/jdinartejesus',
      'http://github.com/jdinartejesus',
      'http://linkedin.com/in/jdinartejesus'
    ]
    return (
      <div className="homepage" style={{textAlign: "center"}}>
        <Helmet
          title={config.siteTitle}
          meta={[
            {"name": "description", "content": "Personal Website Dinarte Jesus"},
            {"name": "keywords", "content": "portfolio, website, dinartejesus, jdinartejesus"},
          ]}
        />
        <header>
          <Avatar circle size={192} src="./images/profile.jpg" />
          <Heading level={1}>Dinarte Jesus</Heading>
          <Heading level={3}>Front-End Developer - Entrepreneur - Human</Heading>
        </header>
        <main>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </Text>
          <div className="social-networks">
            {
              socialNetworks.map(socialNetwork => {
                return <SocialIcon url={socialNetwork} color="#526d7a" style={{ height: 30, width: 30, margin: 5 }} />
              })
            }
          </div>
        </main>
      </div>
    )
  }
}
