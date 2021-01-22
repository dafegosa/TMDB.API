import React from 'react'
import { Alert } from 'react-bootstrap'
import { connect } from 'react-redux'
import { Button } from 'react-bootstrap'
import Header from './Header'
import { Redirect } from 'react-router-dom'

const Home = ({ isValidSession, location }) => {
  const { CLIENT_ID, AUTHORIZE_URL, REDIRECT_URL } = process.env

  const handleLogin = () => {
    window.location = `${AUTHORIZE_URL}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URL}&response_type=token&show_dialog=true`
  }

  const { state } = location
  const sessionExpired = state && state.session_expired

  return (
    <React.Fragment>
      {isValidSession() ? (
        <Redirect to='/dashboard' />
      ) : (
        <div className='login'>
          <Header />
          {sessionExpired && (
            <Alert variant='info'>
              Ops! se pasó el tiempo sin darnos cuenta y la sesión expiró.
              ¡Ingresa de nuevo!{' '}
            </Alert>
          )}
          <Button
            style={{ background: '#60be92', border: 'none' }}
            type='submit'
            onClick={handleLogin}
            data-testId='loginButton'
          >
            Ingresar a Spotify
          </Button>
        </div>
      )}
    </React.Fragment>
  )
}

export default connect()(Home)
