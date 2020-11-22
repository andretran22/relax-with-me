import React, { useState } from "react";
import "./SongMenu.css";

// Boostrap
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

import PlaylistCard from "../PlaylistCard/PlaylistCard";
import SoundCard from "../SoundCard/SoundCard";

const playlistLibrary = ["Chillax", "Dreams", "Date", "Dance"];

const SongMenu = (props) => {

  let currentSoundState = props.currentSoundState;

  const makePlaylistCards = (library) => {
    return library.map((playlistTitle, index) => (
      <PlaylistCard
        title={playlistTitle}
        id={index}
        key={index}
        setPlaylist={props.handleSetPlaylist}
        setActive={props.setActiveID}
        activeID={props.activeID}
      />
    ));
  };

  const makeSoundCards = (library) => {
    return library.map((soundDict, index) => {
        return (
          <SoundCard
            key={index}
            playing={soundDict["playing"]}
            volume={soundDict["volume"]}
            handleChangeState={props.handleChangeState}
            soundDict={soundDict}
            index={index}
          />
        );
      }
    );
  };

  return (
    <Container className="song-menu">
      
      {/* Playlists */}
      <Row className="playlists-group">
        <h3>Pick A Playlist</h3>
        <Row className="playlists-row">
          {makePlaylistCards(playlistLibrary)}
        </Row>
      </Row>

      {/* Sounds */}
      <Row className="playlists-group">
        <h3>Select Sounds</h3>
        <Row className="playlists-row">{makeSoundCards(currentSoundState)}</Row>
      </Row>

      <br />
    </Container>
  );
};

export default SongMenu;
