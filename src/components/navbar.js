import React from 'react';
import './navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="navbar-center">
        <input type="text" placeholder="Search" className="search-input" />
      </div>
      <div className="navbar-right">
        <a className="navbar-brand" href="#">Your Logo</a>
        <a className="nav-link" href="#">Create Ticket</a>
        <a className="nav-link" href="#">Account Profile</a>
      </div>
    </nav>
  );
};

export default Navbar;
