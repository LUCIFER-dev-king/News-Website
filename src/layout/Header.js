import React, { useState, useEffect, useRef } from "react";
import { useHistory } from "react-router-dom";
import "../App.css";
import {
  FaBars,
  FaArrowRight,
  FaAngleRight,
  FaUser,
  FaTimes,
} from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import Toast from "../components/Toast";

const Header = ({ children }) => {
  let history = useHistory();
  const [hover, setHover] = useState(false);
  const [user, setUser] = useState("");
  const barIcon = useRef("");
  var sidebarContainer = useRef("");
  const [toastMsg, setToastMsg] = useState("");
  const [toastClasName, settoastClasName] = useState("");
  const navbarProfile = useRef("");
  const [mouseEnter, setMouseEnter] = useState(false);

  const openSideBar = () => {
    barIcon.current.style.opacity = "0";
    sidebarContainer.current.className = "sidebar-container active";
  };

  const closeSideBar = () => {
    barIcon.current.style.opacity = "1";
    sidebarContainer.current.className = "sidebar-container";
  };

  const openNavbarProfileDD = () => {
    navbarProfile.current.className = "navbar-profile-dd active";
  };

  const closeNavbarProfileDD = () => {
    console.log(mouseEnter);
    if (mouseEnter === false) {
      setTimeout(() => {
        navbarProfile.current.className = "navbar-profile-dd";
      }, 3000);
    }
  };

  const toread = () => {
    setMouseEnter(true);
    setTimeout(() => {
      history.push({
        pathname: "/readlater",
      });
    }, 2000);
  };

  const isUserAuthenticated = () => {
    return user ? (
      <div>
        <FaUser
          onMouseEnter={() => {
            openNavbarProfileDD();
          }}
          onMouseLeave={() => {
            closeNavbarProfileDD();
          }}
          className='navbar-profile-icon'
        ></FaUser>
        <div ref={navbarProfile} className='navbar-profile-dd'>
          <ul>
            <li>
              <Link onClick={toread}>Read Later</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link onClick={signout} to='/'>
                Sign Out
              </Link>
            </li>
          </ul>
        </div>
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
    );
  };

  const signout = () => {
    localStorage.clear();
    setMouseEnter(true);
    setToastMsg("Signed out is successfully");
    settoastClasName("toast active");
    setTimeout(() => {
      barIcon.current.style.opacity = "1";
      sidebarContainer.current.className = "sidebar-container";
    }, 2000);
  };

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("user")));
    console.log(user);
  }, []);

  return (
    <div>
      {toastMsg && <Toast toastTitle={toastMsg} className={toastClasName} />}
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
          {isUserAuthenticated()}

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
              <div className='sidebar-menu-list'>
                <Link to='/'>Home</Link>
              </div>
              <div className='sidebar-menu-list'>
                <Link to='/source'>Source</Link>
              </div>
              <div className='sidebar-menu-list'>
                <Link to='/about'>About</Link>
              </div>
              <div className='sidebar-menu-list'>
                <Link to='/readlater'>Bookmark</Link>
              </div>
              <div className='sidebar-menu-list'>
                {user ? (
                  <Link onClick={signout}>Sign out</Link>
                ) : (
                  <Link to='/signin'>Sign In</Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>
      {children}
    </div>
  );
};

export default Header;
