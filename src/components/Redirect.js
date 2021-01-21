import React, { useEffect } from 'react'
import _ from 'lodash'
import { getParamValues } from '../utils/functions'

export const Redirect = (props) => {
  useEffect(() => {
    const { setExpiryTime, history, location } = props
    try {
      if (_.isEmpty(location.hash)) {
        return history.push('/dashboard')
      }

      const access_token = getParamValues(location.hash)
      const expiryTime = new Date().getTime() + access_token.expires_in * 1000
      localStorage.setItem('params', JSON.stringify(access_token))
      localStorage.setItem('expiry_time', expiryTime)
      setExpiryTime(expiryTime)
      history.push('/dashboard')
    } catch (err) {
      history.push('/')
      console.error('error', err)
    }
  }, [])

  return null
}
