// import { useState } from "react";
import { NavLink } from "react-router-dom";

export function Navbar() {
  // const { login, handlerLogout } = useState();
  return (
    <nav className='navbar navbar-expand-lg bg-body-tertiary'>
      <div className='container-fluid'>
        <h1 className='navbar-brand'>
          Poppins
        </h1>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarNav'
          aria-controls='navbarNav'
          aria-expanded='false'
          aria-label='Toggle navigation' >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarNav'>
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">Inicio</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/login">Autenticación</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/admin">Admin</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/list">Lista</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/token">Token</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/personales">Encuesta</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/independencia">Independencia</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/habilidades">Habilidades</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/habitos">Hábitos</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/resultados">Resultados</NavLink>
            </li>
          </ul>
        </div>
        <div
          className='collapse navbar-collapse justify-content-end'
          id='navbarNavLogout'>
          {/* <span className='nav-item nav-link text-primary mx-3'>
            {login.user?.email}
          </span> */}
          <button
            // onClick={handlerLogout}  
            className='btn btn-outline-success'>
              Logout
          </button>
        </div>
      </div>
    </nav>
  );
}
