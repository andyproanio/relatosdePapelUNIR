import React from 'react'
import { FormGroup, Input } from 'reactstrap'
import { Link } from 'react-router-dom'

const SearchComponent = () => {
  return (
    <div className='container mt-2'>
      <div className="col-12">
        <h2>Buscar libro</h2>
        <hr />
      </div>
      <div className="row">
        <FormGroup className='col-6'>
          <Input type="search" placeholder='Search' className='col-12'></Input>
        </FormGroup>
        <span className="icon col-6">🔍</span>
        <Link to="/home">
          <button className="btn btn-success mb-2">Lista de libros</button>
        </Link>
      </div>
    </div>
  )
}

export default SearchComponent
