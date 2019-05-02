import React, { Component } from 'react';
import logo from './logo.svg';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <header className="Header">
        <img src={logo} className="Logo" alt="logo" />
        <p>
          🕛 <code>S L E E P T R A C K E R 🕦</code>
        </p>
        <a
          className="Link"
          href="https:reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn More
        </a>
      </header>
    )
  }
}

export default Header;
