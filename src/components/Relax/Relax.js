import React, { useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import "./Relax.css";

//boostrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Playlist from "./ShowPlaylist";

//animate
// import { motion } from "framer-motion";
// import {
//   defaultVariant,
//   defualtTransition,
//   styleAbsolute,
// } from "../FramerContants";

//song menu
import SongMenu from "../../components/SongMenu/SongMenu";

const Relax = (props) => {
  const [goUp, setGoUp] = useState(false);

  const toggleButton = () => {
    if (goUp) {
      scroll.scrollToTop();
    } else {
      scroll.scrollToBottom();
    }
    setGoUp(!goUp);
    console.log(goUp);
  };

  const scrollDown = () => {
    scroll.scrollToBottom();
  }

  return (
    // <motion.div
    //   style={styleAbsolute}
    //   initial="initial"
    //   animate="in"
    //   exit="out"
    //   variants={defaultVariant}
    //   transition={defualtTransition}
    // >

    <Container className="relax-cont">
      <Row id="top" className="contain">

        {/* playlist info */}
        <Playlist playlist={props.playlist} title={props.title}/>

        {/* parallax */}
        <Col xs={6} className="center-parallax">
          <div className="parallax-placeholder">
            <h1 className="text-center">Parallax Placeholder</h1>
          </div>
        </Col>

        {/* menu scroll button 
        <Button className="scroll-button" variant="dark" onClick={toggleButton}>
          {goUp ? "Go Back Up" : "Go to Song Menu"}
        </Button>
        */}

        {/* spacer */}
        <Col xs={3}></Col>

        {/* menu scroll button */}
        <div class="scroll-arrow-button">
          <img src="down-arrow.png" alt="arrow" class="arrow-img"></img>
          <button class="scroll-button" onClick={scrollDown}></button>
        </div>
      </Row>

      {/* song menu section */}
      <Row id="bot" className="contain">
        <SongMenu
          handleSetPlaylist={props.setPlaylist}
          currentSoundState={props.soundStates}
          handleChangeState={props.handleChangeState}
        />
      </Row>
    </Container>
    //  </motion.div>
  );
};

export default Relax;
