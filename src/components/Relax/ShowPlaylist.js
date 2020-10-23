import React, { useEffect, useState } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import ListGroup from "react-bootstrap/ListGroup";
import "./ShowPlaylist.css";

const ShowPlaylist = (props) => {
  const [h, setH] = useState(props.highlightSong);

  let playlist = props.playlist;
  let title = props.title;

  //select song from list
  const selectSong = (e) => {
    console.log("***SHOW: " + e.target.value + "*****");
    props.chooseSong(e.target.value);
  };

  useEffect(() => {
    setH(props.highlightSong);
  }, [props.highlightSong]);

  const getListGroupItem = (dict, index) => {
    console.log(h);
    return (
      <ListGroup.Item
        action
        className={index == h ? "highlightSong" : " "}
        key={index}
        onClick={selectSong}
        value={index}
      >
        {dict["title"]}
      </ListGroup.Item>
    );
  };

  const constructListGroup = () => {
    let dataDicts = playlist["default"];
    return (
      <ListGroup variant="flush">
        {dataDicts.map((dict, index) => {
          return getListGroupItem(dict, index);
        })}
      </ListGroup>
    );
  };

  return (
    <Col xs={3} className="playlist-display">
      {title == null ? null : (
        <Row className="playlist-display-title">
          <h2>{title == null ? "" : title}</h2>
        </Row>
      )}
      <Row>{playlist == null ? null : constructListGroup()}</Row>
    </Col>
  );
};
export default ShowPlaylist;
