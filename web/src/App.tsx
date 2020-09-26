import React from 'react'
import GlobalStyle from './styles/global'

import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from './pages/Home'
import Header from './components/Header'

import DashBoard from './pages/DashBoard'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/dashboard' component={DashBoard} />
      </Switch>
      <GlobalStyle />
    </BrowserRouter>
  )
}

export default App
