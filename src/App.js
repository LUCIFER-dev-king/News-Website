import "./App.css";
import React from "react";
import { Switch } from "react-router";
import Home from "./pages/Home";
import About from "./pages/About";
import Source from "./pages/Source";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Article from "./pages/Article/Article";
import SignIn from "./pages/Authentication/Authentication";
import firebase from "firebase/app";

import firebaseConfig from "./config/firebaseconfig";
import ReadLater from "./pages/Bookmarks/ReadLater";
firebase.initializeApp(firebaseConfig);

function App() {
  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/source' component={Source} />
          <Route exact path='/about' component={About} />
          <Route exact path='/article' component={Article} />
        </Switch>
        <Route exact path='/readlater' component={ReadLater} />
        <Route exact path='/signin' component={SignIn} />
      </Router>
    </div>
  );
}

export default App;
