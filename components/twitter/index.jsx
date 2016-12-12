import React, { Component } from 'react'

export default class Twitter extends Component {
  render () {
    return (
      <div className='twitter my4'>
        <div className='clearfix flex items-center'>
          <div className='col col-2 gray'>
            <h5 className='gray m0'>Tweets</h5>
          </div>
          <div className='col col-10'>
            <p className='tweets m0 left-align teal h5' style={{lineHeight: '1.2rem'}}> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labor.</p>
          </div>
        </div>
      </div>
    )
  }
}
