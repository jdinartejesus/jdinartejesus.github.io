import React, { Component, PropTypes } from 'react'

class Twitter extends Component {
  render () {
    const { tweet } = this.props
    return (
      <div className='twitter my4'>
        <div className='clearfix flex items-center'>
          <div className='col col-2 gray'>
            <h5 className='gray m0'>Tweet</h5>
            <p className='h6 m0' style={{lineHeight: '.75rem'}}>{tweet.date}</p>
          </div>
          <div className='col col-10'>
            <p className='tweets m0 left-align teal h5' style={{lineHeight: '1.2rem'}}>{tweet.text}</p>
          </div>
        </div>
      </div>
    )
  }
}

const { object } = PropTypes

Twitter.propTypes = {
  tweet: object
}

export default Twitter
