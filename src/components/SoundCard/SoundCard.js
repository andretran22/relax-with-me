import React, { useState, useEffect } from "react";
import "./SoundCard.css";

// Boostrap
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

const SoundCard = (props) => {
  const [play, setPlay] = useState(props.playing);
  const [volume, setVolume] = useState(props.volume);
  const [image, setImage] = useState(null);

  let soundDict = props.soundDict;

  let title = soundDict["name"];
  let soundImport = soundDict["import"];
  let key = props.index;

  useEffect(() => {
    let soundArt = soundDict["image"];
    setImage(soundArt);
  }, []);

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
      image: image
    };
    // console.log(newDict)
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
      image: image
    };
    props.handleChangeState(key, newDict);
  };

  const getStyle = () => {
    return play ? "playlist-active" : "playlist-card";
  };


  return (
    <Col className="playlist-contain" xs={4}>
      <Row onClick={handlePlayPause}>
        <div className={getStyle()}>
          <div className="image-cropper">
            <Image className="sound-img" src={image} />
          </div>
        </div>
      </Row>

      <Row className="playlist-title mb-2 mt-2">{title}</Row>

      {/* slider */}
      {play ? (
        <input
          className="slider slider-sounds"
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
      <br />

      
    </Col>
  );
};
export default SoundCard;
