import React, { PropTypes, Component } from 'react'

import Social from '../social/'

class Footer extends Component {
  render() {
    const { socialUrls } = this.props
    return (
      <footer className='center'>
        <hr className='my2 max-width-2 mx-auto' style={{background: '#eee'}} />
        <p className='m0 h5'>© 2016. Dinarte Jesus. Some Rights Reserved.</p>
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
