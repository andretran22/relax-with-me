import React from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import {
  defaultVariant,
  defualtTransition,
  styleAbsolute,
} from "../FramerContants";

// import testSong from process.env.PUBLIC_URL + "";

import "./Relax.css";

const playAudio = () => {
  const audioEl = document.getElementsByClassName("audio-element")[0];
  audioEl.play();
};

const Relax = () => {
  return (
    <motion.div
      style={styleAbsolute}
      initial="initial"
      animate="in"
      exit="out"
      variants={defaultVariant}
      transition={defualtTransition}
    >
      <Container className="contain">
        <Row>
          <Button as={NavLink} to="/relax/song-menu">
            Song Menu
          </Button>
        </Row>
        <br />
        <Row>
          <Button onClick={playAudio}>Play Selected Song</Button>
          <audio className="audio-element">
            <source src={process.env.PUBLIC_URL + "/testSong.mp3"}></source>
          </audio>
        </Row>
      </Container>
    </motion.div>
  );
};

export default Relax;
