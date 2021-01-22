import React, { useState } from 'react'
import { Card } from 'react-bootstrap'
import _ from 'lodash'
import { useDispatch } from 'react-redux'
import Details from './Details'

const AlbumsList = ({ albums }) => {
  const dispatch = useDispatch()
  const [showInfo, setShowInfo] = useState(false)
  const [albumInfo, setAlbumInfo] = useState({})
  let image = ''
  const handleAlbum = (albumId, index) => {
    let albumSelected = albums.items.filter((album) => album.id === albumId)
    albumSelected = albumSelected[0]
    if (albumSelected.images.length !== 0) {
      image = albumSelected.images[0].url
    } else {
      image =
        'https://res.cloudinary.com/dafegosa/image/upload/v1611283043/girl-1990347_1920_rvvdad.jpg'
    }
    setAlbumInfo({
      artist: albumSelected.artists[0].name,
      image,
      name: albumSelected.name,
      release: albumSelected.release_date,
      tracks: albumSelected.total_tracks,
      url: albumSelected.external_urls.spotify,
      type: 'albums',
    })
    setShowInfo(true)
  }
  const closeInfo = () => {
    setShowInfo(false)
  }
  return (
    <React.Fragment>
      {showInfo ? <Details info={albumInfo} closeInfo={closeInfo} /> : null}
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
                            src='https://res.cloudinary.com/dafegosa/image/upload/v1611283043/girl-1990347_1920_rvvdad.jpg'
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
