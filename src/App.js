import logo from "./logo.svg";
import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Switch } from "react-router";
import Home from "./pages/Home";
import About from "./pages/About";
import Source from "./pages/Source";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import Article from "./pages/Article";

function App() {
  const test = () => {
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=us&apiKey=a281cfcb6ccc4700a87c07bfa50773c9"
      )
      .then((res) => {
        console.log(res.data);
      });
  };
  return (
    <div className='App'>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/source' component={Source} />
          <Route path='/about' component={About} />
          <Route path='/article' component={Article} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
