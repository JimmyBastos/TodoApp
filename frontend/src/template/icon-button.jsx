import React from 'react'
import If from '../utils/if'

export default props => (
  <If test={!props.hidden}>
    <button className={`btn btn-${props.size} btn-${props.style}`} onClick={props.onClick}>
      <i className={`fa fa-${props.icon}`} />
    </button>
  </If>
)
