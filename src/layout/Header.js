import React, { useState, useEffect } from "react";
import "../App.css";
import { FaBars, FaArrowRight, FaAngleRight, FaUser } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";

const Header = ({ children }) => {
  const [hover, setHover] = useState(false);
  const [user, setUser] = useState("");
  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("user")));
    console.log(user);
  }, []);

  return (
    <div>
      <nav id='navbar'>
        <div id='navbar-container'>
          <h2 className='navbar-logo'>
            <Link to='/'>NEWS</Link>
          </h2>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <NavLink to='/source'>Source</NavLink>
            </li>
            <li>
              <NavLink to='/about'>About</NavLink>
            </li>
          </ul>

          {user ? (
            <div>
              <FaUser className='navbar-profile-icon'></FaUser>
            </div>
          ) : (
            <Link to='/signin' style={{ textDecoration: "none" }}>
              <button
                onMouseEnter={() => {
                  setHover(!hover);
                }}
                onMouseLeave={() => {
                  setHover(!hover);
                }}
                className='navbar-btn'
              >
                Sign In
                {hover ? (
                  <FaAngleRight className='angleRight'></FaAngleRight>
                ) : (
                  <FaArrowRight className='arrowRight'></FaArrowRight>
                )}
              </button>
            </Link>
          )}

          <FaBars className='navbar-icon' />
        </div>
      </nav>
      {children}
    </div>
  );
};

export default Header;
