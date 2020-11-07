import React, { useEffect, useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import "./Relax.css";

//boostrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Playlist from "./ShowPlaylist";

// animate
import { motion } from "framer-motion";
import {
  defaultVariant,
  defualtTransition,
  styleAbsolute,
} from "../FramerContants";

//song menu
import SongMenu from "../../components/SongMenu/SongMenu";
import MyParallax from "./MyParallax";
import userEvent from "@testing-library/user-event";

const Relax = (props) => {
  const [playlistImage, setPlaylistImage] = useState(null);
  const [parallaxSounds, setParallaxSounds] = useState(null);
  const [updateParallax, setUpdateParallax] = useState(false);

  const songMenuButton = () => {
    return (
        <Row className="song-menu-but">
          <Link
            to="bot"
            spy={true}
            smooth={true}
            duration={500}
            className="song-menu-link"
          >
            Song Menu
          </Link>
        </Row>
    );
  };

  useEffect(()=>{
    setParallaxSounds(props.soundStates);
    setUpdateParallax(props.flip);
  }, [props.soundStates, props.flip]);

  return (
    // <motion.div
    //   style={styleAbsolute}
    //   initial="initial"
    //   animate="in"
    //   exit="out"
    //   variants={defaultVariant}
    //   transition={defualtTransition}
    // >

    <Container>
      <Row id="top" className="contain">
        {props.playlist != null ? (

          <Row className="parallax-and-playlist">
            {/* playlist info */}
            <Playlist
              playlist={props.playlist}
              title={props.title}
              chooseSong={props.chooseSong}
              highlightSong={props.highlightSong}
            />

            {/* parallax */}
            <Col xs={6} className="center-parallax">
              <MyParallax 
                playlistImage={playlistImage} 
                parallaxSounds={parallaxSounds}
                updateParallax={updateParallax}
              />

            </Col>

            {/* song menu button  */}
            <Col xs={3} className="center-parallax">
              {songMenuButton()}
            </Col>
          </Row>

        ) : (
            songMenuButton()
        )}
      </Row>

      {/* song menu section */}
      <Row id="bot" className="contain-song-menu">
        <SongMenu
          handleSetPlaylist={props.setPlaylist}
          currentSoundState={props.soundStates}
          handleChangeState={props.handleChangeState}
          setPlaylistImage={setPlaylistImage}
        />
      </Row>
    </Container>
    // </motion.div>
  );
};

export default Relax;
