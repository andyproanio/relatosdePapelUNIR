import React from 'react'
import { Link } from 'react-router-dom';
import { Card, CardImg, CardTitle, CardBody, CardText } from 'reactstrap'
const BooksList = ({ titulo, imagen, autor, isbn, idioma, categoria, precio, url }) => {
  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle><h5>{titulo}</h5></CardTitle>
          <CardImg className="imagen" src={imagen} alt={titulo}></CardImg>
          <CardText>autor: {autor}</CardText>
          <CardText>isbn: {isbn}</CardText>
          <CardText>idiom: {idioma}</CardText>
          <CardText>categoria: {categoria}</CardText>
          <CardText>precio: ${precio}</CardText>
          <Link to={url} >
            <button className="btn btn-success">Sinopsis</button>
          </Link>
        </CardBody>
      </Card>
    </div>
  )
}

export default BooksList;