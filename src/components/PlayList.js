import React from 'react'
import { Card } from 'react-bootstrap'
import _ from 'lodash'

const PlayList = ({ playlist }) => {
  return (
    <div>
      {Object.keys(playlist).length > 0 && (
        <div className='playlist'>
          {playlist.items.map((item, index) => {
            return (
              <React.Fragment key={index}>
                <Card
                  className='card text-white bg-dark mb-3'
                  style={{ width: '16rem' }}
                >
                  <a
                    target='_blank'
                    href={item.external_urls.spotify}
                    rel='noopener noreferrer'
                    className='card-image-link'
                  >
                    {!_.isEmpty(item.images) ? (
                      <Card.Img variant='top' src={item.images[0].url} alt='' />
                    ) : (
                      <Card.Img
                        src='https://pixabay.com/get/ga4a11bb5bdbb04bea17eec179891bc2e4e8acd6195be0a7dcb99354d8a60b22b4ab42bba0df7492e78790bb147c966460418e88c5bff952318e54b7e56caeb39_1920.jpg'
                        alt=''
                      />
                    )}
                  </a>
                  <Card.Body>
                    <Card.Title>{item.name}</Card.Title>
                    <Card.Text>
                      <small>By {item.owner.display_name}</small>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </React.Fragment>
            )
          })}
        </div>
      )}
    </div>
  )
}

export default PlayList
