import React, { useRef, useState, useEffect, Component } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Player from "react-player";
import Duration from "./Duration";
import "./MainPlayer.css";

const MainPlayer = (props) => {
  const [playlist, setPlaylist] = useState([]);
  const [playlistData, setPlaylistData] = useState(null);
  const [songIndex, setSongIndex] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [played, setPlayed] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.5);
  const [seek, setSeek] = useState(false);
  const ref = useRef(null);

  // when we notice new songs passed in, set to playlist
  useEffect(() => {
    if (props.playlistSongs != null) {
      setPlaylist(props.playlistSongs);
      setPlaylistData(props.playlist);
      setPlaying(true);
      setSongIndex(0);
    }
  }, [props.playlistSongs, props.playlist]);

  //listen for selected song index
  useEffect(() => {
    let number = parseInt(props.songIndex);
    setSongIndex(number);
  }, [props.songIndex]);

  useEffect(() => {
    props.highlightSong(songIndex);
  }, [songIndex]);

  const handlePlayPause = () => {
    setPlaying(!playing);
  };

  const handleNextSong = () => {
    let nextIndex = songIndex + 1 >= playlist.length ? 0 : songIndex + 1;
    console.log(songIndex);
    setSongIndex(nextIndex);
  };

  const handlePrevSong = () => {
    let nextIndex = songIndex - 1 < 0 ? playlist.length - 1 : songIndex - 1;
    setSongIndex(nextIndex);
  };

  const handleVolumeChange = (e) => {
    setVolume(parseFloat(e.target.value));
  };

  const handleSeekMouseDown = (e) => {
    setSeek(true);
  };

  const handleSeekChange = (e) => {
    setPlayed(parseFloat(e.target.value));
  };

  const handleSeekMouseUp = (e) => {
    setSeek(false);
    ref.current.seekTo(parseFloat(e.target.value));
  };

  const handleProgress = (state) => {
    // Only update time slider if not currently seeking
    if (!seek) {
      setPlayed(state["played"]);
    }
  };

  const handleDuration = (duration) => {
    console.log("onDuration", duration);
    setDuration(duration);
  };

  const handleSongEnded = () => {
    let nextIndex = songIndex + 1;
    console.log("cur: " + songIndex);
    console.log("next: " + nextIndex);
    if (nextIndex >= playlist.length) {
      nextIndex = 0;
    }
    setSongIndex(nextIndex);
  };

  const getSongName = () => {
    if (playlistData == null || playlistData == undefined ) {
      return null;
    }
    let currentSong = playlistData["default"][songIndex];
    return (
      <>
        <h5>{currentSong["title"]}</h5>
        <p className="m-0">{currentSong["album"]}</p>
      </>
    );
  };

  // main media player
  const getMainPlayer = () => {
    return (
      <Player
        ref={ref}
        width="0"
        height="0"
        playing={playing}
        volume={volume}
        url={playlist[songIndex]}
        onProgress={handleProgress}
        onEnded={handleSongEnded}
        onDuration={handleDuration}
        onSeek={(e) => console.log("onSeek", e)}
      />
    );
  };

  return (
    <Row className="media-player">
      {/* main player */}
      {getMainPlayer()}

      {/* song name */}
      <Col xs={3} className="flex-col">
        {getSongName()}
      </Col>

      {/* media controls */}
      <Col xs={6} className="media-control-columns">
        <Row className="media-controls">
          <Button
            className="media-button"
            variant="dark"
            onClick={handlePrevSong}
          >
            Prev
          </Button>
          <Button
            className="media-button"
            variant="dark"
            onClick={handlePlayPause}
          >
            {playing ? "Pause" : "Play"}
          </Button>
          <Button
            className="media-button"
            variant="dark"
            onClick={handleNextSong}
          >
            Next
          </Button>
        </Row>
        <Row className="center-cols">
          <Col xs={1} className="center-cols">
            <Duration seconds={duration * played} />
          </Col>
          <Col className="center-cols">
            <input
              className="slider"
              type="range"
              min={0}
              max={0.999999}
              step="any"
              value={played}
              onChange={handleSeekChange}
              onMouseUp={handleSeekMouseUp}
              onMouseDown={handleSeekMouseDown}
            />
          </Col>
          <Col xs={1} className="center-cols">
            <Duration seconds={duration} />
          </Col>
        </Row>
      </Col>

      {/* volume */}
      <Col xs={2} className="center-cols volume-slider">
        <input
          className="slider vol-slide"
          type="range"
          min={0}
          max={1}
          step="any"
          value={volume}
          onChange={handleVolumeChange}
        />
      </Col>
    </Row>
  );
};
export default MainPlayer;
