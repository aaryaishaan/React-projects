import './Navbar.css';
import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src="/logo.png" alt="Nike Logo" />
      </div>

      <ul className="nav-links">
        <li>Menu</li>
        <li>Location</li>
        <li>About</li>
        <li>Contact</li>
      </ul>

      <button className="login-btn">Login</button>
    </nav>
  );
};

export default Navbar;
