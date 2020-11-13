import React, { useState, useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

import "./PlaylistCard.css";

const PlaylistCard = (props) => {
  const [title, setTitle] = useState(null);
  const [songImports, setSongImports] = useState([]);
  const [songData, setSongData] = useState([]);
  const [image, setImage] = useState(null);

  useEffect(() => {
    let data = require("../Playlists/" + props.title);
    let songImports = getSongImports(props.title, data);
    setTitle(props.title);
    setSongImports(songImports);
    setSongData(data);
    setImage(getImage(props.title))
  }, [props.title]);

  const getSongImports = (playlistName, playlistData) => {
    let songsData = playlistData["default"];

    let songImports = songsData.map((songDict) => {
      let songName = songDict["pathSuffix"];
      return require("../../assets/" + playlistName + "/" + songName);
    });

    return songImports;
  };

  const getImage = (title) => {
    return require("../../assets/PlaylistArt/" + title + ".png");
  };

  const handleClick = () => {
      props.setPlaylist(songImports, songData, title);
      props.setPlaylistImage(image)
      props.setActive(props.id);
  };

  const getStyle = () => {
    return props.id == props.activeID ? "playlist-active" : "playlist-card";
  };

  return (
    <Col className="playlist-contain" xs={4}>
      <Row onClick={handleClick}>
        <div className={getStyle()}>
          <div className="image-cropper">
          <Image className="play-img" src={image}/>
          </div>
        </div>
      </Row>
      <Row className="playlist-title mt-2 mb-2">{title}</Row>
      <br />
      
    </Col>
  );
};

export default PlaylistCard;
