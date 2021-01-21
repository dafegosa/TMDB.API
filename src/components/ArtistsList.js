import React, { useState } from 'react'
import { Card } from 'react-bootstrap'
import _ from 'lodash'
import { useDispatch } from 'react-redux'
import Details from './Details'

const ArtistsList = ({ artists }) => {
  const dispatch = useDispatch()
  const [showInfo, setShowInfo] = useState(false)
  const [artistsInfo, setArtistsInfo] = useState({})
  let image = ''
  const handleArtists = (artistsId, index) => {
    let artistsSelected = artists.items.filter(
      (artists) => artists.id === artistsId
    )
    artistsSelected = artistsSelected[0]
    if (artistsSelected.images.length !== 0) {
      image = artistsSelected.images[0].url
    } else {
      image =
        'https://pixabay.com/get/ga4a11bb5bdbb04bea17eec179891bc2e4e8acd6195be0a7dcb99354d8a60b22b4ab42bba0df7492e78790bb147c966460418e88c5bff952318e54b7e56caeb39_1920.jpg'
    }
    setArtistsInfo({
      artist: artistsSelected.name,
      image,
      name: artistsSelected.name,
      release: '',
      tracks: artistsSelected.followers.total,
      url: artistsSelected.external_urls.spotify,
      type: 'artists',
    })
    console.log('LOS ARTISTAS => ', artists)
    console.log('EL ID => ', artistsId)
    console.log('EL ARTISTA => ', artistsSelected)
    console.log('EL ARTISTA => ', artistsSelected.name)
    setShowInfo(true)
  }
  const closeInfo = () => {
    setShowInfo(false)
  }
  return (
    <React.Fragment>
      {showInfo ? <Details info={artistsInfo} closeInfo={closeInfo} /> : null}
      {
        <div>
          {!showInfo
            ? Object.keys(artists).length > 0 && (
                <div className='artists'>
                  {artists.items.map((artist, index) => {
                    return (
                      <React.Fragment key={index}>
                        <Card
                          className='card text-white bg-dark mb-3'
                          style={{
                            width: '16rem',
                          }}
                          onClick={() => {
                            handleArtists(artist.id, index)
                          }}
                        >
                          <a
                            target='_blank'
                            rel='noopener noreferrer'
                            className='card-image-link'
                          >
                            {!_.isEmpty(artist.images) ? (
                              <Card.Img
                                variant='top'
                                src={artist.images[0].url}
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
                            <Card.Title>{artist.name}</Card.Title>
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

export default ArtistsList
