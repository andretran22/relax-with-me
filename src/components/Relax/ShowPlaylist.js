import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import ListGroup from "react-bootstrap/ListGroup";
import "./ShowPlaylist.css";

const ShowPlaylist = (props) => {
  let playlist = props.playlist;
  let title = props.title;
  if (playlist != null) {
    console.log(props.playlist["default"]);
  }

  const constructListGroup = () => {
    let dataDicts = playlist["default"];
    return (
      <ListGroup variant="flush">
        {dataDicts.map((dict, index) => {
          return <ListGroup.Item key={index}> {dict["title"]} </ListGroup.Item>;
        })}
      </ListGroup>
    );
  };

  return (
    <Col xs={3} className="playlist-display">
      <Row className="playlist-display-title">
        <h2>{title == null ? "Select a Playlist" : title}</h2>
      </Row>
      <Row>{playlist == null ? null : constructListGroup()}</Row>
    </Col>
  );
};
export default ShowPlaylist;
