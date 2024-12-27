import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { Card, CardImg, CardTitle, CardBody, CardText } from 'reactstrap'

const LibroComponent = ({ comprar, libros }) => {

  const { libroId } = useParams();

  return (
    libros.map((libro, index) => (
      index === parseInt(libroId) ?
        <div className='d-flex justify-content-center'>
          <div className="col-4 my-4">
            <Card>
              <CardBody>
                <CardTitle><h5>{libro.titulo}</h5></CardTitle>
                <CardImg className="imagen" src={libro.imagen} alt={libro.titulo}></CardImg>
                <CardText>autor: {libro.autor}</CardText>
                <CardText>isbn: {libro.isbn}</CardText>
                <CardText>idiom: {libro.idioma}</CardText>
                <CardText>categoria: {libro.categoria}</CardText>
                <CardText>precio: ${libro.precio}</CardText>
                <CardText>{libro.sinopsis}</CardText>
                <button className="btn btn-success" onClick={() => comprar(index)}>Añadir al carrito</button>&ensp;
                <Link to="/home">
                  <button className="btn btn-success">Regresar</button>
                </Link>
              </CardBody>
            </Card></div></div> : null
    ))
  )
}

export default LibroComponent
