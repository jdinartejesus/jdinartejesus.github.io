import React, { PropTypes } from 'react'

const Tweets = (props) => {
  const { tweets } = props
  return (
    <div className='twitter my4'>
      <div className='clearfix flex items-center'>
        <div className='col col-2 gray'>
          <h5 className='gray m0'>Tweets</h5>
          <p className='h6 m0' style={{lineHeight: '.75rem'}}>{tweets.date}</p>
        </div>
        <div className='col col-10'>
          <p className='tweets m0 left-align teal h5' style={{lineHeight: '1.2rem'}}>{tweets.text}</p>
        </div>
      </div>
    </div>
  )
}

const { object } = PropTypes

Tweets.propTypes = {
  tweets: object
}

export default Tweets
