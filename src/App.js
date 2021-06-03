import logo from "./logo.svg";
import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Switch } from "react-router";
import Home from "./pages/Home";
import About from "./pages/About";
import Source from "./pages/Source";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Article from "./pages/Article/Article";
import SignUp from "./pages/Authentication/SignUp";
import SignIn from "./pages/Authentication/SignIn";
import firebase from "firebase/app";

import firebaseConfig from "./config/firebaseconfig";
import ReadLater from "./pages/Bookmarks/ReadLater";
firebase.initializeApp(firebaseConfig);

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
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/source' component={Source} />
          <Route exact path='/about' component={About} />
          <Route exact path='/article' component={Article} />
          <Route exact path='/signup' component={SignUp} />
        </Switch>
        <Route exact path='/readlater' component={ReadLater} />
        <Route exact path='/signin' component={SignIn} />
      </Router>
    </div>
  );
}

export default App;
