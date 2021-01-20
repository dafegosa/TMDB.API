import React from 'react'
import { Alert } from 'react-bootstrap'
import { connect } from 'react-redux'
import { Button } from 'react-bootstrap'
import Header from './Header'
import { Redirect } from 'react-router-dom'

const Home = ({ isValidSession, location }) => {
  const {
    REACT_APP_CLIENT_ID,
    REACT_APP_AUTHORIZE_URL,
    REACT_APP_REDIRECT_URL,
  } = process.env

  const handleLogin = () => {
    window.location = `${REACT_APP_AUTHORIZE_URL}?client_id=${REACT_APP_CLIENT_ID}&redirect_uri=${REACT_APP_REDIRECT_URL}&response_type=token&show_dialog=true`
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
          >
            Ingresar a Spotify
          </Button>
        </div>
      )}
    </React.Fragment>
  )
}

export default connect()(Home)
