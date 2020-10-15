import React, {useState, useEffect} from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./Relax.css";

//boostrap
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";

//animate
import { motion } from "framer-motion";
import {
  defaultVariant,
  defualtTransition,
  styleAbsolute,
} from "../FramerContants";

// import testSong from "../../assets/testSong.mp3";
import song1 from "../../assets/Chillax/icy-pond.mp3";
import song2 from "../../assets/Dreams/friends.mp3";

const playAudio = () => {
  let a1 = new Audio(song1);
  let a2 = new Audio(song2);

  // let 
  a1.volume = 0.1
  a2.volume = 0.1
  a1.play();
  a2.play();
};

const Relax = () => {
  let location = useLocation();
  const [songsQueue, setSongsQueue] = useState([]);

  useEffect(()=>{
    if (location.state != null){
      // console.log(location.state);
      setSongsQueue(location.state.playlist)
      console.log(songsQueue)
    }
  })


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
          <Button as={NavLink} to="/song-menu">
            Song Menu
          </Button>
        </Row>
        <br/>
        <Button onClick={playAudio}>
          Play Mix
        </Button>

      </Container>
    </motion.div>
  );
};

export default Relax;
