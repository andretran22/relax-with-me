import React, { useState } from "react";
import ReactPlayer from "react-player";
import { Link, animateScroll as scroll } from "react-scroll";
import "./Relax.css";

//boostrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

//animate
import { motion } from "framer-motion";
import {
  defaultVariant,
  defualtTransition,
  styleAbsolute,
} from "../FramerContants";

//song menu
import SongMenu from "../../components/SongMenu/SongMenu";

const Relax = (props) => {
  return (
    <motion.div
      style={styleAbsolute}
      initial="initial"
      animate="in"
      exit="out"
      variants={defaultVariant}
      transition={defualtTransition}
    >
      <Container className="main-body-container">
        <Row className="contain">

        </Row>

        {/* song menu section */}
        <Row>
          <div style={{ height: "100vh" }}>
            <SongMenu
              handleSetPlaylist={props.setPlaylist}
              currentSoundState={props.soundStates}
              handleChangeState={props.handleChangeState}
            />
           
          </div>
        </Row>
      </Container>
    </motion.div>
  );
};

export default Relax;
