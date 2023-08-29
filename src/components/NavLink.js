import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/images/logo.png';
import './module.NavLink.css';

const NavLinkComponent = () => {
  const clickedStyle = ({ isActive }) => ({
    color: isActive ? 'black' : 'red',
  });
  return (
    <nav className="Navbar">
      <div className="nav-container">
        <NavLink to="/" className="nav-logo">
          <img src={logo} alt="logo" className="logo" />
          <h1>Space Travellers</h1>
        </NavLink>
        <ul className="nav-items">
          <li>
            <NavLink to="/" onClick={clickedStyle} className="navlinks">
              Rockets
            </NavLink>
          </li>
          <li>
            <NavLink to="/missions" onClick={clickedStyle} className="navlinks">
              Missions |
            </NavLink>
          </li>
          <li>
            <NavLink to="/my-profile" onClick={clickedStyle} className="navlinks">
              My Profile
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavLinkComponent;
