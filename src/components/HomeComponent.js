import React from 'react'
import BooksList from './BooksList'

const HomeComponent = ({ libros }) => {
  return (
    <>
      <h2 className="text-center">Libros</h2>
      <div className="container">
        <div className="row">
          {libros.map((libro, index) => (
            <div className="col-4 mb-4">
              <BooksList
                key={index}
                titulo={libro.titulo}
                imagen={libro.imagen}
                autor={libro.autor}
                isbn={libro.isbn}
                idioma={libro.idioma}
                categoria={libro.categoria}
                precio={libro.precio}
                url={`/libros/${index}`}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default HomeComponent
