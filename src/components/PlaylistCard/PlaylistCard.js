import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "./PlaylistCard.css";

const PlaylistCard = (props) => {


  return (
    <Col className="playlist-contain" xs={2}>
      <Row onClick={ () => props.selectPlaylist(props.title)}>
        <div className="playlist-card" >

        </div>
      </Row>
      <br/>
      <Row className="playlist-title">{props.title}</Row>
    </Col>
  );
};

export default PlaylistCard;
