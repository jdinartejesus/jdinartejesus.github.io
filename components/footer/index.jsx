import React, { PropTypes, Component } from 'react'

import Social from '../social/'

class Footer extends Component {
  getCurrentYear () {
    let now = new Date()
    return now.getFullYear()
  }
  render () {
    const { socialUrls } = this.props
    const currentYear = this.getCurrentYear()
    return (
      <footer className='center'>
        <hr className='my2 max-width-2 mx-auto' style={{background: '#eee'}} />
        <p className='m0 h5'>{`© ${currentYear}. Dinarte Jesus. Some Rights Reserved.`}</p>
        <Social socialUrls={socialUrls} />
      </footer>
    )
  }
};

const { arrayOf, string } = PropTypes

Footer.propTypes = {
  socialUrls: arrayOf(string)
}

export default Footer
