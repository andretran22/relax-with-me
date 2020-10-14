import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import {
  defaultVariant,
  defualtTransition,
  styleAbsolute,
} from "../FramerContants";
import "./SongMenu.css";

//abums
import Apples from "../Albums/Apples";
// import Jazz from "../Albums/Jazz";

const SongMenu = () => {
  // const [currentAlbum, setAlbum] = useState([]);

  return (
    <motion.div
      style={styleAbsolute}
      initial="initial"
      animate="in"
      exit="out"
      variants={defaultVariant}
      transition={defualtTransition}
    >
      <Container className="song-menu">
        <Row>
          <Button variant="link" as={NavLink} to="/relax">
            Go Back
          </Button>
          <br />
          {/* <Button onClick={setAlbum(Apples)}>Apples</Button> */}
          <br />
          {/* <Button onClick={setAlbum(Jazz)}>Jazz</Button> */}
        </Row>
      </Container>
    </motion.div>
  );
};

export default SongMenu;
