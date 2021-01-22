import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'

const SearchForm = (props) => {
  const [searchMe, setSearchMe] = useState('')
  const [errorMsg, setErrorMsg] = useState(false)
  const handleSearch = (e) => {
    e.preventDefault()

    if (searchMe.trim() !== '') {
      props.handleSearch(searchMe)
    } else {
      setErrorMsg(true)
    }
  }
  return (
    <div>
      <Form onSubmit={handleSearch}>
        {errorMsg ? (
          <p className='errorMsg'>
            No podemos saber qué estás buscando{' '}
            <i
              style={{ fontSize: '1rem' }}
              class='em em-confused'
              aria-role='presentation'
              aria-label='CONFUSED FACE'
            ></i>
            . <br />
            Ingresa una palabra relacionada con lo que buscas e ¡intentalo de
            nuevo!{' '}
            <i
              style={{ fontSize: '1rem' }}
              class='em em-white_check_mark'
              aria-role='presentation'
              aria-label='WHITE HEAVY CHECK MARK'
            ></i>
            .
          </p>
        ) : null}
        <Form.Group controlId='formBasicEmail'>
          <Form.Label data-testId='testingText' style={{ color: '#fce0a2' }}>
            ¿Qué estás buscando?
          </Form.Label>
          <Form.Control
            type='search'
            name='searchTerm'
            value={searchMe}
            onChange={(e) => {
              setSearchMe(e.target.value)
              setErrorMsg(false)
            }}
            placeholder='Buscar por album, artista o play list'
            autoComplete='off'
          />
        </Form.Group>
        <Button style={{ background: '#60be92', border: 'none' }} type='submit'>
          Search
        </Button>
      </Form>
    </div>
  )
}

export default SearchForm
