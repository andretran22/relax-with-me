import React, { useState, useRef } from "react";
import ReactPlayer from "react-player";
import "./Relax.css";

//boostrap
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col"

//animate
import { motion } from "framer-motion";
import {
  defaultVariant,
  defualtTransition,
  styleAbsolute,
} from "../FramerContants";

//song menu
import SongMenu from "../../components/SongMenu/SongMenu";

//sounds
import rainSound from "../../assets/Sounds/rain.mp3";
import fireSound from "../../assets/Sounds/fireplace.mp3";

let soundsList = ["Rain", "Fire"]


const Relax = () => {
  const [showModal, setShowModal] = useState(false);

  // main playlist 
  const [playlist, setPlaylist] = useState([]);
  const [songIndex, setSongIndex] = useState(0);
  const [play, setPlay] = useState(true);
  const [volume, setVolume] = useState(0.5);
  const [seek, setSeek] = useState(false);
  const [played, setPlayed] = useState(0);
  const ref = useRef(null);

  //rain sound
  const [rainPlay, setRainPlay] = useState(false);
  const [rainVolume, setRainVolume] = useState(0.5);

  //fire sound
  const [firePlay, setFirePlay] = useState(false);
  const [fireVolume, setFireVolume] = useState(0.5);


  // playlist
  const handlePlayPause = () => {
    setPlay(!play);
  }
  // playlist
  const handleVolumeChange = e => {
    setVolume(parseFloat(e.target.value));
  }
  // playlist, handle going to next song
  const handleSongEnded = () => {
    let nextIndex = songIndex + 1;
    if (nextIndex >= playlist.length){
      nextIndex = 0;
    }
    setSongIndex(nextIndex);
  }

  // dynamically import songs and create array
  const handleSetPlaylist = (playlistName, playlistData) => {
    let songImports = playlistData.map((songDict) => {
      let songName = songDict["pathSuffix"];
      return require("../../assets/" + playlistName + "/" + songName);
    });
    console.log(songImports.length)
    console.log(songImports)
    setPlaylist(songImports);
  }

  // set play state based on player
  const genericPlay = (title, value) => {
    console.log(title + ": " + value)
    switch (title) {
      case "Rain":
        setRainPlay(value);
        break;
      case "Fire":
        setFirePlay(value);
        break;
    }
  }

  // set volume state based on player
  const genericVolume = (title, value) => {
    switch (title) {
      case "Rain":
        setRainVolume(value);
        break;
      case "Fire":
        setFireVolume(value);
        break;
    }
  }

  // create dict with current play and volume state to pass to pop up menu
  const createSoundState = () => {
    let dict = {};
    soundsList.forEach((sound) => {
      var stateDict = {};
      var playVar = sound.toLowerCase() + "Play";
      var volumeVar = sound.toLowerCase() + "Volume"
      stateDict['play'] = eval(playVar);
      stateDict['volume'] = eval(volumeVar);
      dict[sound] = stateDict;
    })
    return dict;
  }

  // seek 
  const handleSeekMouseDown = e => {
    setSeek(true);
  }
  // seek 
  const handleSeekChange = e => {
    setPlayed(parseFloat(e.target.value));
  }
  // seek 
  const handleSeekMouseUp = e => {
    setSeek(false);
    ref.current.seekTo(parseFloat(e.target.value))
  }
  // seek 
  const handleProgress = state => {
    // Only want update time slider if not currently seeking
    if (!seek) {
      setPlayed(state["played"])
    }
  }

  return (
    <motion.div style={styleAbsolute} initial="initial" animate="in" exit="out" variants={defaultVariant} transition={defualtTransition}>
      <Container className="contain">

        {/* media player s*/}
        <div className="player-wrapper">
          <ReactPlayer
            ref={ref} width="0" height="0"
            playing={play} 
            url={playlist[songIndex]}
            volume={volume}
            onProgress={handleProgress}
            onEnded={handleSongEnded}
            onSeek={e => console.log('onSeek', e)}
          />
          {/* rain player */}
          <ReactPlayer width="0" height="0" loop={true} playing={rainPlay} volume={rainVolume} url={rainSound} /> 
          {/* fire player */}
          <ReactPlayer width="0" height="0" loop={true} playing={firePlay} volume={fireVolume} url={fireSound} />
        </div>

        {/* song menu button */}
        <Row>
          <Button onClick={() => setShowModal(true)}>Create a Mix</Button>
        </Row>

        {/* pop up modal, nested song menu */}
        <Modal className="my-modal" show={showModal} onHide={() => setShowModal(false)} animation={true} centered>
          <Modal.Header closeButton>
            <Modal.Title> Create a Mix </Modal.Title>
          </Modal.Header>
          <SongMenu
            genericPlay={genericPlay}
            genericVolume={genericVolume}
            handleSetPlaylist={handleSetPlaylist}
            currentSoundState={createSoundState()}
          />
        </Modal>

      {/* media controls */}
        <Row className="media-controls">
          <Row>
            <Button onClick={handlePlayPause}>{play ? "Pause" : "Play"}</Button>
          </Row>
          <br/>
          <Row className="seek-and-volume">
            <Col xs={9}>
              {/* seek */}
              <input
                className="slider"
                type='range' min={0} max={0.999999} step='any'
                value={played}
                onChange={handleSeekChange}
                onMouseUp={handleSeekMouseUp}
                onMouseDown={handleSeekMouseDown}
              />
            </Col>
            <Col xs={3}>
              {/* volume */}
              <input
                className="slider"
                type='range' min={0} max={1} step='any'
                value={volume}
                onChange={handleVolumeChange}
              />
            </Col>
          </Row>
        </Row>


      </Container>
    </motion.div>
  );
};

export default Relax;
