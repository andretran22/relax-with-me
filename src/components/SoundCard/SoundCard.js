import React, { useState, useEffect } from "react";
import "./SoundCard.css";

// Boostrap
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const SoundCard = (props) => {
    let title = props.title
    const [play, setPlay] = useState(false);
    const [volume, setVolume] = useState(0.5);

    useEffect(() => {
        setPlay(props.playState);
    }, [props.playState])

    useEffect(() => {
        setVolume(props.volumeState)
    }, [props.playVolume])
    

    // toggle play/pause
    const handlePlayPause = () => {
        props.handlePlay(title, !play)
        setPlay(!play);
    }

    // volume change
    const handleVolumeChange = e => {
        let value = parseFloat(e.target.value);
        props.handleVolume(title, value)
        setVolume(value);
    }

    return (
        <Col className="playlist-contain" xs={2} >
            <Row className="sound-group">

                {/* card image */}
                <div className="playlist-card" onClick={handlePlayPause}></div>
                <br/>

                {/* slider */}
                {
                    play 
                    ?  <input className="slider" type='range' min={0} max={1} step='any' value={volume} onChange={handleVolumeChange} /> 
                    :  <div className="placeholder"/>
                }
            </Row>
            <br />

            <Row className="playlist-title">{title}</Row>
        </Col>
    );
};
export default SoundCard;
