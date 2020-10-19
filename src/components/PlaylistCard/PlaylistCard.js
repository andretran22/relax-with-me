import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "./PlaylistCard.css";

const PlaylistCard = (props) => {
  let title = props.title;
  let songs = props.songs;

  return (
    <Col className="playlist-contain" xs={2}>
      <Row onClick={ () => props.setPlaylist(title, songs)}>
        <div className="playlist-card" >

        </div>
      </Row>
      <br/>
      <Row className="playlist-title">{title}</Row>
    </Col>
  );
};

export default PlaylistCard;
