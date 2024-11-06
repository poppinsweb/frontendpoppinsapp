import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthProvider";
import { BsCart4 } from "react-icons/bs";
import "../../styles/App.css";

export function Navbar() {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const handleLogout = () => {
    localStorage.clear();
    logout();
    navigate("/");
  };

  const handleLogIn = () => {
    navigate("/login");
  };

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <h1 className="navbar-brand">Poppins</h1>
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
          <ul className="navbar-nav">
            {/* Enlaces comunes */}
            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                Home
              </NavLink>
            </li>

            {/* Enlaces para usuarios no logueados */}
            {!user && (
              <>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/login">
                    Login
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/carrito">
                    Cart
                  </NavLink>
                </li>
              </>
            )}

            {/* Enlaces para admin */}
            {user && user.admin && (
              <>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/crear">
                    Crear usuario
                  </NavLink>
                </li>
                {/* <li className="nav-item">
                  <NavLink className="nav-link" to="/admin">
                    Admin
                  </NavLink>
                </li> */}
                <li className="nav-item">
                  <NavLink className="nav-link" to="/lista">
                    Lista
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/token">
                    Token
                  </NavLink>
                </li>
              </>
            )}

            {/* Enlaces para usuarios logueados */}
            {user && !user.admin && (
              <>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/token">
                    Token
                  </NavLink>
                </li>
                {/* <li className="nav-item">
                  <NavLink className="nav-link" to="/carrito">
                    Cart
                  </NavLink>
                </li> */}
              </>
            )}
          </ul>
        </div>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNavLogout"
        >
          <button className="btn icon-cart">
            <NavLink className="nav-link" to="/carrito">
              <BsCart4 />
            </NavLink>
          </button>
          <span className="nav-item nav-link text-primary mx-3">
            {user?.email}
          </span>
          {user ? (
            <button className="btn btn-outline-danger" onClick={handleLogout}>
              Logout
            </button>
          ) : (
            <button className="btn btn-outline-success" onClick={handleLogIn}>
              Login
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}
