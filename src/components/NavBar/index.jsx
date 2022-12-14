import React from 'react'
import CartWidget from '../CartWidget'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { Shop } from '../../context/CartContext'

const NavBar = () => {
  const { carrito } = useContext(Shop)
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow p-3 mb-5 bg-body rounded">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Evil Compragamer</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
          <ul className="navbar-nav mb-2 mb-lg-0">
            {carrito.length ? <CartWidget /> : <></>}
            <li className="nav-item">
              <Link className="nav-link" to="/category/MLA1694">Memorias Ram</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/category/MLA1693">Procesadores</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/category/MLA1658">Placas de video</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/category/MLA1672">Almacenamiento</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/cart">Carrito</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default NavBar