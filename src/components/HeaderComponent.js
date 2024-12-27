import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ compras }) => {
  return (
    <React.Fragment>
      <div className="jumbotron">
        <div className="container">
          <div className="row row-header justify-content-center">
            <div className="col-12 text-center">
              <h1>Relatos de Papel</h1>
              <Link to="/carrito">
                {(compras.length === 0) ? <span className="fa fa-shopping-cart fa-3x"></span> :
                <span className="fa fa-shopping-cart text-warning fa-3x"></span>}
              </Link>&emsp;
              <Link to="/buscar">
                <span className="fa fa-search fa-3x"></span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Header;