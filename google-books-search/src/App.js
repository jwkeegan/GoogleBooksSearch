import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Nav from "./components/Nav";
import Jumbotron from "./components/Jumbotron";
import Books from "./pages/Books";
import Saved from "./pages/Saved";

function App() {
  return (
    <Router>
      <div >
        <Nav />
        <Jumbotron />
        <Switch>
          <Route exact path="/" component={Books} />
          <Route exact path="/saved" component={Saved} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
