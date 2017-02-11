import React, { Component } from 'react'
import { config } from 'config'

import './index.scss'

import Social from '../components/social/'

export default class Index extends Component {
  render () {
    return (
      <div className="homepage center">
        <header className="my3">
          <img className="circle" src="./images/profile.jpg" width="192" height="192" alt="Profile Picture"/>
          <h1 className="author m0">Dinarte Jesus</h1>
          <h3 className="interests m0">Front-End Developer - Entrepreneur - Human</h3>
        </header>
        <main>
          <div className="introduction h4 my1 mx-auto">
            <p>
              Hey! I'm Dinarte, nice to meet you. I'm a web developer passionate about web and startups.
              I'm currently working at <a className="text-decoration-none blue" href="https://zenmate.com">@ZenMate</a> contributing for the freedom of the internet.
              But I also love to work on other open source projects, like at <a className="text-decoration-none blue" href="https://mozilla.com">@Mozilla</a> and others also available on my Github!
            </p>
          </div>
        </main>
      </div>
    )
  }
}
