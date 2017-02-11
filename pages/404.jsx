import React, { Component } from 'react'
import './404.scss'

exports.data = {
  title: 'ups 404, NOT FOUND',
  path: '/404.html'
}

export default class FourOrFour extends Component {
  render () {
    return (
      <div className="four-or-four center mt4">
        <img src="./images/404.svg" alt="404, page doesn't exit" height="109" width="120" />
        <h1 className="four-or-four-title">NOT FOUND</h1>
        <p className="four-or-four-sub">You just hit a route that doesn't exist... the sadness.</p>
      </div>
    )
  }
}

