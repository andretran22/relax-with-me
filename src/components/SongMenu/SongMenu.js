import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import "./SongMenu.css";

//boostrap
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

//animation
import { motion } from "framer-motion";
import {
  defaultVariant,
  defualtTransition,
  styleAbsolute,
} from "../FramerContants";

//playlists
import PlaylistCard from "../PlaylistCard/PlaylistCard";
import chillaxData from "../Playlists/Chillax";
import dreamsData from "../Playlists/Dreams";

const playlistLibrary = {
  "Chillax": chillaxData,
  "Dreams": dreamsData,
};

const SongMenu = () => {

  const [selectedPlaylist, setPlaylist] = useState([]);

  // const selectPlaylist = (playlistName) => {
  //   console.log(playlistName);
    
  // };

  const makePlaylistCards = (library) => {
    return Object.entries(library).map(([key], index) => (
      <PlaylistCard selectPlaylist={setPlaylist} title={key} key={index}/>
    ));
  };

  return (
    // <motion.div
    //   style={styleAbsolute}
    //   initial="initial"
    //   animate="in"
    //   exit="out"
    //   variants={defaultVariant}
    //   transition={defualtTransition}
    // >
      <Container className="song-menu">
        {/* <Link to={{
          pathname: "/relax",
          state:{
            playlist: playlistLibrary[selectedPlaylist]
          }
        }}> Go Back
        </Link> */}
        <Button variant="link" >
          Go Back
        </Button>

        <Row>{makePlaylistCards(playlistLibrary)}</Row>
        <Row>Sounds to layer</Row>
      </Container>
    // </motion.div>
  );
};

export default SongMenu;
