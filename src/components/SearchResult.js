import React, { useState } from 'react'
import _ from 'lodash'
import { Button } from 'react-bootstrap'
import { Redirect } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import AlbumsList from './UpComing'
import ArtistsList from './Popular'
import PlayList from './TopRated'

const SearchResult = (props) => {
  const albums = useSelector((state) => state.albums)
  const artists = useSelector((state) => state.artists)
  const playlist = useSelector((state) => state.playlist)
  const { setCategory, selectedCategory, loadMore, toSearch } = props

  return (
    <React.Fragment>
      <div className='search-buttons'>
        <button
          className={`${selectedCategory === 'albums' ? 'btn active' : 'btn'}`}
          onClick={() => setCategory('albums')}
        >
          Próximos estrenos
        </button>

        <button
          className={`${selectedCategory === 'artists' ? 'btn active' : 'btn'}`}
          onClick={() => setCategory('artists')}
        >
          Más populares
        </button>

        <button
          className={`${
            selectedCategory === 'playlist' ? 'btn active' : 'btn'
          }`}
          onClick={() => setCategory('playlist')}
        >
          Más Votados
        </button>
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
      <div className='load-more' onClick={() => loadMore(selectedCategory)}>
        <Button variant='btn btn-outline-dark' type='button'>
          Ver mas...
        </Button>
      </div>
    </React.Fragment>
  )
}

export default SearchResult
