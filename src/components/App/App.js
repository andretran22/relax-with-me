import React from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "../Home/Home";
import Relax from "../Relax/Relax";
import About from "../About/About";
import SongMenu from "../SongMenu/SongMenu";
import Toolbar from "../Navbar/Navbar";
import "./App.css";

function App() {
  let location = useLocation();
  let key = location.pathname;
  let hideToolBar = key === "/song-menu";

  return (
    <div className="full-height">
      {/* Toolbar */}
      {hideToolBar ? null : <Toolbar />}

      {/* pages/routes */}
      <main className="main-page">
          <AnimatePresence>
            <Switch location={location} key={key}>
              <Route exact path="/" component={Home} />
              <Route path="/relax" component={Relax} />
              <Route path="/about" component={About} />
              <Route path="/song-menu" component={SongMenu} />
            </Switch>
          </AnimatePresence>
      </main>
    </div>
  );
}

export default App;
