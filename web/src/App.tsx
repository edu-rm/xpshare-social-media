import React from 'react'
import GlobalStyle from './styles/global'

import { BrowserRouter, Switch, Route } from 'react-router-dom'

// import DashBoard from './pages/DashBoard'
import Home from './pages/Home'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Home} />
        {/* <Route path='/dashboard' component={DashBoard} /> */}
      </Switch>
      <GlobalStyle />
    </BrowserRouter>
  )
}

export default App
