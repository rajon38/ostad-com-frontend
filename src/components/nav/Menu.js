import React from 'react';
import { useNavigate, NavLink } from 'react-router-dom';
import { useAuth } from '../../context/auth'

const Menu = () => {

    //context
    const [auth, setAuth] = useAuth();
    //hooks
    const navigate = useNavigate();

    const logout = () => {
        setAuth({...auth, user:null, token: ""});
        localStorage.removeItem('auth');
        navigate("/login");
    };

    return (
        <div>
            <ul className="nav d-flex justify-content-between shadow-sm mb-2">
        <li className="nav-item">
          <NavLink className="nav-link" aria-current="page" to="/">
            HOME
          </NavLink>
        </li>

        {!auth?.user ? (
          <>
            <li className="nav-item">
              <NavLink className="nav-link" to="/login">
                LOGIN
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/register">
                REGISTER
              </NavLink>
            </li>
          </>
        ) : (
          <diV className="dropdown">
            <li>
              <a className="nav-link pointer dropdown-toggle" data-bs-toggle="dropdown">
                {auth?.user?.name?.toUpperCase()}
              </a>

              <ul className="dropdown-menu">
                <li>
                  <NavLink className="nav-link" to={`/dashboard/${auth?.user?.role === 1 ? "admin" : "user"}`}>
                    Dashboard
                  </NavLink>
                </li>

                <li className="nav-item pointer">
                  <a onClick={logout} className="nav-link">
                  LOGOUT
                  </a>
                </li>

              </ul>
            </li>
          </diV>
          
        )}
      </ul>
        </div>
    );
};

export default Menu;