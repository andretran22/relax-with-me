import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./Relax.css";

//boostrap
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Row from "react-bootstrap/Row";

//animate
import { motion } from "framer-motion";
import {
  defaultVariant,
  defualtTransition,
  styleAbsolute,
} from "../FramerContants";

import SongMenu from "../../components/SongMenu/SongMenu";

// import testSong from "../../assets/testSong.mp3";
import song1 from "../../assets/Chillax/icy-pond.mp3";
import song2 from "../../assets/Dreams/friends.mp3";

const playAudio = () => {
  let a1 = new Audio(song1);
  let a2 = new Audio(song2);

  // let
  a1.volume = 0.1;
  a2.volume = 0.1;
  a1.play();
  a2.play();
};

const Relax = () => {
  let location = useLocation();

  const [songsQueue, setSongsQueue] = useState([]);
  const [showModal, setShowModal] = useState(false);

  // useEffect(()=>{
  //   if (location.state != null){
  //     // console.log(location.state);
  //     setSongsQueue(location.state.playlist)
  //     console.log(songsQueue)
  //   }
  // })

  //playAudio()

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
          <Button onClick={() => setShowModal(true)}>Create a Mix</Button>
        </Row>
        <Modal
          show={showModal}
          onHide={() => setShowModal(false)}
          // dialogClassName="modal-width"
          className="my-modal"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title> Create a Mix </Modal.Title>
          </Modal.Header>
          <Modal.Body>
     
          </Modal.Body>

          <SongMenu />
        </Modal>

        {/* <br/>
        <Button onClick={playAudio}>
          Play Mix
        </Button> */}
      </Container>
    </motion.div>
  );
};

export default Relax;
