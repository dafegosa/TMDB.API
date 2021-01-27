import React, { useState } from 'react'
import { Card } from 'react-bootstrap'
import _ from 'lodash'
import { useDispatch } from 'react-redux'
import Details from './Details'

const ArtistsList = ({ artists }) => {
  const urlBase = 'https://image.tmdb.org/t/p/original/'
  const dispatch = useDispatch()
  const [showInfo, setShowInfo] = useState(false)
  const [albumInfo, setAlbumInfo] = useState({})
  let image = ''
  const handleAlbum = (albumId, index) => {
    let albumSelected = artists.filter((album) => album.id === albumId)
    albumSelected = albumSelected[0]
    setAlbumInfo({
      artist: albumSelected.title,
      image: urlBase + albumSelected.backdrop_path,
      release: albumSelected.overview,
      tracks: albumSelected.vote_count,
      type: 'albums',
    })
    setShowInfo(true)
  }
  const closeInfo = () => {
    setShowInfo(false)
  }
  return (
    <React.Fragment>
      {showInfo ? (
        <Details info={albumInfo} closeInfo={closeInfo} />
      ) : (
        <div className='albums'>
          {!!artists &&
            artists.length > 0 &&
            artists.map((album, index) => {
              return (
                <React.Fragment key={index}>
                  <Card
                    className='card text-white bg-dark mb-3'
                    style={{
                      width: '18rem',
                    }}
                    onClick={() => {
                      handleAlbum(album.id, index)
                    }}
                  >
                    <a
                      target='_blank'
                      rel='noopener noreferrer'
                      className='card-image-link'
                    >
                      <Card.Img
                        variant='top'
                        src={urlBase + album.backdrop_path}
                        alt=''
                      />
                    </a>
                    <Card.Body>
                      <Card.Title>{album.title}</Card.Title>
                    </Card.Body>
                  </Card>
                </React.Fragment>
              )
            })}
        </div>
      )}
    </React.Fragment>
  )
}

export default ArtistsList
