import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import "./Navbar.css"

const navbar = () => {
  return (
      

    <nav className="navbar fondo_navbar navbar-expand-lg bg-light">
      <div className="container-fluid">Logo
      <a className="navbar-brand" href="#">Menu</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse px-5" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <a className="nav-link active" aria-current="page" href="#">Home</a>
        <a className="nav-link" href="#">Productos</a>
        <a className="nav-link" href="#">Contacto</a>
        
      </div>
    </div>
    <CartWidget/> 
  </div>
</nav>
  )
}

export default navbar