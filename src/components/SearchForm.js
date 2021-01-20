import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'

const SearchForm = (props) => {
  const [searchMe, setSearchMe] = useState('')
  const [errorMsg, setErrorMsg] = useState('')
  const handleSearch = (e) => {
    e.preventDefault()

    if (searchMe.trim() !== '') {
      setErrorMsg('')
      props.handleSearch(searchMe)
    } else {
      setErrorMsg('Please enter a search term.')
    }
  }
  return (
    <div>
      <Form onSubmit={handleSearch}>
        {/* <p className='errorMsg'>This is the SearchForm</p> */}
        <Form.Group controlId='formBasicEmail'>
          <Form.Label style={{ color: '#fce0a2' }}>
            ¿Qué estás buscando?
          </Form.Label>
          <Form.Control
            type='search'
            name='searchTerm'
            value={searchMe}
            onChange={(e) => setSearchMe(e.target.value)}
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
