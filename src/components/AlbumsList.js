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
    console.log('ALBUM', albumId)
    console.log('INDEX', index)
    const albumSelected = albums.items.filter((album) => album.id === albumId)
    setAlbumInfo({
      name: albumSelected[0].name,
      release: albumSelected[0].release_date,
      tracks: albumSelected[0].total_tracks,
      url: albumSelected[0].external_urls.spotify,
    })
    console.log(albumInfo)
    setShowInfo(true)
  }
  return (
    <React.Fragment>
      {showInfo ? (
        <Details show={showInfo}>
          <p>Nombre: {albumInfo.name}</p>
          <p>Fecha de lanzamiento: {albumInfo.release}</p>
          <p>Número de tracks: {albumInfo.tracks}</p>
          <a href={albumInfo.url}>Escuchar en Spotify</a>
          <button
            type='button'
            onClick={() => {
              setShowInfo(false)
            }}
          >
            cerrar
          </button>
        </Details>
      ) : null}
      {Object.keys(albums).length > 0 && (
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
                        {album.artists.map((artist) => artist.name).join(', ')}
                      </small>
                    </Card.Text>
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

export default AlbumsList
