import React, { useState, useEffect } from "react";
import "./SoundCard.css";

// Boostrap
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const SoundCard = (props) => {
  const [play, setPlay] = useState(props.playing);
  const [volume, setVolume] = useState(props.volume);

  let soundDict = props.soundDict;

  let title = soundDict["name"];
  let soundImport = soundDict["import"];
  let key = props.index;


  useEffect(() => {
    console.log("mount");
  });

  useEffect(() => {
    setPlay(props.playing);
  }, [props.playing]);

  useEffect(() => {
    setVolume(props.volume);
  }, [props.volume]);



  // toggle play/pause
  const handlePlayPause = () => {
    setPlay(!play);
    let newDict = {
      name: title,
      playing: !play,
      volume: volume,
      import: soundImport,
    };
    props.handleChangeState(key, newDict);
  };

  // volume change
  const handleVolumeChange = (e) => {
    let value = parseFloat(e.target.value);
    setVolume(value);
    let newDict = {
      name: title,
      playing: play,
      volume: value,
      import: soundImport,
    };
    props.handleChangeState(key, newDict);
  };

  return (
    <Col className="playlist-contain" xs={2}>
      <Row className="sound-group">
        {/* card image */}
        <div className="playlist-card" onClick={handlePlayPause}></div>
        <br />

        {/* slider */}
        {play ? (
          <input
            className="slider"
            type="range"
            min={0}
            max={1}
            step="any"
            value={volume}
            onChange={handleVolumeChange}
          />
        ) : (
          <div className="placeholder" />
        )}
      </Row>
      <br />

      <Row className="playlist-title">{title}</Row>
    </Col>
  );
};
export default SoundCard;
