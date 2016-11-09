import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Helmet from "react-helmet"
import { Section, Avatar, Heading, Text, Breadcrumbs } from 'rebass'
import { SocialIcon } from 'react-social-icons';

import { config } from 'config'
import './index.scss'

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
          <h1 className="author">Dinarte Jesus</h1>
          <h3 className="interests">Front-End Developer - Entrepreneur - Human</h3>
        </header>
        <main>
          <div className="introduction">
            <p>
              Hey! I'm Dinarte, nice to meet you. I'm a developer passionate about web and startups.
              I'm currently working at <a href="https://zenmate.com">@ZenMate</a> contributing for the freedom of the internet.
              But I also love to work on other open source projects, like at <a href="https://mozilla.com">@Mozilla</a> and others also available on my Github!
            </p>
          </div>
          <div className="social-networks">
            {
              socialNetworks.map(socialNetwork => {
                return <SocialIcon url={socialNetwork} color="#526d7a" style={{ height: 31, width: 31, margin: 5 }} />
              })
            }
          </div>
        </main>
      </div>
    )
  }
}
