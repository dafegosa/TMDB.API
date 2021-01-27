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
          <Card.Title>{info.artist}</Card.Title>

          <Card.Title>{info.release}</Card.Title>
          <Card.Title>Votos: {info.tracks}</Card.Title>

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
