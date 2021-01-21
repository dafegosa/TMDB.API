import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from '../components/Home'
import { Redirect } from '../components/Redirect'
import Dashboard from '../components/Dashboard'
import NotFoundPage from '../components/NotFoundPage'

const AppRouter = () => {
  const [expiryTime, setEspiryTime] = useState(0)

  useEffect(() => {
    let expiryTimeAux
    try {
      expiryTimeAux = JSON.parse(localStorage.getItem('expiry_time'))
    } catch (err) {
      expiryTimeAux = 0
      console.error('error', err)
    }
    setEspiryTime(expiryTimeAux)
  }, [])

  const isValidSession = () => {
    const currentTime = new Date().getTime()
    const expiryTimeAux = expiryTime
    const isSessionValid = currentTime < expiryTimeAux

    return isSessionValid
  }

  return (
    <Router>
      <div className='main'>
        <Switch>
          <Route
            path='/'
            exact={true}
            render={(props) => (
              <Home isValidSession={isValidSession} {...props} />
            )}
          />
          <Route
            path='/redirect'
            render={(props) => (
              <Redirect
                isValidSession={isValidSession}
                setExpiryTime={(expiryTimeAux) => {
                  setEspiryTime(expiryTimeAux)
                }}
                {...props}
              />
            )}
          />
          <Route
            path='/dashboard'
            render={(props) => (
              <Dashboard isValidSession={isValidSession} {...props} />
            )}
          />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    </Router>
  )
}

export default AppRouter
