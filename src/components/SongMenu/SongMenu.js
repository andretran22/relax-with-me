import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import "./SongMenu.css";

// Boostrap
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

// Playlists
import PlaylistCard from "../PlaylistCard/PlaylistCard";
import chillaxData from "../Playlists/Chillax";
import dreamsData from "../Playlists/Dreams";

// Sounds 
import SoundCard from "../SoundCard/SoundCard";
import rainSound from "../../assets/Sounds/rain.mp3";
import fireSound from "../../assets/Sounds/fireplace.mp3";

const playlistLibrary = {
  "Chillax": chillaxData,
  "Dreams": dreamsData,
};

const soundLibrary = {
  "Rain": rainSound,
  "Fire": fireSound,
};

const SongMenu = (props) => {

  const makePlaylistCards = (library) => {
    return Object.entries(library).map(([key, value], index) => (
      <PlaylistCard
        title={key}
        songs={value}
        key={index}
        setPlaylist={props.handleSetPlaylist}
      />
    ));
  };

  const makeSoundCards = (library) => {
    let soundState = props.currentSoundState;

    return Object.entries(library).map(([key, value], index) => (
      <SoundCard
        title={key}
        sound={value}
        key={index}
        handlePlay={props.genericPlay}
        handleVolume={props.genericVolume}
        playState={soundState[key]["play"]}
        volumeState={soundState[key]["volume"]}
      />
    ));
  };

  return (
    <Container className="song-menu">
      {/* Playlists */}
      <Row className="playlists-group">
        <h3>Pick A Playlist</h3>
        <Row className="playlists-row">{makePlaylistCards(playlistLibrary)}</Row>
      </Row>

      {/* Sounds */}
      <Row className="playlists-group">
        <h3>Select Sounds</h3>
        <Row className="playlists-row">{makeSoundCards(soundLibrary)}</Row>
      </Row>

      <br />
    </Container>
  );
};

export default SongMenu;
