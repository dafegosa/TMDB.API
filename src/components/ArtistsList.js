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
        'https://res.cloudinary.com/dafegosa/image/upload/v1611283043/girl-1990347_1920_rvvdad.jpg'
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
                                src='https://res.cloudinary.com/dafegosa/image/upload/v1611283043/girl-1990347_1920_rvvdad.jpg'
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
