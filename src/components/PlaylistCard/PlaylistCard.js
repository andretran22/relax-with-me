import React, { useState, useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "./PlaylistCard.css";

const PlaylistCard = (props) => {
  const [title, setTitle] = useState(null);
  const [songImports, setSongImports] = useState([]);
  const [songData, setSongData] = useState([]);

  useEffect(() => {
    let data = require("../Playlists/" + props.title);
    let songImports = getSongImports(props.title, data);
    setTitle(props.title);
    setSongImports(songImports);
    setSongData(data);
  }, [props.title]);

  const getSongImports = (playlistName, playlistData) => {
    let songsData = playlistData["default"];

    let songImports = songsData.map((songDict) => {
      let songName = songDict["pathSuffix"];
      return require("../../assets/" + playlistName + "/" + songName);
    });

    return songImports;
  };

  const handleClick = () => {
      props.setPlaylist(songImports, songData, title);
      props.setActive(props.id);
  };

  const getStyle = () => {
    return props.id == props.activeID ? "playlist-active" : "playlist-card";
  };

  return (
    <Col className="playlist-contain" xs={2}>
      <Row onClick={handleClick}>
        <div className={getStyle()}></div>
      </Row>
      <br />
      <Row className="playlist-title">{title}</Row>
    </Col>
  );
};

export default PlaylistCard;
