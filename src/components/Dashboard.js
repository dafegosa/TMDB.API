import React, { useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import {
  initiateGetPopular,
  initiateGetUpComing,
  initiateLoadMoreAlbums,
  initiateGetTopRated,
  initiateLoadMorePlaylist,
  initiateLoadMoreArtists,
} from '../actions/result'
import SearchResult from './SearchResult'

const Dashboard = (props) => {
  const albums = useSelector((state) => state.albums)
  const artists = useSelector((state) => state.artists)
  const playlist = useSelector((state) => state.playlist)
  const dispatch = useDispatch()
  const [Loading, setLoading] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState('popular')
  const { isValidSession, history } = props
  const [toSearch, setToSearch] = useState('')
  const [pageAlbum, setPageAlbum] = useState(2)
  const [pageArtist, setPageArtist] = useState(2)
  const [pagePlay, setPagePlay] = useState(2)
  const handleSearch = async () => {
    setLoading(true)
    await dispatch(initiateGetPopular()).then((data) => {
      setLoading(false)
      setSelectedCategory('albums')
    })
    await dispatch(initiateGetUpComing()).then((data) => {
      setLoading(false)
    })
    await dispatch(initiateGetTopRated()).then((data) => {
      setLoading(false)
    })
  }
  useEffect(() => {
    handleSearch()
  }, [])
  const setCategory = (category) => {
    setSelectedCategory(category)
  }

  const loadMore = async (type) => {
    switch (type) {
      case 'albums':
        pageAlbum <= 1000 ? setPageAlbum(pageAlbum + 1) : setPageAlbum(2)
        await dispatch(initiateLoadMoreAlbums(pageAlbum))
        break
      case 'artists':
        pageArtist <= 1000 ? setPageArtist(pageArtist + 1) : setPageArtist(2)
        await dispatch(initiateLoadMoreArtists(pageArtist))
        break
      case 'playlist':
        pagePlay <= 1000 ? setPagePlay(pagePlay + 1) : setPagePlay(2)
        await dispatch(initiateLoadMorePlaylist(pagePlay))
        break
      default:
    }
  }

  const result = { albums, artists, playlist }
  return (
    <div>
      <div
        className='login'
        style={{
          imgUrl:
            'https://cdn.pixabay.com/photo/2015/05/15/09/13/demonstration-767982_1280.jpg',
        }}
      ></div>
      <SearchResult
        toSearch={toSearch}
        loadMore={loadMore}
        result={result}
        setCategory={setCategory}
        selectedCategory={selectedCategory}
      />
    </div>
  )
}

export default Dashboard
