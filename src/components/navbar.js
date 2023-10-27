import React from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <h2>Innogent Training</h2>
      </div>
      <div className="navbar-center">
        <input type="text" placeholder="Search" className="search-input" />
      </div>
      <div className="navbar-right">
        <Link to="/create-ticket" className="buttons">Create Ticket</Link>
        <a className="navbar-brand" href="#">Notification</a>
        <a className="nav-link" href="#">Account Profile</a>
      </div>
    </nav>
  );
};

export default Navbar;
