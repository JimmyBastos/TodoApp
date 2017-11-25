import React from 'react'
import { HashRouter, Route, Redirect, Switch } from 'react-router-dom'

import Todo from '../todo/todo'
import About from '../about/about'

export default props => (
  <HashRouter>
    <div>
      <Switch>
        <Route exact path='/about' component={About} />
        <Route exact path='/todos' component={Todo} />
        <Redirect from='/' to='/todos' />
      </Switch>
    </div>
  </HashRouter>
)
