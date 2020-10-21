import React, { useRef, useState, useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Player from "react-player";
import "./MainPlayer.css";

const MainPlayer = (props) => {
  const [playlist, setPlaylist] = useState([]);
  const [songIndex, setSongIndex] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [played, setPlayed] = useState(0);
  const [volume, setVolume] = useState(0.5);
  const [seek, setSeek] = useState(false);
  const ref = useRef(null);

  // when we notice new songs passed in, set to playlist
  useEffect(() => {
    if (props.playlistSongs != null) {
      setPlaylist(props.playlistSongs);
      setPlaying(true);
    }
  }, [props.playlistSongs]);

  const handlePlayPause = () => {
    setPlaying(!playing);
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

  return (
    <Row className="media-controls">
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

      <Row>
        <Button className="play-pause-button text-center" onClick={handlePlayPause}>
          {playing ? "Pause" : "Play"}
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
    </Row>
  );
};
export default MainPlayer;
