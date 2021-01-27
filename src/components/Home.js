import React from 'react'
import { Alert } from 'react-bootstrap'
import { connect } from 'react-redux'
import { Button } from 'react-bootstrap'
import { Redirect } from 'react-router-dom'

const Home = ({ history, isValidSession, location }) => {
  const {
    REACT_APP_CLIENT_ID,
    REACT_APP_AUTHORIZE_URL,
    REACT_APP_REDIRECT_URL,
  } = process.env

  return <React.Fragment>{history.push('/dashboard')}</React.Fragment>
}

export default connect()(Home)
