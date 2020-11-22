import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import "./Relax.css";

//boostrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Playlist from "./ShowPlaylist";

//song menu
import SongMenu from "../../components/SongMenu/SongMenu";
import MyParallax from "./MyParallax";

const Relax = (props) => {
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
                playlistImage={props.image} 
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
          setActiveID={props.setActiveID}
          activeID={props.activeID}
        />
      </Row>
    </Container>
  );
};

export default Relax;
