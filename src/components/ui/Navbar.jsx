import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthProvider";
import '../../styles/App.css';
import { useEffect } from "react";

export function Navbar() {
  const navigate = useNavigate();

  const { user, login, logout } = useAuth()

  const handleLogout = () => {
    logout()
    navigate("/");
  }
  const handleLogIn = () => {
    navigate("/login");
  }
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
              <NavLink className="nav-link" to="/">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/login">Login</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/admin">Admin</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/crear">Crear</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/lista">Lista</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/token">Token</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/personales">NiñoData</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/independencia">Independencia</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/habilidades-aseo">Habilaseo</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/habilidades-vestido">Habilvestido</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/habilidades-alimentacion">Habilalimenta</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/habitos-alimentacion">Hábitalimenta</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/habitos-dormir">Hábitsueño</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/responsabilidades">Responsab</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/adicionales">Adicionales</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/resultados">Result</NavLink>
            </li>
          </ul>
        </div>
        <div
          className='collapse navbar-collapse justify-content-end'
          id='navbarNavLogout'>
          <span className='nav-item nav-link text-primary mx-3'>
            {user?.email}
          </span>
         {
            user ? (
                <>
                  <button className='btn btn-outline-danger' onClick={handleLogout}>Logout</button>
                </>
            ) : (
              <>
               <button className='btn btn-outline-success' onClick={handleLogIn}>Login</button>
              </>
            )
        }
        </div>
      </div>
    </nav>
  );
}