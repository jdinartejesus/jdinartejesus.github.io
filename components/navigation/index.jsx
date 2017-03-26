import React, { PropTypes } from 'react'

const Navigation = (props) => {
  return (
    <nav className="navigation">
      <ul className="flex justify-center m0">
        <li className="inline-block m1 teal">Projects</li>
        <li className="inline-block m1 teal">Contacts</li>
        <li className="inline-block m1 teal">Articles</li>
      </ul>
    </nav>
  )
}

export default Navigation
