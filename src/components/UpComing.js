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
  const urlBase = 'https://image.tmdb.org/t/p/original/'

  const handleAlbum = (albumId, index) => {
    let albumSelected = albums.results.filter((album) => album.id === albumId)
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
          {!!albums.results &&
            albums.results.map((album, index) => {
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
                      <Card.Text>
                        {/* <small>
                            {album.artists
                              .map((artist) => artist.name)
                              .join(', ')}
                          </small> */}
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
