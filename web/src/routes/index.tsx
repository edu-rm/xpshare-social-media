import React from 'react'
import { Switch, BrowserRouter } from 'react-router-dom'

import Route from './Route'

import Home from '../pages/Home'

import DashBoard from '../pages/DashBoard'

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/dashboard' component={DashBoard} isPrivate />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
