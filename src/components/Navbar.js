import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

class Navbar extends Component {
  render() {
    return (
      <div className="Navbar">
        <NavLink 
          exact 
          activeClassName="Navbar-active" 
          to="/">
            Dog Finder
        </NavLink>
        <NavLink 
          exact 
          activeClassName="Navbar-active" 
          to="/home">
            Home
        </NavLink>
        <NavLink 
          exact 
          activeClassName="Navbar-active" 
          to="/felix">
            Felix
        </NavLink>
        <NavLink 
          exact 
          activeClassName="Navbar-active" 
          to="/romeo">
            Romeo
        </NavLink>
        <NavLink 
          exact 
          activeClassName="Navbar-active" 
          to="/julius">
            Julius
        </NavLink>
      </div>
    )
  }
}

export default Navbar;