import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import { Card } from 'react-bootstrap'

const Details = ({ info, closeInfo }) => {
  return (
    <React.Fragment>
      <Card
        className='card text-white bg-dark mb-3 text-center'
        style={{
          width: '100%',
          marginLeft: '0',
        }}
      >
        <div class='card-header title'>
          <strong>{info.name}</strong>
        </div>
        <Card.Body>
          <Card.Img variant='top' src={info.image} alt='' />
          <br />
          <br />
          <Card.Title>
            {info.type === 'artists'
              ? null
              : info.type === 'albums'
              ? 'Artista: '
              : 'Creador: {info.artist}'}
          </Card.Title>
          <Card.Title>
            {info.type === 'artists' ? null : info.type === 'albums' ? (
              `Fecha de Lanzamiento: ${info.release}`
            ) : (
              <a href={info.release}>
                Conoce el perfil de {info.artist} en Spotify
              </a>
            )}
          </Card.Title>
          <Card.Title>
            {info.type === 'artists' ? 'Seguidores:' : 'Número de tracks:'}{' '}
            {info.tracks}
          </Card.Title>
          <Card.Title>
            <a href={info.url}>
              {' '}
              {info.type === 'artists'
                ? `Ir al perfil de ${info.name} en Spotify`
                : 'Escuchar en Spotify'}
            </a>
          </Card.Title>
          <Card.Text>
            <button
              className='btn btn-secondary btn-lg btn-block'
              type='button'
              onClick={() => {
                closeInfo()
              }}
            >
              cerrar
            </button>
          </Card.Text>
        </Card.Body>
      </Card>
    </React.Fragment>
  )
}

export default Details
