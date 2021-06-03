import React from "react";
import "../App.css";
import Header from "../layout/Header";
const About = () => {
  return (
    <Header>
      <div className='container'>
        <div className='about'>
          <div className='about-title'>API SOURCE</div>
          <div className='bar' style={{ width: "100px" }}></div>
          <div className='about-api'>
            <a href='https://newsapi.org/'>https://newsapi.org/</a>
          </div>
          <div className='about-title'>GITHUB LINK</div>
          <div className='bar' style={{ width: "100px" }}></div>
          <div className='about-api'>
            <a href='https://github.com/LUCIFER-dev-king/News-Website'>
              https://github.com/LUCIFER-dev-king/News-Website
            </a>
          </div>
        </div>
      </div>
    </Header>
  );
};

export default About;
