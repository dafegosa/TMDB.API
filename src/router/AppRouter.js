import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from '../components/Home'
import { Redirect } from '../components/Redirect'
import Dashboard from '../components/Dashboard'

const AppRouter = () => {
  return (
    <Router>
      <div className='main'>
        <Switch>
          <Route
            path='/'
            exact={true}
            render={(props) => <Home {...props} />}
          />
          <Route
            path='/dashboard'
            render={(props) => <Dashboard {...props} />}
          />
        </Switch>
      </div>
    </Router>
  )
}

export default AppRouter
