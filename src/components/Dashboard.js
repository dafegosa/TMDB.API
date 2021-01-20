import React, { useState } from 'react'
import Header from './Header'
import SearchForm from './SearchForm'
import { Redirect } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { initiateGetResult } from '../actions/result'
const Dashboard = (props) => {
  const dispatch = useDispatch()
  const [Loading, setLoading] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState('albums')
  const { isValidSession, history } = props
  const handleSearch = (searchMe) => {
    if (isValidSession()) {
      setLoading(true)
      dispatch(initiateGetResult(searchMe)).then(() => {
        setLoading(false)
        setSelectedCategory('albums')
      })
    } else {
      history.push({
        pathname: '/',
        state: {
          session_expired: true,
        },
      })
    }
  }
  return (
    <div>
      <div className='login'>
        <Header />
      </div>

      <SearchForm handleSearch={handleSearch} />
    </div>
  )
}

export default Dashboard
