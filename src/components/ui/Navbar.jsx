import { useAuth } from "../../hooks/useAuth";
import { NavLink, useNavigate } from "react-router-dom";

export function Navbar() {
  const navigate = useNavigate();
  const { user, logout } = useAuth()

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
              <NavLink className="nav-link" to="/habilidades-aseo">Habilidades aseo</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/habilidades-vestido">Habilidades vestido</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/habilidades-alimentacion">Habilidades alimentación</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/habitos-alimentacion">Hábitos alimentación</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/habitos-dormir">Hábitos sueño</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/responsabilidades">Responsabilidades</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/resultados">Resultados</NavLink>
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
                  <button className='btn btn-outline-success' onClick={handleLogout}>Logout</button>
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