import React from "react";
import "../App.css";
import { FaBars } from "react-icons/fa";
const Header = () => {
  return (
    <nav id='navbar'>
      <div id='navbar-container'>
        <h2 className='navbar-logo' Link='/'>
          NEWS
        </h2>
        <ul>
          <li>
            <a Link='/'>Home</a>
          </li>
          <li>
            <a Link='/source'>Source</a>
          </li>
          <li>
            <a Link='/about'>About</a>
          </li>
        </ul>
        <button className='navbar-btn'>Sign In</button>
        <FaBars className='navbar-icon' />
      </div>
    </nav>
  );
};

export default Header;
