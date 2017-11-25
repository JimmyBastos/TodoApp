import React from 'react'

export default props => (
  <header className='container page-header'>
    <h2>{props.name} <small>{props.small}</small></h2>
  </header>
)
