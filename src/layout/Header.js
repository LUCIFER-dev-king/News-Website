import React, { useState, useEffect, useRef } from "react";
import "../App.css";
import {
  FaBars,
  FaArrowRight,
  FaAngleRight,
  FaUser,
  FaTimes,
} from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";

const Header = ({ children }) => {
  const [hover, setHover] = useState(false);
  const [user, setUser] = useState("");
  const barIcon = useRef("");
  var sidebarContainer = useRef("");

  const openSideBar = () => {
    barIcon.current.style.opacity = "0";
    sidebarContainer.current.className = "sidebar-container active";
  };

  const closeSideBar = () => {
    barIcon.current.style.opacity = "1";
    sidebarContainer.current.className = "sidebar-container";
  };

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

          <div ref={barIcon} className='navbar-icon'>
            <FaBars onClick={openSideBar}></FaBars>
          </div>

          <div ref={sidebarContainer} className='sidebar-container'>
            <div className='sidebar-icon'>
              <FaTimes
                onClick={closeSideBar}
                style={{ color: "#fff" }}
              ></FaTimes>
            </div>
            <div className='sidebar-menu-wrapper'>
              <div className='sidebar-menu-list'>Home</div>
              <div className='sidebar-menu-list'>Source</div>
              <div className='sidebar-menu-list'>About</div>
              <div className='sidebar-menu-list'>Bookmark</div>
              <div className='sidebar-menu-list'>Sign In</div>
            </div>
          </div>
        </div>
      </nav>
      {children}
    </div>
  );
};

export default Header;
