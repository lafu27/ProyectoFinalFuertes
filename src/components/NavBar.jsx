import React from 'react';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';
import 'bootstrap/dist/css/bootstrap.min.css';

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg" style={{ backgroundColor: '#000000' }}>
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img 
            src="/img/logo.png"
            alt="PC Monster Components"
            className="d-inline-block align-text-top"
            style={{ height: '50px' }}
          />
        </Link>

        <button 
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link text-light" to="/">Inicio</Link>
            </li>
            <li className="nav-item dropdown">
              <a 
                className="nav-link dropdown-toggle text-light" 
                href="#" 
                id="navbarDropdown" 
                role="button" 
                data-bs-toggle="dropdown" 
                aria-expanded="false"
              >
                Componentes
              </a>
              <ul className="dropdown-menu bg-dark" aria-labelledby="navbarDropdown">
                <li>
                  <Link className="dropdown-item text-light hover-green" to="/categoria/procesadores">
                    Procesadores
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item text-light hover-green" to="/categoria/tarjetas-graficas">
                    Tarjetas Gráficas
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item text-light hover-green" to="/categoria/memorias">
                    Memorias RAM
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item text-light hover-green" to="/categoria/placas-madre">
                    Placas Madre
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item text-light hover-green" to="/categoria/almacenamiento">
                    Almacenamiento
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item text-light hover-green" to="/categoria/fuentes">
                    Fuentes de Poder
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item text-light hover-green" to="/categoria/gabinetes">
                    Gabinetes
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light" to="/arma-tu-pc">Arma tu PC</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light" to="/ofertas">Ofertas</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light" to="/soporte">Soporte</Link>
            </li>
          </ul>
          
          <form className="d-flex me-3">
            <input 
              className="form-control me-2" 
              type="search" 
              placeholder="Buscar componentes..." 
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">Buscar</button>
          </form>
          
          <CartWidget />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;