import React, { useState } from 'react'
import Header from './Header'
import SearchForm from './SearchForm'
import { Redirect } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import {
  initiateGetResult,
  initiateLoadMoreAlbums,
  initiateLoadMorePlaylist,
  initiateLoadMoreArtists,
} from '../actions/result'
import Loader from './Loader'
import SearchResult from './SearchResult'

const Dashboard = (props) => {
  const albums = useSelector((state) => state.albums)
  const artists = useSelector((state) => state.artists)
  const playlist = useSelector((state) => state.playlist)
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

  const setCategory = (category) => {
    setSelectedCategory(category)
  }

  const loadMore = async (type) => {
    if (isValidSession()) {
      setLoading(true)
      switch (type) {
        case 'albums':
          await dispatch(initiateLoadMoreAlbums(albums.next))
          break
        case 'artists':
          await dispatch(initiateLoadMoreArtists(artists.next))
          break
        case 'playlist':
          await dispatch(initiateLoadMorePlaylist(playlist.next))
          break
        default:
      }
      setLoading(false)
    } else {
      history.push({
        pathname: '/',
        state: {
          session_expired: true,
        },
      })
    }
  }

  const result = { albums, artists, playlist }
  return (
    <div>
      <div className='login'>
        <Header />
      </div>

      <SearchForm handleSearch={handleSearch} />
      <Loader show={Loading}>Buscando...</Loader>
      <SearchResult
        loadMore={loadMore}
        result={result}
        setCategory={setCategory}
        selectedCategory={selectedCategory}
        isValidSession={isValidSession}
      />
    </div>
  )
}

export default Dashboard
