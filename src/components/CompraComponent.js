import React from 'react'
import { Media, Button } from 'reactstrap'

const CompraComponent = ({ libro, eliminarCompra, index }) => {
  return (
    <Media tag="li" className='d-flex'>
      <Media left middle>
        <Media object src={libro.imagen} height={200} alt={libro.titulo} />
      </Media>&emsp;&emsp;&emsp;
      <Media body className="col-6">
        <Media heading>{libro.titulo}</Media>
        <p>{libro.sinopsis}</p>
        <p>${libro.precio}</p>
        <Button outline color="danger" onClick={() => eliminarCompra(index)}>
          <span className="fa fa-times"></span>
        </Button>
      </Media>
    </Media>
  )
}

export default CompraComponent
