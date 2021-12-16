// vendors
import React from "react";
import { Link } from 'react-router-dom';
import jwt from 'jsonwebtoken';

const Menu = () => {
  const token = sessionStorage.getItem('token');
  const user = jwt.decode(token)?.user;

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav justify-content-end">
            {token ? <>Hola, {user.fullName}</> : (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/users/login">{'Ingresa'}</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/users/signup">{'Regístrate'}</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Menu;