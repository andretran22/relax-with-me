import React, { useRef, useState, useEffect, Component } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Player from "react-player";
import "./MainPlayer.css";
import { Container } from "react-bootstrap";

const MainPlayer = (props) => {
  const [playlist, setPlaylist] = useState([]);
  const [playlistData, setPlaylistData] = useState(null);
  const [songIndex, setSongIndex] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [played, setPlayed] = useState(0);
  const [volume, setVolume] = useState(0.5);
  const [seek, setSeek] = useState(false);
  const ref = useRef(null);

  // when we notice new songs passed in, set to playlist
  useEffect(() => {
    console.log("here")
    if (props.playlistSongs != null) {
      setPlaylist(props.playlistSongs);
      setPlaylistData(props.playlist);
      setPlaying(true);
      setSongIndex(0);
      
    }
  }, [props.playlistSongs, props.playlist]);

  useEffect(()=>{
    console.log("mount")
  })

  const handlePlayPause = () => {
    setPlaying(!playing);
  };

  const handleNextSong = () => {
    let nextIndex = songIndex + 1 >= playlist.length ? 0 : songIndex + 1;
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

  const handleSongEnded = () => {
    let nextIndex = songIndex + 1;
    if (nextIndex >= playlist.length) {
      nextIndex = 0;
    }
    setSongIndex(nextIndex);
  };

  const getSongName = () => {
    if (playlistData == null ) {
      return null;
    }
    let currentSong = playlistData["default"][songIndex];
    return (
      <Col xs={3} className="playing-song-info">
        <h4>{currentSong["title"]}</h4>
        <p className="m-0">{currentSong["album"]}</p>
      </Col>
    );
  };

  return (
    <Row>
      {getSongName()}
      <Col className="media-controls">
        <Player
          ref={ref}
          width="0"
          height="0"
          playing={playing}
          volume={volume}
          url={playlist[songIndex]}
          onProgress={handleProgress}
          onEnded={handleSongEnded}
          onSeek={(e) => console.log("onSeek", e)}
        />

        <Row className="play-pause">
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

        {/* seek */}
        <Row className="seek-and-volume">
          <Col xs={9}>
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

          {/* volume */}
          <Col xs={3}>
            <input
              className="slider"
              type="range"
              min={0}
              max={1}
              step="any"
              value={volume}
              onChange={handleVolumeChange}
            />
          </Col>
        </Row>
      </Col>
    </Row>
  );
};
export default MainPlayer;
