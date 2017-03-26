import React, { Component } from 'react'

import './index.scss'

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
              I'm living in Germany where I worked <a className="text-decoration-none blue" href="https://zenmate.com">@ZenMate</a> and nuboLab/Voxelbrain.
              Usually, I'm also contributing to open source projects, like at <a className="text-decoration-none blue" href="https://mozilla.com">@Mozilla</a> and others also available on my <a className="text-decoration-none blue" href="https://github.com/jdinartejesus">Github</a>!
            </p>
          </div>
        </main>
      </div>
    )
  }
}
