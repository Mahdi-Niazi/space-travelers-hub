import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/images/logo.png';
import './Styles/module.NavLink.css';

const NavLinkComponent = () => {
  const clickedStyle = ({ isActive }) => ({
    textDecoration: isActive ? 'underline' : 'none',
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
            <NavLink to="/" style={clickedStyle} className="navlinks">
              Rockets
            </NavLink>
          </li>
          <li className="li-missions">
            <NavLink to="/missions" style={clickedStyle} className="navlinks-missions">
              Missions
            </NavLink>
          </li>
          <li>
            <NavLink to="/my-profile" style={clickedStyle} className="navlinks">
              My Profile
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavLinkComponent;
