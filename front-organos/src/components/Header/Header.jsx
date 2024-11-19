import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../styles/Header.css';

function Header({ onLogout }) {
  return (
    <nav className="navbar">
      <div className="container">
        <NavLink className="navbar-brand" to="/organs">
          Organ<span className="highlight">ization</span>
        </NavLink>
        <div className="navbar-menu">
          <ul className="navbar-links">
            <li><NavLink className="nav-link" to="/organs">Organs</NavLink></li>
            <li><NavLink className="nav-link" to="/providers">Providers</NavLink></li>
            <li><NavLink className="nav-link" to="/clients">Clients</NavLink></li>
            <li><NavLink className="nav-link" to="/relocations">Relocations</NavLink></li>
            <li><NavLink className="nav-link" to="/quality-assurance">Quality Assurance</NavLink></li>
          </ul>
        </div>
        <button className="btn-logout" onClick={onLogout}>Logout</button>
      </div>
    </nav>
  );
}

export default Header;
