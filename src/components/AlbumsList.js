import React, { useState } from 'react'
import { Card } from 'react-bootstrap'
import _ from 'lodash'
import { useDispatch } from 'react-redux'
import Details from './Details'

const AlbumsList = ({ albums }) => {
  const dispatch = useDispatch()
  const [showInfo, setShowInfo] = useState(false)
  const [albumInfo, setAlbumInfo] = useState({})
  const handleAlbum = (albumId, index) => {
    let albumSelected = albums.items.filter((album) => album.id === albumId)
    albumSelected = albumSelected[0]
    setAlbumInfo({
      artist: albumSelected.artists[0].name,
      image: albumSelected.images[0].url,
      name: albumSelected.name,
      release: albumSelected.release_date,
      tracks: albumSelected.total_tracks,
      url: albumSelected.external_urls.spotify,
    })
    setShowInfo(true)
  }
  return (
    <React.Fragment>
      {showInfo ? (
        <React.Fragment>
          <Card
            className='card text-white bg-dark mb-3 text-center'
            style={{
              width: '100%',
              marginLeft: '0',
            }}
          >
            <div class='card-header title'>
              <strong>{albumInfo.name}</strong>
            </div>
            <Card.Body>
              <Card.Img variant='top' src={albumInfo.image} alt='' />
              <br />
              <br />
              <Card.Title>Artista: {albumInfo.artist}</Card.Title>
              <Card.Title>Fecha de Lanzamiento: {albumInfo.release}</Card.Title>
              <Card.Title>Número de tracks: {albumInfo.tracks}</Card.Title>
              <Card.Title>
                <a href={albumInfo.url}>Escuchar en Spotify</a>
              </Card.Title>
              <Card.Text>
                <button
                  className='btn btn-secondary btn-lg btn-block'
                  type='button'
                  onClick={() => {
                    setShowInfo(false)
                  }}
                >
                  cerrar
                </button>
              </Card.Text>
            </Card.Body>
          </Card>
        </React.Fragment>
      ) : null}
      {!showInfo
        ? Object.keys(albums).length > 0 && (
            <div className='albums'>
              {albums.items.map((album, index) => {
                return (
                  <React.Fragment key={index}>
                    <Card
                      className='card text-white bg-dark mb-3'
                      style={{
                        width: '16rem',
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
                        {!_.isEmpty(album.images) ? (
                          <Card.Img
                            variant='top'
                            src={album.images[0].url}
                            alt=''
                          />
                        ) : (
                          <Card.Img
                            src='https://pixabay.com/get/ga4a11bb5bdbb04bea17eec179891bc2e4e8acd6195be0a7dcb99354d8a60b22b4ab42bba0df7492e78790bb147c966460418e88c5bff952318e54b7e56caeb39_1920.jpg'
                            alt=''
                          />
                        )}
                      </a>
                      <Card.Body>
                        <Card.Title>{album.name}</Card.Title>
                        <Card.Text>
                          <small>
                            {album.artists
                              .map((artist) => artist.name)
                              .join(', ')}
                          </small>
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </React.Fragment>
                )
              })}
            </div>
          )
        : null}
    </React.Fragment>
  )
}

export default AlbumsList
