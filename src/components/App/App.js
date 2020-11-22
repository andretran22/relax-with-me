import React, { useEffect, useState } from "react";
import Row from "react-bootstrap/Row";
import { Switch, Route, useLocation , Redirect} from "react-router-dom";

import { Link } from "react-scroll";

//Players
import MainPlayer from "../MainPlayer/MainPlayer";
import SoundPlayer from "../MainPlayer/MainSoundPlayers";

// Page components
import Relax from "../Relax/Relax";
import About from "../About/About";
import Toolbar from "../Navbar/Navbar";
import "./App.css";

// All Sounds Info
import sounds from "../Sounds/Sounds";

function App() {
  const [playlist, setPlaylist] = useState(null);
  const [playlistData, setPlaylistData] = useState(null);
  const [playlistTitle, setPlaylistTitle] = useState(null);
  const [playlistImage, setPlaylistImage] = useState(null);  
  const [activeID, setActiveID] = useState(-1);
  const [soundStates, setSoundStates] = useState([]);
  const [songIndex, setSongIndex] = useState(0);
  const [highlight, setHighlight] = useState(0);
  const [flip, setFlip] = useState(false);

  let location = useLocation();
  let key = location.pathname;
  let hideButton = key !== "/";

  useEffect(() => {
    let initialSoundStates = sounds.map((soundDict) => {
      let soundImport = require("../../assets/Sounds/" + soundDict["pathSuffix"]);
      let soundImage = require("../../assets/SoundArt/" + soundDict["imageFile"]);
      let state = {
        name: soundDict["name"],
        playing: false,
        volume: 0.5,
        import: soundImport,
        image: soundImage
      };
      return state;
    });
    setSoundStates(initialSoundStates);
  }, []);

  // handler for sound card state changes
  const handleChangeState = (key, newDict) => {
    soundStates.splice(key, 1, newDict);
    setSoundStates(soundStates)
    setFlip(!flip);
  };

  // handler when playlist is chosen from Relax.js component
  const handleSetPlaylist = (songImports, songsData, title, image) => {
    setPlaylist(songImports);
    setPlaylistData(songsData);
    setPlaylistTitle(title);
    setPlaylistImage(image);
  };

  const highlightSong = (h) => {
    console.log(h);
    setHighlight(h);
  };

  return (
    <div className="App">

      {/* Toolbar */}
      <Toolbar />

      {/* scroll to top button */}
      {hideButton ? null : (
        <div className="invisible-div">
          <Row className="go-back-but">
            <Link
              to="top"
              spy={true}
              smooth={true}
              duration={500}
              className="song-menu-link"
            >
              Go Back Up
            </Link>
          </Row>
        </div>
      )}

      {/* pages/routes */}
      <Switch location={location} key={key}>
        <Route path="/about" component={About} />
        <Route
          path="/"
          render={(props) => (
            <Relax
              {...props}
              setPlaylist={handleSetPlaylist}
              soundStates={soundStates}
              playlist={playlistData}
              title={playlistTitle}
              image={playlistImage}
              setActiveID={setActiveID}
              activeID={activeID}
              handleChangeState={handleChangeState}
              chooseSong={setSongIndex}
              highlightSong={highlight}
              flip={flip}
            />
          )}
        />
      </Switch>

      {/* footer with main media player */}
      <Row className="main-playlist-player">
        <MainPlayer
          playlistSongs={playlist}
          playlist={playlistData}
          songIndex={songIndex}
          highlightSong={highlightSong}
        />
      </Row>

      {/* create media players for every sound */}
      <>
        {soundStates.map((soundStateDict, index) => (
          <SoundPlayer
            key={index}
            flip={flip}
            soundStateDict={soundStateDict}
          />
        ))}
      </>
    </div>
  );
}

export default App;
