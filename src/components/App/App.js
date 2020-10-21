import React, { useEffect, useState } from "react";
import Row from "react-bootstrap/Row";
import { Router, Switch, Route, useLocation } from "react-router-dom";
import history from "./history";
// import { AnimatePresence } from "framer-motion";

//Players
import MainPlayer from "../MainPlayer/MainPlayer";
import SoundPlayer from "../MainPlayer/MainSoundPlayers";

// Page components
import Home from "../Home/Home";
import Relax from "../Relax/Relax";
import About from "../About/About";
import Toolbar from "../Navbar/Navbar";
import "./App.css";

import sounds from "../Sounds/Sounds";

function App() {
  const [playlist, setPlaylist] = useState(null);
  const [playlistData, setPlaylistData] = useState(null);
  const [playlistTitle, setPlaylistTitle] = useState(null);
  const [soundStates, setSoundStates] = useState([]);
  const [flip, setFlip] = useState(false);

  let location = useLocation();
  let key = location.pathname;
  let hideToolBar = key === "/song-menu";

  useEffect(() => {
    let initialSoundStates = sounds.map((soundDict) => {
      let soundImport = require("../../assets/Sounds/" +
        soundDict["pathSuffix"]);
      let state = {
        name: soundDict["name"],
        playing: false,
        volume: 0.5,
        import: soundImport,
      };
      return state;
    });
    setSoundStates(initialSoundStates);
  }, []);

  // handler for sound card state changes
  const handleChangeState = (key, newDict) => {
    let copy = soundStates;
    copy[key] = newDict;
    setSoundStates(copy);
    setFlip(!flip);
  };

  // handler when playlist is chosen from Relax.js component
  const handleSetPlaylist = (songImports, songsData, title) => {
    setPlaylist(songImports);
    setPlaylistData(songsData);
    setPlaylistTitle(title);
  }

  return (
    <div className="full-height">
      {/* Toolbar */}
      {hideToolBar ? null : <Toolbar />}

      {/* pages/routes */}
      {/* <main className="main-page"> */}
        {/* <AnimatePresence> */}
        <Router history={history}>
          <Switch location={location} key={key}>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route
              path="/relax"
              render={(props) => (
                <Relax
                  {...props}
                  setPlaylist={handleSetPlaylist}
                  soundStates={soundStates}
                  playlist={playlistData}
                  title={playlistTitle}
                  handleChangeState={handleChangeState}
                />
              )}
            />
          </Switch>
        </Router>
        {/* </AnimatePresence> */}
      {/* </main> */}

      {/* footer with main media player */}
      <Row className="main-playlist-player">
        <MainPlayer playlistSongs={playlist} playlist={playlistData}/>
      </Row>

      {/* create media players for every sound */}
      <Row>
        {soundStates.map((soundStateDict, index) => (
          <SoundPlayer
            key={index}
            flip={flip}
            soundStateDict={soundStateDict}
          />
        ))}
      </Row>
    </div>
  );
}

export default App;
