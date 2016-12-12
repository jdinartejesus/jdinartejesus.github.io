import React, { Component, PropTypes } from 'react'
import { SocialIcon } from 'react-social-icons'

class Social extends Component {
  render () {
    const { socialUrls } = this.props
    return (
      <div className="social-networks">
        {
          socialUrls.map((url, index) => (
            <SocialIcon
              key={index}
              rel="me"
              url={url}
              color="#526d7a"
              style={{ height: 25, width: 25, margin: 5 }}
            />
          ))
        }
      </div>
    )
  }
}

const { arrayOf, string } = PropTypes

Social.propTypes = {
  socialUrls: arrayOf(string)
}

export default Social
