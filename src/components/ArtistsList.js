import React from 'react'
import { Card } from 'react-bootstrap'
import _ from 'lodash'

const ArtistsList = ({ artists }) => {
  return (
    <React.Fragment>
      {Object.keys(artists).length > 0 && (
        <div className='artists'>
          {artists.items.map((artist, index) => {
            return (
              <React.Fragment key={index}>
                <Card
                  className='card text-white bg-dark mb-3'
                  style={{ width: '16rem' }}
                >
                  <a
                    target='_blank'
                    href={artist.external_urls.spotify}
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
      )}
    </React.Fragment>
  )
}

export default ArtistsList
