import React, { useState, useEffect } from 'react'
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import Header from '../components/HeaderComponent'
import Footer from '../components/FooterComponent'
import Wrapper from '../components/Wrapper';
import HomePage from '../components/HomeComponent';
import Libro from '../components/LibroComponent';
import Carrito from '../components/CarritoComponet';
import Search from '../components/SearchComponent';
import CheckOut from '../components/CheckOutComponent';
import { LIBROS } from '../shared/libros'

const MainComponent = () => {

  const [compras, setcompras] = useState([])
  const [libros, setlibros] = useState([])
  const [total, settotal] = useState(0)
  const navigate = useNavigate();

  var valorTotal = 0

  useEffect(() => {
    setlibros(LIBROS)
  }, [])

  const comprar = (idCompra) => {
    compras.push({ id: compras.length, compraId: idCompra })
    setcompras(compras)
  }

  const eliminarCompra = (id) => {
    const compra = compras.filter((compra) => compra.compraId === id)[0]
    compras.splice(compra.id, 1)
    for (var i = compra.id; i < compras.length; i++) {
      compras[i].id = i
    }
    setcompras(compras);
    localStorage.setItem('compras', JSON.stringify(compras))
    navigate("/carrito");
  }

  const checkout = () => {
    compras.forEach((compra) => {
      libros.forEach((libro, index) => {
        if (index === parseInt(compra.compraId))
          valorTotal += libro.precio
      })
    })
    settotal(valorTotal)
    navigate("/checkout");
  }

  const pagar = () => {
    alert("Ha realizado el pago exitosamente")
    setcompras([])
    navigate("/home")
  }

  return (
    <div>
      <Header compras={compras} />
      <Wrapper>
        <Routes>
          <Route path='/home' element={<HomePage libros={libros} />} />
          <Route path='/libros/:libroId' element={<Libro comprar={comprar} libros={libros} />} />
          <Route path='/carrito' element={<Carrito libros={libros} compras={compras} setcompras={setcompras} eliminarCompra={eliminarCompra} checkout={checkout} />} />
          <Route path='/buscar' element={<Search />} />
          <Route path='/checkout' element={<CheckOut total={total} pagar={pagar} />} />
          <Route path='*' element={<Navigate to="/home" replace />} />
        </Routes>
      </Wrapper>
      <Footer />
    </div >
  )
}

export default MainComponent
