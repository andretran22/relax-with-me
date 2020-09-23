import React from "react";

import BrowserRouter from "react-router-dom/BrowserRouter";
import Switch from "react-router-dom/Switch";
import Route from "react-router-dom/Route";

import Home from "../Home/Home";
import Relax from "../Relax/Relax";
import About from "../About/About";

import Toolbar from "../Navbar/Navbar";
import "./App.css";

function App() {
  return (
    <div className="full-height">
      <BrowserRouter >
        <Toolbar />
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/relax" component={Relax}/>
          <Route exact path="/about" component={About}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
