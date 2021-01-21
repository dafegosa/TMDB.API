import React, { useState } from 'react'
import _ from 'lodash'
import { Button } from 'react-bootstrap'
import { Redirect } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import AlbumsList from './AlbumsList'
import ArtistsList from './ArtistsList'
import PlayList from './PlayList'

const SearchResult = (props) => {
  const albums = useSelector((state) => state.albums)
  const artists = useSelector((state) => state.artists)
  const playlist = useSelector((state) => state.playlist)
  const {
    isValidSession,
    setCategory,
    selectedCategory,
    loadMore,
    toSearch,
  } = props
  if (!isValidSession()) {
    return (
      <Redirect
        to={{
          pathname: '/',
          state: {
            session_expired: true,
          },
        }}
      />
    )
  }
  return (
    <React.Fragment>
      <div className='search-buttons'>
        {!_.isEmpty(albums.items) && (
          <button
            className={`${
              selectedCategory === 'albums' ? 'btn active' : 'btn'
            }`}
            onClick={() => setCategory('albums')}
          >
            Albums
          </button>
        )}
        {!_.isEmpty(artists.items) && (
          <button
            className={`${
              selectedCategory === 'artists' ? 'btn active' : 'btn'
            }`}
            onClick={() => setCategory('artists')}
          >
            Artists
          </button>
        )}
        {!_.isEmpty(playlist.items) && (
          <button
            className={`${
              selectedCategory === 'playlist' ? 'btn active' : 'btn'
            }`}
            onClick={() => setCategory('playlist')}
          >
            PlayLists
          </button>
        )}
      </div>
      <div className={`${selectedCategory === 'albums' ? '' : 'hide'}`}>
        {albums && <AlbumsList albums={albums} />}
      </div>
      <div className={`${selectedCategory === 'artists' ? '' : 'hide'}`}>
        {artists && <ArtistsList artists={artists} />}
      </div>
      <div className={`${selectedCategory === 'playlist' ? '' : 'hide'}`}>
        {playlist && <PlayList playlist={playlist} />}
      </div>
      {albums.items ? (
        albums.items.length === 0 ? (
          <p className='alert alert-warning alert-dismissible fade show'>
            No hemos encontrado nada relacionado a {toSearch}. Intenta con otras
            palabras
          </p>
        ) : (
          <div className='load-more' onClick={() => loadMore(selectedCategory)}>
            <Button variant='btn btn-outline-dark' type='button'>
              Ver mas...
            </Button>
          </div>
        )
      ) : null}
    </React.Fragment>
  )
}

export default SearchResult
