import React from 'react'
import { Router, Switch } from 'react-router-dom'
import history from '../history'

import path from './path'
import BaseLayoutRoute from '../components/layout/base'

const Routes: React.FC = () => {
  return (
    <Router history={history}>
      <Switch>
        {path.map((route, idx) => (
          <BaseLayoutRoute key={idx} {...route} />
        ))}
      </Switch>
    </Router>
  )
}

export default Routes
