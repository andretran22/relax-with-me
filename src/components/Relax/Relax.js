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

// import testSong from "../../assets/testSong.mp3";
import song1 from "../../assets/Apples/jazz.mp3";
import song2 from "../../assets/Jazz/dogtective.mp3";

import "./Relax.css";

const playAudio = () => {
  let a1 = new Audio(song1);
  let a2 = new Audio(song2);

  a1.play();
  a2.play();
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
        <br/>
        <Row>
          <Button onClick={playAudio} >
            Play sounds
          </Button>
        </Row>
        <br />
      </Container>
    </motion.div>
  );
};

export default Relax;
