import React from 'react'
import { Link } from 'react-router-dom';
import { Media } from 'reactstrap'
import Compra from './CompraComponent';

const CarritoComponet = ({ libros, compras, setcompras, eliminarCompra, checkout }) => {

  if (localStorage.getItem('compras')) {
    setcompras(JSON.parse(localStorage.getItem('compras')))
    localStorage.clear()
  }

  if (compras.length > 0) {
    const librosSeleccionados = compras.map((compra) => (
      libros.map((libro, index) => (
        index === parseInt(compra.compraId) ?
          <div key={index} className="col-12 mt-5">
            <Compra libro={libro} eliminarCompra={eliminarCompra} index={index} />
          </div> : null
      ))
    ))

    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2>Compras</h2>
            <hr />
          </div>
        </div>
        <div className="row">
          <Media list>
            {librosSeleccionados}
          </Media>
        </div>
        <div className="row">
          <div className='d-flex justify-content-center mb-2'>
            <button className="btn btn-success" onClick={() => checkout()}>Comprar</button>&ensp;
            <Link to="/home">
              <button className="btn btn-success">Lista de libros</button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
  else {
    return (
      <div className="row">
        <div className='d-flex justify-content-center'>
          <Link to="/home">
            <button className="btn btn-success my-2">Lista de libros</button>
          </Link>
        </div>
      </div>
    )
  }
}

export default CarritoComponet
