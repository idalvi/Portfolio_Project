import React from 'react';
import './Header.css';

function Header() {
  return (
    <nav className="header">
      <div className="logo">
        <h1>My Portfolio</h1>
      </div>
      <ul className="nav-links">
        <li><a href="#summary">Summary</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#contact">ContactMe</a></li>
      </ul>
    </nav>
  );
}

export default Header;
