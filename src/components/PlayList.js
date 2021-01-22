import React, { useState } from 'react'
import { Card } from 'react-bootstrap'
import _ from 'lodash'
import { useDispatch } from 'react-redux'
import Details from './Details'

const PlayList = ({ playlist }) => {
  const dispatch = useDispatch()
  const [showInfo, setShowInfo] = useState(false)
  const [playlistInfo, setPlaylistInfo] = useState({})
  let image = ''
  const handlePlaylist = (itemId, index) => {
    let playlistSelected = playlist.items.filter(
      (playlist) => playlist.id === itemId
    )
    playlistSelected = playlistSelected[0]
    if (playlistSelected.images.length !== 0) {
      image = playlistSelected.images[0].url
    } else {
      image =
        'https://res.cloudinary.com/dafegosa/image/upload/v1611283043/girl-1990347_1920_rvvdad.jpg'
    }
    setPlaylistInfo({
      artist: playlistSelected.owner.display_name,
      image,
      name: playlistSelected.name,
      release: playlistSelected.owner.external_urls.spotify,
      tracks: playlistSelected.tracks.total,
      url: playlistSelected.external_urls.spotify,
      type: 'playlist',
    })

    setShowInfo(true)
  }
  const closeInfo = () => {
    setShowInfo(false)
  }
  return (
    <React.Fragment>
      {showInfo ? <Details info={playlistInfo} closeInfo={closeInfo} /> : null}
      {
        <div>
          {!showInfo
            ? Object.keys(playlist).length > 0 && (
                <div className='playlist'>
                  {playlist.items.map((item, index) => {
                    return (
                      <React.Fragment key={index}>
                        <Card
                          className='card text-white bg-dark mb-3'
                          style={{
                            width: '16rem',
                          }}
                          onClick={() => {
                            handlePlaylist(item.id, index)
                          }}
                        >
                          <a
                            target='_blank'
                            rel='noopener noreferrer'
                            className='card-image-link'
                          >
                            {!_.isEmpty(item.images) ? (
                              <Card.Img
                                variant='top'
                                src={item.images[0].url}
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
                            <Card.Title>{item.name}</Card.Title>
                            <Card.Text>
                              <small>
                                {/* {item.artists
                                  .map((artist) => artist.name)
                                  .join(', ')} */}
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
        </div>
      }
    </React.Fragment>
  )
}

export default PlayList
